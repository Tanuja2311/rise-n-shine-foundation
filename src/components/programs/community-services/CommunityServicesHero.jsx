import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/Community_Services.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function CommunityServicesHero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '781px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(26, 60, 94, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '80px 24px',
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Breadcrumb */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
          }}
        >
          <Link
            to="/programs"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'underline',
            }}
          >
            Programs
          </Link>
          {' / Community Services'}
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
            fontSize: 'clamp(40px, 6vw, 64px)',
            lineHeight: '1.15',
            color: '#ffffff',
            margin: 0,
          }}
        >
          Community Services
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
            maxWidth: '520px',
            margin: 0,
          }}
        >
          Hands-on service projects that directly help our neighbors in need.
        </motion.p>
      </div>
    </section>
  );
}
