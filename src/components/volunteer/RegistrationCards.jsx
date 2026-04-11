import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ClipboardIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="8" width="20" height="26" rx="2" stroke="#F5A623" strokeWidth="2" fill="none" />
      <rect x="15" y="5" width="10" height="6" rx="1.5" stroke="#F5A623" strokeWidth="2" fill="none" />
      <line x1="14" y1="18" x2="26" y2="18" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="23" x2="26" y2="23" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="28" x2="20" y2="28" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="15" cy="14" r="5" stroke="#1A3C5E" strokeWidth="2" fill="none" />
      <path d="M5 32c0-5.523 4.477-10 10-10" stroke="#1A3C5E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="27" cy="14" r="5" stroke="#1A3C5E" strokeWidth="2" fill="none" />
      <path d="M27 22c5.523 0 10 4.477 10 10" stroke="#1A3C5E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M15 32h12" stroke="#1A3C5E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function RegistrationCards() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', maxWidth: '900px', width: '100%' }}>
        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(28px, 5vw, 40px)',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.5',
          }}
        >
          Ready to get started?
        </h2>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '18px',
            color: '#555555',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.5',
          }}
        >
          Choose the option that fits you. Both paths earn verified volunteer hours.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          maxWidth: '900px',
          width: '100%',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        {/* Card 1 — Volunteer Registration */}
        <motion.div
          variants={cardVariants}
          style={{
            backgroundColor: '#1A3C5E',
            borderRadius: '16px',
            flex: '1 1 380px',
            minWidth: '280px',
            maxWidth: '440px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            padding: '40px 32px',
          }}
        >
          <ClipboardIcon />

          <h3
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: '22px',
              color: '#FFFFFF',
              textAlign: 'center',
              margin: 0,
              lineHeight: '1.5',
            }}
          >
            Volunteer Registration
          </h3>

          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.80)',
              textAlign: 'center',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            Sign up for individual volunteer sessions. Open to ages 6 and above.
            Great for students, families, and community members.
          </p>

          <a
            href="https://forms.gle/fHx3bmszKSipFyPc9"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: '#F5A623',
              color: '#1C1C1C',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              padding: '16px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              boxSizing: 'border-box',
              cursor: 'pointer',
              border: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Register Now
          </a>
        </motion.div>

        {/* Card 2 — Join Our Team */}
        <motion.div
          variants={cardVariants}
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #1A3C5E',
            borderRadius: '16px',
            flex: '1 1 380px',
            minWidth: '280px',
            maxWidth: '440px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            padding: '40px 32px',
          }}
        >
          <PeopleIcon />

          <h3
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: '22px',
              color: '#1A3C5E',
              textAlign: 'center',
              margin: 0,
              lineHeight: '1.5',
            }}
          >
            Join Our Team
          </h3>

          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '15px',
              color: '#555555',
              textAlign: 'center',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            Apply for a leadership or operational role within Rise N Shine. Build
            real nonprofit management experience.
          </p>

          <a
            href="https://docs.google.com/forms/d/1F0MH2lzxajvoGfLDUEM7wTKvg9dNXQ4sOitNZQL8Dcc/viewform"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: '#1A3C5E',
              color: '#FFFFFF',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              padding: '16px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              boxSizing: 'border-box',
              cursor: 'pointer',
              border: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Apply to Join
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
