"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RetroHome() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99999,
        backgroundColor: '#f8f9fa',
        overflow: 'auto',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#333333',
      }}
    >

      <div style={{ backgroundColor: '#222', borderBottom: '1px solid #080808', height: '50px' }}>
        <div style={{ maxWidth: '1170px', margin: '0 auto', padding: '0 15px', display: 'flex', alignItems: 'center', height: '100%' }}>
            <div style={{ color: '#9d9d9d', fontSize: '18px', fontWeight: 500, marginRight: 'auto' }}>
                UK Longevity Clinic
            </div>
            <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
                <Link href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                <Link href="#" style={{ color: '#9d9d9d', textDecoration: 'none' }}>About Us</Link>
                <Link href="#" style={{ color: '#9d9d9d', textDecoration: 'none' }}>Services</Link>
                <Link href="#" style={{ color: '#9d9d9d', textDecoration: 'none' }}>Contact</Link>
            </div>
        </div>
      </div>

      {/* MARQUEE - OLD SCHOOL TOUCH */}
      <div style={{ backgroundColor: '#052A2E', color: '#fff', padding: '10px', fontSize: '16px', borderBottom: '1px solid #d6e9c6' }}>
        <marquee scrollamount="8">
           <span className="font-bold"> LATEST NEWS: UK LONGEVITY CLINIC VOTED #1 IN LONDON </span> NEW STEM CELL THERAPY NOW AVAILABLE <span className="font-bold"> BOOK YOUR CONSULTATION TODAY TO SECURE YOUR SPOT </span> SUMMER SPECIAL: 20% OFF ALL DIAGNOSTICS         
        </marquee>
      </div>

      {/* JUMBOTRON */}
      <div style={{ backgroundColor: '#eee', padding: '48px 0', marginBottom: '30px', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1170px', margin: '0 auto', padding: '0 15px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '63px', marginBottom: '10px', fontWeight: 500 }}>Live Younger, Longer.</h1>
            <p style={{ fontSize: '21px', fontWeight: 200, marginBottom: '25px', color: '#555' }}>
                The UK's premier clinic for anti-aging and regenerative medicine.
            </p>
            <p>
                <a href="#" style={{ 
                    backgroundColor: '#337ab7', 
                    color: '#fff', 
                    padding: '15px 30px', 
                    borderRadius: '4px', 
                    textDecoration: 'none', 
                    fontSize: '18px',
                    borderColor: '#2e6da4',
                    border: '1px solid'
                }}>
                    Learn more &raquo;
                </a>
                {/* book now button */}
                <a href="#" style={{ 
                    backgroundColor: '#337ab7', 
                    color: '#fff', 
                    padding: '15px 30px', 
                    borderRadius: '4px', 
                    textDecoration: 'none', 
                    fontSize: '18px',
                    borderColor: '#2e6da4',
                    border: '1px solid',
                    marginLeft: '10px'
                }}>
                    Book now &raquo;
                </a>
            </p>
        </div>
      </div>

      <div style={{ maxWidth: '1170px', margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
            
            {/* MAIN CONTENT COLUMN */}
            <div style={{ flex: '0 0 75%', maxWidth: '75%' }}>
                {/* COLUMNS */}
                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    
                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ fontSize: '30px', marginBottom: '15px' }}>Stem Cell Therapy</h2>
                        <img 
                            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500" 
                            style={{ width: '100%', marginBottom: '15px', borderRadius: '4px' }}
                        />
                        <p style={{ lineHeight: '1.5' }}>
                        Our cutting-edge stem cell therapies and NAD+ infusions help rejuvenate your cells, boosting energy levels and repairing tissue damage from aging.
                        </p>
                        <p><a href="#" style={{ color: '#337ab7', textDecoration: 'none' }}>View details &raquo;</a></p>
                    </div>

                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ fontSize: '30px', marginBottom: '15px' }}>Aesthetics</h2>
                        <img 
                            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=500" 
                            style={{ width: '100%', marginBottom: '15px', borderRadius: '4px' }}
                        />
                        <p style={{ lineHeight: '1.5' }}>
                            Our non-invasive aesthetic treatments, including laser therapy and microdermabrasion, help improve skin texture and reduce the appearance of wrinkles and scars.
                        </p>
                        <p><a href="#" style={{ color: '#337ab7', textDecoration: 'none' }}>View details &raquo;</a></p>
                    </div>

                    <div style={{ flex: '1 1 300px' }}>
                        <h2 style={{ fontSize: '30px', marginBottom: '15px' }}>Consultation</h2>
                        <img 
                            src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?auto=format&fit=crop&w=500" 
                            style={{ width: '100%', marginBottom: '15px', borderRadius: '4px' }}
                        />
                        <p style={{ lineHeight: '1.5' }}>
                            Our expert consultations combine personalized nutrition, fitness, and medical interventions to create a comprehensive plan tailored to your unique needs.
                        </p>
                        <p><a href="#" style={{ 
                            backgroundColor: '#5cb85c', 
                            color: 'white', 
                            textDecoration: 'none', 
                            padding: '6px 12px', 
                            borderRadius: '4px',
                            fontSize: '14px' 
                        }}>Book Now</a></p>
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: 0, borderTop: '5px solid #052A2E' }} />

                {/* FEATURETTES */}
                <div style={{ display: 'flex', alignItems: 'center', margin: '80px 0' }}>
                    <div style={{ flex: 1, paddingRight: '50px' }}>
                        <h2 style={{ fontSize: '50px', fontWeight: 500, marginTop: '20px', marginBottom: '10px', lineHeight: 1 }}>
                            Advanced Diagnostics. <span style={{ color: '#777' }}>See inside your health.</span>
                        </h2>
                        <p style={{ fontSize: '21px', fontWeight: 200, color: '#555', lineHeight: 1.4 }}>
                            We use the latest MRI and CT scanning technology to provide a comprehensive analysis of your internal health. Early detection is the key to longevity.
                        </p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500" 
                        style={{ width: '500px', height: '500px', backgroundColor: '#eee' }} 
                        className="rounded-br-4xl rounded-tl-4xl shadow-lg" />
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: 0, borderTop: '5px solid #052A2E' }} />

                <div style={{ display: 'flex', alignItems: 'center', margin: '80px 0', flexDirection: 'row-reverse' }}>
                    <div style={{ flex: 1, paddingLeft: '50px' }}>
                        <h2 style={{ fontSize: '50px', fontWeight: 500, marginTop: '20px', marginBottom: '10px', lineHeight: 1 }}>
                            Cellular Regeneration. <span style={{ color: '#777' }}>Renew yourself.</span>
                        </h2>
                        <p style={{ fontSize: '21px', fontWeight: 200, color: '#555', lineHeight: 1.4 }}>
                            Our cutting-edge stem cell therapies and NAD+ infusions help rejuvenate your cells, boosting energy levels and repairing tissue damage from aging.
                        </p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img 
                        src="https://plus.unsplash.com/premium_photo-1664304572899-42fd2fab9e00?auto=format&fit=crop&w=500"
                        style={{ width: '500px', height: '500px', backgroundColor: '#eee' }} 
                        className="rounded-br-4xl rounded-tl-4xl shadow-lg"
                        />
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: 0, borderTop: '5px solid #052A2E' }} />

                <div style={{ display: 'flex', alignItems: 'center', margin: '80px 0' }}>
                    <div style={{ flex: 1, paddingRight: '50px' }}>
                        <h2 style={{ fontSize: '50px', fontWeight: 500, marginTop: '20px', marginBottom: '10px', lineHeight: 1 }}>
                            Expert Consultation. <span style={{ color: '#777' }}>Guided by the best.</span>
                        </h2>
                        <p style={{ fontSize: '21px', fontWeight: 200, color: '#555', lineHeight: 1.4 }}>
                            Our team of world-renowned specialists will create a personalized roadmap for your health, combining nutrition, fitness, and medical interventions.
                        </p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <img src="https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?auto=format&fit=crop&w=500" 
                        style={{ width: '500px', height: '500px', backgroundColor: '#eee' }}
                        className="rounded-br-4xl rounded-tl-4xl shadow-lg" />
                    </div>
                </div>

                <hr style={{ margin: '40px 0', border: 0, borderTop: '5px solid #052A2E' }} />

                {/* PRICING */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>Membership Tiers</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        
                        <div style={{ border: '1px solid #ddd', borderRadius: '4px', width: '300px', padding: '20px' }}>
                            <h3 style={{ margin: '0 0 15px', color: '#333' }}>Basic</h3>
                            <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>£99<span style={{ fontSize: '16px', fontWeight: 'normal' }}>/mo</span></div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#777' }}>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Annual Health Check</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Nutrition Plan</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Access to Gym</li>
                            </ul>
                            <button style={{ width: '100%', padding: '10px', backgroundColor: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>
                                Sign Up
                            </button>
                        </div>

                        <div style={{ border: '1px solid #ddd', borderRadius: '4px', width: '300px', padding: '20px' }}>
                            <h3 style={{ margin: '0 0 15px', color: '#333' }}>Premium</h3>
                            <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>£299<span style={{ fontSize: '16px', fontWeight: 'normal' }}>/mo</span></div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#777' }}>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Quarterly Diagnostics</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>24/7 Doctor Access</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Supplement Pack</li>
                            </ul>
                            <button style={{ width: '100%', padding: '10px', backgroundColor: '#337ab7', color: '#fff', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>
                                Select Plan
                            </button>
                        </div>

                        <div style={{ border: '1px solid #ddd', borderRadius: '4px', width: '300px', padding: '20px' }}>
                            <h3 style={{ margin: '0 0 15px', color: '#333' }}>Elite</h3>
                            <div style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>£999<span style={{ fontSize: '16px', fontWeight: 'normal' }}>/mo</span></div>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: '#777' }}>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Full Genome Sequencing</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Stem Cell Therapy</li>
                                <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Private Suite</li>
                            </ul>
                            <button style={{ width: '100%', padding: '10px', backgroundColor: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' }}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* SIDEBAR */}
            <div style={{ flex: '0 0 25%', maxWidth: '25%' }}>
                {/* Search Widget */}
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #e3e3e3' }}>
                    <h4 style={{ marginTop: 0, marginBottom: '10px' }}>Search</h4>
                    <div style={{ display: 'flex' }}>
                        <input type="text" style={{ flex: 1, padding: '4px', border: '1px solid #ccc', borderRight: 0, borderRadius: '4px 0 0 4px' }} />
                        <button style={{ padding: '4px 8px', backgroundColor: '#default', border: '1px solid #ccc', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>Go</button>
                    </div>
                </div>

                {/* Blog Categories */}
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #e3e3e3' }}>
                    <h4 style={{ marginTop: 0, marginBottom: '10px' }}>Categories</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ borderBottom: '1px solid #ddd', padding: '5px 0' }}><a href="#" style={{ color: '#337ab7' }}>Anti-Aging (12)</a></li>
                        <li style={{ borderBottom: '1px solid #ddd', padding: '5px 0' }}><a href="#" style={{ color: '#337ab7' }}>Diet & Nutrition (5)</a></li>
                        <li style={{ borderBottom: '1px solid #ddd', padding: '5px 0' }}><a href="#" style={{ color: '#337ab7' }}>Stem Cells (8)</a></li>
                        <li style={{ borderBottom: '1px solid #ddd', padding: '5px 0' }}><a href="#" style={{ color: '#337ab7' }}>Aesthetics (15)</a></li>
                        <li style={{ padding: '5px 0' }}><a href="#" style={{ color: '#337ab7' }}>Uncategorized (2)</a></li>
                    </ul>
                </div>

                {/* Recent Posts */}
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #e3e3e3' }}>
                    <h4 style={{ marginTop: 0, marginBottom: '10px' }}>Recent Posts</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px' }}>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ color: '#337ab7', fontWeight: 'bold' }}>Top 10 Foods for Long Life</a><br/>
                            <span style={{ color: '#999' }}>January 15, 2015</span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <a href="#" style={{ color: '#337ab7', fontWeight: 'bold' }}>Why Stem Cells Are The Future</a><br/>
                            <span style={{ color: '#999' }}>December 28, 2014</span>
                        </li>
                        <li>
                            <a href="#" style={{ color: '#337ab7', fontWeight: 'bold' }}>New Clinic Grand Opening!</a><br/>
                            <span style={{ color: '#999' }}>November 10, 2014</span>
                        </li>
                    </ul>
                </div>

                {/* Archives */}
                <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #e3e3e3' }}>
                    <h4 style={{ marginTop: 0, marginBottom: '10px' }}>Archives</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li><a href="#" style={{ color: '#337ab7' }}>January 2015</a></li>
                        <li><a href="#" style={{ color: '#337ab7' }}>December 2014</a></li>
                        <li><a href="#" style={{ color: '#337ab7' }}>November 2014</a></li>
                        <li><a href="#" style={{ color: '#337ab7' }}>October 2014</a></li>
                        <li><a href="#" style={{ color: '#337ab7' }}>September 2014</a></li>
                    </ul>
                </div>

                {/* Advertising / Banner Ads */}
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    
                    {/* Fake text ad 1 */}
                    <div style={{ width: '100%', backgroundColor: '#fff', border: '1px solid #ddd', padding: '10px', marginBottom: '15px' }}>
                        <div style={{ fontSize: '12px', color: '#999', textAlign: 'right', marginBottom: '5px' }}>AdChoice &gt;</div>
                        <img src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=150&q=80" style={{ float: 'left', width: '80px', height: '80px', marginRight: '10px' }} />
                        <div style={{ textAlign: 'left' }}>
                            <h5 style={{ margin: '0 0 5px', fontSize: '14px', color: '#00c', textDecoration: 'underline', cursor: 'pointer' }}>Doctors Hate This!</h5>
                            <p style={{ fontSize: '12px', margin: 0, lineHeight: '1.3' }}>
                                Local mom reveals 1 weird tip to look 20 years younger. <a href="#">Read more...</a>
                            </p>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                    </div>

                    {/* Fake text ad 2 */}
                    <div style={{ width: '100%', backgroundColor: '#fff', border: '1px solid #ddd', padding: '10px' }}>
                        <div style={{ fontSize: '12px', color: '#999', textAlign: 'right', marginBottom: '5px' }}>Sponsored</div>
                         <h5 style={{ margin: '0 0 5px', fontSize: '16px', color: '#d00', fontWeight: 'bold' }}>ATTENTION:</h5>
                         <p style={{ fontSize: '13px', marginBottom: '10px' }}>
                             Do Not Pay Your Mortgage Until You Read This. You May Be Owed Thousands.
                         </p>
                         <button style={{ backgroundColor: '#ff9800', color: '#fff', border: 'none', padding: '5px 15px', borderRadius: '3px', cursor: 'pointer' }}>Check Eligibility &gt;</button>
                    </div>

                </div>
            </div>

        </div>

        <hr style={{ margin: '40px 0', border: 0, borderTop: '5px solid #052A2E' }} />

        {/* OLD SCHOOL CONTACT FORM */}
        <div style={{ maxWidth: '600px', margin: '0 auto 60px auto', padding: '20px', backgroundColor: '#f5f5f5', border: '1px solid #e3e3e3', borderRadius: '4px' }}>
            <h2 style={{ marginTop: 0, fontSize: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px', marginBottom: '20px' }}>Contact Us</h2>
            <form>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
                    <input type="text" style={{ 
                        display: 'block', 
                        width: '100%', 
                        height: '34px', 
                        padding: '6px 12px', 
                        fontSize: '14px', 
                        lineHeight: 1.42857143, 
                        color: '#555', 
                        backgroundColor: '#fff', 
                        backgroundImage: 'none', 
                        border: '1px solid #ccc', 
                        borderRadius: '4px',
                        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)'
                    }} placeholder="Enter your name" />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address</label>
                    <input type="email" style={{ 
                        display: 'block', 
                        width: '100%', 
                        height: '34px', 
                        padding: '6px 12px', 
                        fontSize: '14px', 
                        lineHeight: 1.42857143, 
                        color: '#555', 
                        backgroundColor: '#fff', 
                        backgroundImage: 'none', 
                        border: '1px solid #ccc', 
                        borderRadius: '4px',
                        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)'
                    }} placeholder="Enter email" />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Subject</label>
                    <select style={{ 
                        display: 'block', 
                        width: '100%', 
                        height: '34px', 
                        padding: '6px 12px', 
                        fontSize: '14px', 
                        lineHeight: 1.42857143, 
                        color: '#555', 
                        backgroundColor: '#fff', 
                        border: '1px solid #ccc', 
                        borderRadius: '4px'
                    }}>
                        <option>General Inquiry</option>
                        <option>Book Appointment</option>
                        <option>Feedback</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
                    <textarea rows={5} style={{ 
                        display: 'block', 
                        width: '100%', 
                        padding: '6px 12px', 
                        fontSize: '14px', 
                        lineHeight: 1.42857143, 
                        color: '#555', 
                        backgroundColor: '#fff', 
                        border: '1px solid #ccc', 
                        borderRadius: '4px',
                        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)'
                    }}></textarea>
                </div>
                <button type="button" style={{ 
                    color: '#fff', 
                    backgroundColor: '#337ab7', 
                    borderColor: '#2e6da4', 
                    display: 'inline-block', 
                    padding: '6px 12px', 
                    marginBottom: 0, 
                    fontSize: '14px', 
                    fontWeight: 400, 
                    lineHeight: 1.42857143, 
                    textAlign: 'center', 
                    whiteSpace: 'nowrap', 
                    verticalAlign: 'middle', 
                    touchAction: 'manipulation', 
                    cursor: 'pointer', 
                    border: '1px solid transparent', 
                    borderRadius: '4px' 
                }}>
                    Send Message
                </button>
            </form>
        </div>

        <hr style={{ margin: '40px 0', border: 0, borderTop: '1px solid #eee' }} />

        {/* FOOTER */}
        <footer style={{ paddingBottom: '40px', color: '#777' }}>
            <p>&copy; 2025 UK Longevity Clinic.</p>
        </footer>
      </div>
    </div>
  );
}
