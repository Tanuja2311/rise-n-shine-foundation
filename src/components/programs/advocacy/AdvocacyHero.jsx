import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function AdvocacyHero() {
  return (
    <section
      style={{
        backgroundColor: '#1A3C5E',
        width: '100%',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Breadcrumb */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.6)',
          margin: 0,
        }}
      >
        <Link
          to="/programs"
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            textDecoration: 'underline',
          }}
        >
          Programs
        </Link>
        {' / Advocacy'}
      </motion.p>

      {/* Bill label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '14px',
          color: '#F5A623',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginTop: '8px',
          marginBottom: 0,
        }}
      >
        HB150 / SB124
      </motion.p>

      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: 'clamp(36px, 5vw, 56px)',
          lineHeight: '1.15',
          color: '#ffffff',
          maxWidth: '720px',
          margin: '32px 0 0 0',
        }}
      >
        We don't just serve the community. We fight for it.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '1.7',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '600px',
          marginTop: '20px',
          marginBottom: 0,
        }}
      >
        Rise N Shine championed the HB150/SB124 bill — a $500K grant program to
        fund composting in Maryland schools. It passed. Now we're making sure it
        stays funded.
      </motion.p>
    </section>
  );
}
