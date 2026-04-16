import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function DocumentIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="4" width="28" height="40" rx="3" stroke="#DDDDDD" strokeWidth="2.5" fill="none" />
      <line x1="16" y1="16" x2="32" y2="16" stroke="#DDDDDD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="23" x2="32" y2="23" stroke="#DDDDDD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="26" y2="30" stroke="#DDDDDD" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AnnualReports() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
        width: '100%',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '13px',
            color: '#F5A623',
            textTransform: 'uppercase',
            letterSpacing: '1.56px',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Documents
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            marginTop: '12px',
          }}
        >
          Annual Reports &amp; Documents
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#555555',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '16px auto 0',
          }}
        >
          Official organizational documents available for download.
        </motion.p>

        {/* Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <DocumentIcon />

          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '16px',
              lineHeight: '1.7',
              color: '#888888',
              textAlign: 'center',
              maxWidth: '460px',
              margin: 0,
              marginTop: '16px',
            }}
          >
            Annual reports will be available here. For document requests contact{' '}
            <a
              href="mailto:info@risenshinefoundation.org"
              style={{ color: '#888888', textDecoration: 'underline' }}
            >
              info@risenshinefoundation.org
            </a>
            .
          </p>

          <Link
            to="/contact"
            style={{
              backgroundColor: 'transparent',
              color: '#1A3C5E',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
              fontSize: '15px',
              padding: '12px 28px',
              borderRadius: '24px',
              border: '2px solid #1A3C5E',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '20px',
            }}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
