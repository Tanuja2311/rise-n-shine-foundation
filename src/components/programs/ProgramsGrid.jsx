import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const programs = [
  {
    name: 'Food Recovery',
    description: 'Rescuing surplus food and getting it to families who need it most.',
    to: '/programs/food-recovery',
  },
  {
    name: 'School Composting',
    description: 'Teaching sustainability through hands-on composting programs in schools.',
    to: '/programs/school-composting',
  },
  {
    name: 'Community Services',
    description: 'Hands-on projects that directly serve our neighbors in need.',
    to: '/programs/community-services',
  },
  {
    name: 'Advocacy',
    description: 'Fighting for the policies that make our programs possible at scale.',
    to: '/programs/advocacy',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ProgramCard({ name, description, to }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}
    >
      {/* Image placeholder — 16:9 */}
      <div
        style={{
          width: '100%',
          paddingTop: '56.25%',
          position: 'relative',
          backgroundColor: '#EEEEEE',
          borderRadius: '12px 12px 0 0',
          flexShrink: 0,
        }}
      />

      {/* Card body */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: `1px solid ${hovered ? '#1A3C5E' : '#EEEEEE'}`,
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'border-color 0.2s ease',
        }}
      >
        <h3
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '22px',
            color: '#1A3C5E',
            margin: 0,
          }}
        >
          {name}
        </h3>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '16px',
            color: '#555555',
            marginTop: '10px',
            marginBottom: 0,
            lineHeight: '1.6',
          }}
        >
          {description}
        </p>

        <Link
          to={to}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '700',
            fontSize: '15px',
            color: '#F5A623',
            textDecoration: 'none',
            marginTop: '20px',
            display: 'inline-block',
          }}
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProgramsGrid() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <motion.div
        className="programs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          maxWidth: '1040px',
          margin: '0 auto',
        }}
      >
        {programs.map((program) => (
          <ProgramCard key={program.name} {...program} />
        ))}
      </motion.div>

      {/* Responsive: single column on mobile / tablet */}
      <style>{`
        @media (max-width: 767px) {
          .programs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
