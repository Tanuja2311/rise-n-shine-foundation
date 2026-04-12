import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function MissionSection() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
          Our Mission
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '40px',
            lineHeight: '1.2',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            marginTop: '12px',
          }}
        >
          Our Mission
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '1.75',
            color: '#555555',
            textAlign: 'center',
            margin: 0,
            marginTop: '20px',
          }}
        >
          Rise N Shine Foundation is a 501(c)3 non-profit organization dedicated
          to making our community a better place through volunteer-based
          solutions. Our vision is to motivate people of all ages and backgrounds
          to take on leadership positions to help the less fortunate.
        </motion.p>
      </div>
    </section>
  );
}
