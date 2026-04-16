import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.18, ease: 'easeOut' },
  }),
};

export default function ImpactHero() {
  return (
    <section
      style={{
        backgroundColor: '#1A3C5E',
        width: '100%',
        minHeight: '60vh',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
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
        Our Impact
      </motion.p>

      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '56px',
          lineHeight: '1.5',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
          marginTop: '14px',
        }}
      >
        Real numbers. Real change.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '19px',
          lineHeight: '1.7',
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: 0,
          marginTop: '16px',
        }}
      >
        Here is what Rise N Shine has accomplished alongside our volunteers,
        schools, and community partners.
      </motion.p>
    </section>
  );
}
