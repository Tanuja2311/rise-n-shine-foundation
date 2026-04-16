import { motion } from 'framer-motion';

function DocIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="7" y="2" width="22" height="32" rx="2.5" stroke="#F5A623" strokeWidth="2" fill="none" />
      <line x1="12" y1="11" x2="24" y2="11" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="17" x2="24" y2="17" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="23" x2="20" y2="23" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="6" width="30" height="24" rx="2.5" stroke="#F5A623" strokeWidth="2" fill="none" />
      <circle cx="11" cy="14" r="2.5" stroke="#F5A623" strokeWidth="2" fill="none" />
      <polyline points="3,26 11,18 18,24 24,18 33,26" stroke="#F5A623" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="8" width="30" height="20" rx="2.5" stroke="#F5A623" strokeWidth="2" fill="none" />
      <polyline points="3,8 18,20 33,8" stroke="#F5A623" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const cards = [
  {
    icon: <DocIcon />,
    title: 'Organization Fact Sheet',
    description: 'Key facts, figures, and program overview for media use.',
  },
  {
    icon: <ImageIcon />,
    title: 'Logo & Photo Assets',
    description: 'High-resolution logos and program photography.',
  },
  {
    icon: <EnvelopeIcon />,
    title: 'Press Contact',
    description: (
      <>
        For all media inquiries email{' '}
        <a
          href="mailto:info@risenshinefoundation.org"
          style={{ color: '#555555', textDecoration: 'underline' }}
        >
          info@risenshinefoundation.org
        </a>
      </>
    ),
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function PressKit() {
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
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
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
          Media
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            marginTop: '12px',
          }}
        >
          Press Kit
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#555555',
            textAlign: 'center',
            maxWidth: '520px',
            margin: '16px auto 0',
          }}
        >
          For press inquiries and media resources.
        </motion.p>

        {/* Cards row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            marginTop: '48px',
            maxWidth: '900px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                flex: '1 1 240px',
                maxWidth: '280px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Icon */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {card.icon}
              </div>

              {/* Title */}
              <p
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: '700',
                  fontSize: '17px',
                  color: '#1A3C5E',
                  textAlign: 'center',
                  margin: 0,
                  marginTop: '16px',
                }}
              >
                {card.title}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '14px',
                  color: '#555555',
                  textAlign: 'center',
                  lineHeight: '1.6',
                  margin: 0,
                  marginTop: '10px',
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
