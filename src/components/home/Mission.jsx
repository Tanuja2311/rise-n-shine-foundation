import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Mission() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      {/* Label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '14px',
          fontWeight: '400',
          color: '#F5A623',
          textTransform: 'uppercase',
          letterSpacing: '1.56px',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Our Mission
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={1}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: '700',
          color: '#1A3C5E',
          textAlign: 'center',
          maxWidth: '621px',
          lineHeight: '1.2',
          margin: 0,
        }}
      >
        We believe every person deserves food, dignity, and a future.
      </motion.h2>

      {/* Body */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={2}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 'clamp(16px, 2.5vw, 18px)',
          fontWeight: '400',
          color: '#555555',
          textAlign: 'center',
          maxWidth: '656px',
          lineHeight: '30.6px',
          margin: 0,
        }}
      >
        Rise N Shine Foundation is dedicated to making our community a better
        place through volunteer-based solutions. We motivate people of all ages
        and backgrounds to take on leadership roles to help the less fortunate.
        Founded by youth, powered by community.
      </motion.p>
    </section>
  );
}
