import { motion } from 'framer-motion';

function ShieldIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 4 L34 9 L34 20 C34 28 20 36 20 36 C20 36 6 28 6 20 L6 9 Z"
        stroke="#F5A623"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      <polyline
        points="14,20 18,24 26,16"
        stroke="#F5A623"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function DonateTrust() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <ShieldIcon />

        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '28px',
            color: '#1A3C5E',
            margin: 0,
            lineHeight: '1.3',
          }}
        >
          Your donation is safe and tax-deductible.
        </h2>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '16px',
            color: '#555555',
            lineHeight: '1.7',
            margin: 0,
          }}
        >
          Rise N Shine Foundation is a registered 501(c)3 nonprofit organization.
          EIN: 84-3822442. Every donation is 100% tax-deductible. If you need a
          letter of acknowledgment for tax purposes, email us at{' '}
          <a
            href="mailto:info@risenshinefoundation.org"
            style={{ color: '#1A3C5E', textDecoration: 'underline' }}
          >
            info@risenshinefoundation.org
          </a>
          .
        </p>
      </motion.div>
    </section>
  );
}
