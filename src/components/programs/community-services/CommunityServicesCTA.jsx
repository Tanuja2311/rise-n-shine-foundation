import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function CommunityServicesCTA() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
        width: '100%',
        paddingTop: '72px',
        paddingBottom: '72px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '36px',
          lineHeight: '1.5',
          color: '#1A3C5E',
          margin: 0,
        }}
      >
        Join us at our next service event.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '17px',
          lineHeight: '1.6',
          color: '#555555',
          marginTop: '16px',
          marginBottom: 0,
          maxWidth: '560px',
        }}
      >
        We run community service events throughout the year. All ages welcome.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        style={{ marginTop: '32px' }}
      >
        <Link
          to="/events"
          style={{
            backgroundColor: '#1A3C5E',
            color: '#ffffff',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '14px 32px',
            borderRadius: '24px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          See Upcoming Events
        </Link>
      </motion.div>
    </section>
  );
}
