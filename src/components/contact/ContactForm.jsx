import { useState } from 'react';
import { motion } from 'framer-motion';

/* ── icons (inline SVG) ──────────────────────────────────────────── */
const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#F5A623" strokeWidth="1.8" />
    <path d="M2 8l10 7 10-7" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.6 10.8a14.4 14.4 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.25 1L6.6 10.8z"
      stroke="#F5A623"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1A3C5E" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1A3C5E" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4l16 16M4 20L20 4" stroke="#1A3C5E" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 4h4l14 16h-4L3 4z" fill="#1A3C5E" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="3" fill="#1A3C5E" />
    <polygon points="10,9 16,12 10,15" fill="white" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1A3C5E" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="#1A3C5E" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1" fill="#1A3C5E" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#1A3C5E" />
    <path d="M7 10v7M7 7v.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M11 17v-4a2 2 0 014 0v4M11 10v7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/* ── animation variants ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

/* ── shared field style ──────────────────────────────────────────── */
const fieldStyle = {
  backgroundColor: 'white',
  border: '1px solid #DDDDDD',
  borderRadius: '8px',
  padding: '14px 16px',
  width: '100%',
  fontSize: '15px',
  color: '#1C1C1C',
  fontFamily: "'Open Sans', sans-serif",
  boxSizing: 'border-box',
  outline: 'none',
};

/* ── social links data ───────────────────────────────────────────── */
const socialLinks = [
  { icon: <FacebookIcon />, href: 'https://www.facebook.com/risenshinefoundation' },
  { icon: <TwitterIcon />, href: 'https://twitter.com/risenshinefdn' },
  { icon: <YouTubeIcon />, href: 'https://www.youtube.com/@risenshinefoundation' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/risenshinefoundation' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/rise-n-shine-foundation-inc' },
];

/* ── label style ─────────────────────────────────────────────────── */
const labelStyle = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: '600',
  fontSize: '13px',
  color: '#F5A623',
  textTransform: 'uppercase',
  letterSpacing: '1.56px',
  margin: 0,
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* form submission logic goes here */
  };

  return (
    <section
      style={{
        backgroundColor: 'white',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'flex-start',
        }}
      >
        {/* ── Left Column ──────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          style={{ flex: '0 0 calc(45% - 32px)', minWidth: '260px' }}
        >
          <p style={labelStyle}>Reach Us Directly</p>

          <h2
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: '32px',
              color: '#1A3C5E',
              margin: 0,
              marginTop: '12px',
              lineHeight: '1.2',
            }}
          >
            Contact Information
          </h2>

          {/* Contact items */}
          <div
            style={{
              marginTop: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ flexShrink: 0 }}>
                <EmailIcon />
              </div>
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '15px',
                  color: '#1C1C1C',
                  wordBreak: 'break-word',
                }}
              >
                info@risenshinefoundation.org
              </span>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ flexShrink: 0 }}>
                <PhoneIcon />
              </div>
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '15px',
                  color: '#1C1C1C',
                }}
              >
                +1 240-394-9596
              </span>
            </div>
          </div>

          {/* Follow Us */}
          <div style={{ marginTop: '40px' }}>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '600',
                fontSize: '13px',
                color: '#888888',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                margin: 0,
              }}
            >
              Follow Us
            </p>

            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    textDecoration: 'none',
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right Column ─────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          style={{ flex: '1 1 calc(55% - 32px)', minWidth: '260px' }}
        >
          <p style={labelStyle}>Send a Message</p>

          <h2
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: '32px',
              color: '#1A3C5E',
              margin: 0,
              marginTop: '12px',
              lineHeight: '1.2',
            }}
          >
            Get In Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              marginTop: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              style={fieldStyle}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              style={fieldStyle}
            />

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              style={{ ...fieldStyle, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' }}
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Donation">Donation</option>
              <option value="Media">Media</option>
              <option value="School Chapter">School Chapter</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={5}
              style={{ ...fieldStyle, resize: 'vertical' }}
            />

            <button
              type="submit"
              style={{
                marginTop: '8px',
                backgroundColor: '#F5A623',
                color: '#1C1C1C',
                fontWeight: 'bold',
                fontSize: '16px',
                fontFamily: "'Open Sans', sans-serif",
                padding: '14px 24px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
