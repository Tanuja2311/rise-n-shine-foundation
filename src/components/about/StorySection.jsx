import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function StorySection() {
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          How We Started
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
          Our Story
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
          Rise N Shine Foundation was previously known as Amula Foundation, Inc.
          What started as a student-led initiative in Montgomery County has grown
          into a recognized nonprofit running programs across 100+ schools in
          Maryland. We are driven entirely by volunteer energy and a belief that
          young people can lead real change.
        </motion.p>
      </div>
    </section>
  );
}
