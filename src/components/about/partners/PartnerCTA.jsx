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

export default function PartnerCTA() {
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
      }}
    >
      {/* Heading */}
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
          lineHeight: '1.2',
          color: '#FFFFFF',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Partner With Us
      </motion.h2>

      {/* Body */}
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
          lineHeight: '1.7',
          color: 'rgba(255,255,255,0.8)',
          textAlign: 'center',
          maxWidth: '700px',
          margin: 0,
          marginTop: '16px',
        }}
      >
        Sponsoring or partnering with Rise N Shine allows your organization to
        make a positive impact in our community. Contact us to learn about
        partnership opportunities.
      </motion.p>

      {/* Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        style={{ marginTop: '32px' }}
      >
        <Link
          to="/contact"
          style={{
            backgroundColor: '#F5A623',
            color: '#1C1C1C',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '14px 32px',
            borderRadius: '24px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Get In Touch
        </Link>
      </motion.div>
    </section>
  );
}
