import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const bullets = [
  'Run composting programs in 15 schools across Montgomery County, 4 more in pipeline.',
  'Partner with MCPS Division of Sustainability and Compliance.',
  'Provide 5-bin sorting systems, compostable bags, and weekly pickup.',
  'Train student Compost Ambassadors to educate peers.',
  'Haul food waste to composting facilities weekly.',
];

const stats = [
  { label: 'Waste Diverted',          value: '206,000 lbs'        },
  { label: 'Schools Running Programs', value: '13'                 },
  { label: 'CO2 Offset',              value: '1,360 trees (10 yrs)' },
  { label: 'Miles Driven Offset',     value: '202,951'             },
];

export default function SchoolCompostingContent() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
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
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'flex-start',
        }}
      >
        {/* ── Left column ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          style={{ flex: '55 1 300px', minWidth: 0 }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '14px',
              color: '#F5A623',
              textTransform: 'uppercase',
              letterSpacing: '1.56px',
              margin: '0 0 16px 0',
            }}
          >
            What We Do
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: '36px',
              lineHeight: '1.2',
              color: '#1A3C5E',
              margin: '0 0 24px 0',
            }}
          >
            Turning lunch waste into living soil
          </h2>

          {/* Bullet list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {bullets.map((text, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    minWidth: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#F5A623',
                    marginTop: '7px',
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#555555',
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Right column — Stats card ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          style={{
            flex: '45 1 280px',
            minWidth: 0,
            backgroundColor: '#F7F7F5',
            borderRadius: '16px',
            padding: '40px',
            boxSizing: 'border-box',
          }}
        >
          <h3
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '1.5',
              color: '#1A3C5E',
              margin: '0 0 16px 0',
            }}
          >
            Sustainability Impact
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom:
                    i < stats.length - 1 ? '1px solid #EEEEEE' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#888888',
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: '700',
                    fontSize: '20px',
                    color: '#1A3C5E',
                  }}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
