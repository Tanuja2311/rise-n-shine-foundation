import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const heroImage = 'https://www.figma.com/api/mcp/asset/5c8d7cde-b469-42e1-9b40-f230bc8083bc';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function SchoolCompostingHero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(26, 60, 94, 0.55)',
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
          gap: '32px',
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
          {' / School Composting'}
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
          School Composting
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
            maxWidth: '560px',
            margin: 0,
          }}
        >
          We bring composting programs into schools, teaching the next generation
          to reduce waste and protect the planet.
        </motion.p>
      </div>
    </section>
  );
}
