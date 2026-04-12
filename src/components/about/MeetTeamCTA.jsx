import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function MeetTeamCTA() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
        width: '100%',
        paddingTop: '80px',
        paddingBottom: '80px',
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
          maxWidth: '700px',
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
          The People Behind The Work
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
            fontSize: '36px',
            lineHeight: '1.3',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            marginTop: '12px',
          }}
        >
          Meet Our Team
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
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#555555',
            textAlign: 'center',
            margin: 0,
            marginTop: '16px',
          }}
        >
          Rise N Shine is powered entirely by students and young professionals
          who give their time to build something bigger than themselves. From our
          founders to our volunteer coordinators, every person on our team is
          here because they believe in the mission.
        </motion.p>

        {/* Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
        >
          <Link
            to="/about/our-team"
            style={{
              backgroundColor: '#1A3C5E',
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: '16px',
              padding: '14px 32px',
              borderRadius: '24px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '32px',
            }}
          >
            Meet the Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
