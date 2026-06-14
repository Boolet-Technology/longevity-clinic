import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_MESSAGE_LENGTH = 10000;
const MAX_FIELD_LENGTH = 500;

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = sanitize(body.fullName);
    const age = sanitize(body.age);
    const gender = sanitize(body.gender);
    const email = sanitize(body.email).slice(0, 254);
    const phone = sanitize(body.phone);
    const message =
      typeof body.message === 'string'
        ? body.message.trim().slice(0, MAX_MESSAGE_LENGTH)
        : '';

    if (!fullName || !age || !gender || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST?.trim();
    const port = parseInt(process.env.SMTP_PORT?.trim() || '465', 10);
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASSWORD;
    const to = process.env.CONTACT_TO_EMAIL?.trim() || user;

    if (!host || !user || !pass || !to) {
      console.error('Contact API: missing SMTP configuration');
      return NextResponse.json(
        { error: 'Message could not be sent. Please try again later.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const text = [
      `New contact form submission - UK Longevity Clinic website`,
      ``,
      `Name: ${fullName}`,
      `Age: ${age}`,
      `Gender: ${gender}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      ``,
      `Message:`,
      message,
    ].join('\n');

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Age:</strong> ${escapeHtml(age)}</p>
      <p><strong>Gender:</strong> ${escapeHtml(gender)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>
    `;

    await transporter.sendMail({
      from: `"UK Longevity Clinic" <${user}>`,
      to,
      replyTo: email,
      subject: `Website contact: ${fullName}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form send error:', err);
    return NextResponse.json(
      { error: 'Message could not be sent. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
