import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ── Inline SVG icons ─────────────────────────────────────── */

function FoodIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="14" width="24" height="14" rx="2" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <path d="M4 14 C4 8 28 8 28 14" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <line x1="16" y1="8" x2="16" y2="4" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="10" y1="10" x2="8" y2="6" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="22" y1="10" x2="24" y2="6" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CompostIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 28 C16 28 6 20 6 13 C6 8.58 10.48 5 16 5 C21.52 5 26 8.58 26 13 C26 20 16 28 16 28Z" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <path d="M16 28 L16 13" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 18 C14 15 10 14 10 14" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 15 C18 12 22 12 22 12" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 7 C13.2 7 11 9.24 11 12 C11 14.76 13.2 17 16 17 C18.8 17 21 14.76 21 12 C21 9.24 18.8 7 16 7Z" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <path d="M6 27 C6 22 10.48 18 16 18 C21.52 18 26 22 26 27" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function VolunteerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="10" cy="10" r="3.5" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <circle cx="22" cy="10" r="3.5" stroke="#F5A623" strokeWidth="1.8" fill="none" />
      <path d="M3 26 C3 21.58 6.13 18 10 18" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M29 26 C29 21.58 25.87 18 22 18" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M13 26 C13 22.69 14.34 20 16 20 C17.66 20 19 22.69 19 26" stroke="#F5A623" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────── */

const items = [
  {
    Icon: FoodIcon,
    title: 'Food Recovery Logistics',
    description:
      'Transportation, storage, and coordination for weekly food rescue runs to shelters and food banks.',
  },
  {
    Icon: CompostIcon,
    title: 'School Composting Supplies',
    description:
      'Composting bins, compostable bags, and program materials for schools across Montgomery County.',
  },
  {
    Icon: CommunityIcon,
    title: 'Community Service Projects',
    description:
      'Materials for pillowcase sewing, sandwich drives, shoe drives, and direct community outreach.',
  },
  {
    Icon: VolunteerIcon,
    title: 'Volunteer Training and Coordination',
    description:
      'Training materials, event coordination, and volunteer hour tracking infrastructure.',
  },
];

export default function DonationImpact() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '14px',
            color: '#F5A623',
            textTransform: 'uppercase',
            letterSpacing: '1.56px',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Your Impact
        </p>
        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(26px, 5vw, 40px)',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.2',
          }}
        >
          What your donation funds
        </h2>
      </div>

      {/* 2×2 grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          maxWidth: '900px',
          margin: '48px auto 0',
        }}
      >
        {items.map(({ Icon, title, description }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flexShrink: 0, marginTop: '2px' }}>
              <Icon />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <h3
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '18px',
                  color: '#1C1C1C',
                  margin: 0,
                  lineHeight: '1.5',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '15px',
                  color: '#555555',
                  lineHeight: '1.65',
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
