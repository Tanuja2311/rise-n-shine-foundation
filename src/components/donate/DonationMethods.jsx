import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ── Inline SVG icons ─────────────────────────────────────── */

function PayPalIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="12" width="36" height="26" rx="3" stroke="#F5A623" strokeWidth="2.2" fill="none" />
      <line x1="6" y1="20" x2="42" y2="20" stroke="#F5A623" strokeWidth="2.2" />
      <rect x="11" y="25" width="10" height="6" rx="1.5" fill="#F5A623" />
    </svg>
  );
}

function ZelleIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="28,9 16,24 24,24 20,39 32,24 24,24" stroke="#F5A623" strokeWidth="2.2" fill="#F5A623" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="12" width="36" height="26" rx="3" stroke="#F5A623" strokeWidth="2.2" fill="none" />
      <polyline points="6,15 24,28 42,15" stroke="#F5A623" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Card styles ──────────────────────────────────────────── */

const cardStyle = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #EEEEEE',
  borderRadius: '12px',
  padding: '40px 32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  flex: '1 1 280px',
  minWidth: '0',
};

export default function DonationMethods() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '14px',
            color: '#F5A623',
            textTransform: 'uppercase',
            letterSpacing: '1.56px',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Choose a Method
        </p>
        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(28px, 5vw, 40px)',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.2',
          }}
        >
          Ways to Give
        </h2>
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
          gap: '24px',
          width: '100%',
          maxWidth: '1040px',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        {/* PayPal */}
        <motion.div variants={cardVariants} style={cardStyle}>
          <PayPalIcon />
          <h3
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '22px',
              color: '#1A3C5E',
              textAlign: 'center',
              margin: 0,
            }}
          >
            PayPal
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
            Fast and secure online donation. No account required.
          </p>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=ZSRXETNUELWBU"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: '#F5A623',
              color: '#1C1C1C',
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '12px 24px',
              borderRadius: '24px',
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            Donate via PayPal
          </a>
        </motion.div>

        {/* Zelle */}
        <motion.div variants={cardVariants} style={cardStyle}>
          <ZelleIcon />
          <h3
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '22px',
              color: '#1A3C5E',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Zelle
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
            Send directly to:{' '}
            <strong style={{ color: '#1A3C5E', fontWeight: '700' }}>
              info@risenshinefoundation.org
            </strong>
          </p>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontStyle: 'italic',
              fontSize: '13px',
              color: '#888888',
              textAlign: 'center',
              margin: 0,
            }}
          >
            No fees. Instant transfer.
          </p>
        </motion.div>

        {/* Check */}
        <motion.div variants={cardVariants} style={cardStyle}>
          <CheckIcon />
          <h3
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '22px',
              color: '#1A3C5E',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Check
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
            Make checks payable to:{' '}
            <strong style={{ color: '#1A3C5E', fontWeight: '700' }}>
              Rise N Shine Foundation, Inc.
            </strong>
          </p>
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontStyle: 'italic',
              fontSize: '13px',
              color: '#888888',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Previously known as Amula Foundation, Inc.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
