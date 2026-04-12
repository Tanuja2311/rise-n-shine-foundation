import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Leaf */}
        <path
          d="M18 3C10.268 3 4 9.268 4 17c0 5.5 3.1 10.3 7.7 12.8L18 33l6.3-3.2C28.9 27.3 32 22.5 32 17c0-7.732-6.268-14-14-14z"
          fill="none"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 33V17M18 17C18 17 12 12 10 8M18 17C18 17 24 12 26 8"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Environment Sustainability',
    description:
      'Food recovery, composting, and waste reduction programs that protect our planet.',
    to: '/programs/food-recovery',
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Hands */}
        <path
          d="M9 18c0-1.1.9-2 2-2h2v-4a2 2 0 0 1 4 0v4h2a2 2 0 0 1 2 2v4a6 6 0 0 1-12 0v-4z"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 22c-.6 0-2-.4-2-2v-6a2 2 0 0 1 4 0M30 22c.6 0 2-.4 2-2v-6a2 2 0 0 0-4 0"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Community Services',
    description:
      'Direct service projects that put help in the hands of people who need it most.',
    to: '/programs/community-services',
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Megaphone */}
        <path
          d="M6 14h4l12-8v20L10 18H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 18v8"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 12a6 6 0 0 1 0 12"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Advocacy',
    description:
      'Policy work and campaigns that create systemic change at the county and state level.',
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

export default function ThreePillars() {
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
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '1.2',
          color: '#1A3C5E',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Three Ways We Work
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="pillars-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px',
          marginTop: '48px',
          maxWidth: '1100px',
          width: '100%',
        }}
      >
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.title}
            variants={cardVariants}
            style={{
              flex: '1 1 0',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Icon */}
            <div style={{ width: '36px', height: '36px', flexShrink: 0 }}>
              {pillar.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '1.5',
                color: '#1A3C5E',
                margin: 0,
                marginTop: '16px',
              }}
            >
              {pillar.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '1.65',
                color: '#555555',
                margin: 0,
                marginTop: '10px',
              }}
            >
              {pillar.description}
            </p>

            {/* Link */}
            <Link
              to={pillar.to}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '14px',
                color: '#F5A623',
                textDecoration: 'none',
                marginTop: '20px',
                display: 'inline-block',
              }}
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 767px) {
          .pillars-grid {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
