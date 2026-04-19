import { motion } from 'framer-motion';
import heroImage from '../../../../assets/about_meet_the_team.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.18, ease: 'easeOut' },
  }),
};

export default function OurTeamHero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '781px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
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
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
      }}>
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
        The People Behind The Work
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
          lineHeight: '1.1',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
          marginTop: '12px',
        }}
      >
        Meet the Team
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
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: 0,
          marginTop: '16px',
        }}
      >
        Youth-led. Community-powered. Every member of our team is a student or
        young professional giving their time to build something bigger.
      </motion.p>
      </div>
    </section>
  );
}
