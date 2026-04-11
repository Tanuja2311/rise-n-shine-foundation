import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ── Icons ────────────────────────────────────────────────────────────────────

const FoodRecoveryIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10.667L16 5.333 28 10.667V21.333L16 26.667 4 21.333V10.667Z" stroke="#F5A623" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M4 10.667L16 16l12-5.333" stroke="#F5A623" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M16 16v10.667" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 7.667L22 13" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const CompostingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 27C16 27 6 20 6 12a10 10 0 0 1 20 0c0 8-10 15-10 15Z" stroke="#F5A623" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M16 27V15" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 20c0 0-4-3-4-7" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 18c0 0 4-2 4-6" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const CommunityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 27S5 19.6 5 12.4a6.4 6.4 0 0 1 11-4.5 6.4 6.4 0 0 1 11 4.5C27 19.6 16 27 16 27Z" stroke="#F5A623" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

const AdvocacyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12v8h5.333L22 26V6L10.333 12H5Z" stroke="#F5A623" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M25.333 9.333A8 8 0 0 1 25.333 22.667" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10.667 20l-2 5.333" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const programs = [
  {
    id: 'food-recovery',
    icon: <FoodRecoveryIcon />,
    name: 'Food Recovery',
    description:
      'We collect surplus food from local businesses and redistribute it to shelters, food pantries, and families in need.',
    path: '/programs/food-recovery',
  },
  {
    id: 'school-composting',
    icon: <CompostingIcon />,
    name: 'School Composting',
    description:
      'We run composting programs in schools across Montgomery County, turning food waste into soil and teaching sustainability.',
    path: '/programs/school-composting',
  },
  {
    id: 'community-services',
    icon: <CommunityIcon />,
    name: 'Community Services',
    description:
      'From sewing pillowcases to sandwich drives, we run hands-on projects that directly help our neighbors.',
    path: '/programs/community-services',
  },
  {
    id: 'advocacy',
    icon: <AdvocacyIcon />,
    name: 'Advocacy',
    description:
      'We champion policy change at the state level, including HB150/SB124 to fund composting in Maryland schools.',
    path: '/programs/advocacy',
  },
];

// ── Animation ─────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Programs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="programs-section" style={{ backgroundColor: '#ffffff', padding: '80px 200px' }}>
      <style>{`
        .programs-section { padding: 80px 200px; }
        .programs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; width: 100%; }

        @media (max-width: 1200px) {
          .programs-section { padding: 80px 40px; }
        }
        @media (max-width: 1024px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .programs-section { padding: 60px 20px; }
          .programs-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '48px',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
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
          What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: '700',
            color: '#1A3C5E',
            textAlign: 'center',
            lineHeight: '1.2',
            margin: 0,
          }}
        >
          Our Programs
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="programs-grid">
        {programs.map((program, i) => {
          const isHovered = hoveredCard === program.id;
          return (
            <motion.div
              key={program.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: '#ffffff',
                border: `1px solid ${isHovered ? '#1A3C5E' : '#EEEEEE'}`,
                borderRadius: '10px',
                padding: '32px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '19px',
                transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: isHovered
                  ? '0 8px 24px rgba(26, 60, 94, 0.12)'
                  : '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div style={{ width: '32px', height: '32px', flexShrink: 0 }}>
                {program.icon}
              </div>

              {/* Program name */}
              <p
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#1A3C5E',
                  lineHeight: '1.5',
                  margin: 0,
                }}
              >
                {program.name}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#555555',
                  lineHeight: '24px',
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {program.description}
              </p>

              {/* Learn More link */}
              <Link
                to={program.path}
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#F5A623',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Learn More →
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
