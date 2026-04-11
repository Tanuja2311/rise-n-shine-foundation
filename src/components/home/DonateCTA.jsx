import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DonateCTA() {
  return (
    <section
      style={{
        backgroundColor: '#F5A623',
        width: '100%',
        padding: '80px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          maxWidth: '760px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '40px',
            lineHeight: '1.2',
            color: '#1A3C5E',
            margin: 0,
          }}
        >
          Every dollar goes back to the community.
        </h2>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#1C1C1C',
            marginTop: '16px',
            marginBottom: 0,
          }}
        >
          Rise N Shine is a 501(c)3 nonprofit. All donations are 100% tax-deductible. EIN: 84-3822442.
        </p>

        <Link
          to="/get-involved/donate"
          style={{
            marginTop: '32px',
            backgroundColor: '#1A3C5E',
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '14px 32px',
            borderRadius: '24px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Donate Today
        </Link>
      </motion.div>
    </section>
  );
}
