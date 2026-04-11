import { motion } from 'framer-motion';

const organizations = [
  'Baltimore Ravens / M&T Bank',
  "L'Oreal Women of Worth",
  "President's Volunteer Service Award",
  'Points of Light',
  "Riley's Way Foundation",
];

export default function Awards() {
  return (
    <section className="awards-section" style={{ backgroundColor: '#F7F7F5', padding: '64px 200px' }}>
      <style>{`
        .awards-section { padding: 64px 200px; }
        .awards-row {
          display: flex;
          flex-direction: row;
          gap: 48px;
          align-items: flex-start;
          justify-content: center;
          flex-wrap: nowrap;
        }

        @media (max-width: 1200px) {
          .awards-section { padding: 64px 40px; }
        }
        @media (max-width: 640px) {
          .awards-section { padding: 48px 20px; }
          .awards-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            flex-wrap: unset;
          }
        }
      `}</style>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: '14px',
          fontWeight: '400',
          color: '#888888',
          textTransform: 'uppercase',
          letterSpacing: '1.56px',
          textAlign: 'center',
          margin: '0 0 32px 0',
        }}
      >
        Recognized By
      </motion.p>

      {/* Logo strip */}
      <div className="awards-row">
        {organizations.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              flex: '1 0 0',
              minWidth: 0,
            }}
          >
            {/* Placeholder logo box */}
            <div
              style={{
                width: '140px',
                height: '48px',
                backgroundColor: '#DDDDDD',
                borderRadius: '8px',
                flexShrink: 0,
              }}
            />

            {/* Organization name */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: '12px',
                fontWeight: '400',
                color: '#888888',
                lineHeight: '18px',
                textAlign: 'center',
                margin: 0,
                maxWidth: '140px',
              }}
            >
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
