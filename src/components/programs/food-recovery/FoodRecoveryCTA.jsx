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

export default function FoodRecoveryCTA() {
  return (
    <section
      style={{
        backgroundColor: '#1A3C5E',
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
          color: '#ffffff',
          margin: 0,
        }}
      >
        Help us rescue food every week.
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
          color: 'rgba(255, 255, 255, 0.75)',
          marginTop: '16px',
          marginBottom: 0,
          maxWidth: '560px',
        }}
      >
        We run food recovery operations multiple times a week. Volunteers of all
        ages welcome.
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
          to="/get-involved/volunteer"
          style={{
            backgroundColor: '#F5A623',
            color: '#1c1c1c',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '14px 32px',
            borderRadius: '24px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Volunteer for Food Recovery
        </Link>
      </motion.div>
    </section>
  );
}
