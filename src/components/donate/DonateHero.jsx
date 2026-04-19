import { motion } from 'framer-motion';
import heroImage from '../../../assets/donate.png';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function DonateHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '781px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Navy overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(26, 60, 94, 0.7)' }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}>
      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: 'clamp(36px, 6vw, 56px)',
          lineHeight: '1.15',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Make a Donation
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '1.7',
          color: 'rgba(255,255,255,0.80)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: 0,
        }}
      >
        Rise N Shine is a 501(c)3 nonprofit. Every penny you give goes directly
        back into our community. All donations are 100% tax-deductible.
      </motion.p>

      {/* EIN badge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        style={{
          border: '1px solid #FFFFFF',
          borderRadius: '999px',
          padding: '8px 20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '14px',
            color: '#FFFFFF',
            whiteSpace: 'nowrap',
          }}
        >
          EIN: 84-3822442
        </span>
      </motion.div>
      </div>
    </section>
  );
}
