import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Retro Design - Internal Only',
  robots: {
    index: false,
    follow: false, // Prevents search engines from indexing this page
  },
};

export default function RetroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Block access in production environment
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  return <>{children}</>;
}
