import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const foodRecoveryStats = [
  { label: 'Food Recovered', value: '300,000 lbs' },
  { label: 'Meals Donated', value: '~300,000' },
  { label: 'Volunteer Hours', value: '1,300+' },
  { label: 'Shelter Homes & Food Banks Served', value: '10+' },
  { label: 'Value of Meals Donated', value: '$450,000' },
];

const compostingStats = [
  { label: 'Waste Diverted from Landfills', value: '206,000 lbs' },
  { label: 'Schools Running Programs', value: '13' },
  { label: 'CO2 Offset', value: '1,360 trees (10 yrs)' },
  { label: 'Miles Driven Equivalent Offset', value: '202,951' },
];

function StatRow({ label, value, last }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 0',
        borderBottom: last ? 'none' : '1px solid #EEEEEE',
      }}
    >
      <span
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '14px',
          color: '#888888',
          lineHeight: '1.5',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '700',
          fontSize: '22px',
          color: '#1A3C5E',
          lineHeight: '1.5',
          whiteSpace: 'nowrap',
          marginLeft: '16px',
        }}
      >
        {value}
      </span>
    </div>
  );
}

function StatColumn({ heading, stats }) {
  return (
    <div style={{ flex: '1 1 0', minWidth: '0' }}>
      {/* Column heading with left border */}
      <div
        style={{
          borderLeft: '3px solid #F5A623',
          paddingLeft: '16px',
        }}
      >
        <h3
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '24px',
            color: '#1A3C5E',
            margin: 0,
            lineHeight: '1.5',
          }}
        >
          {heading}
        </h3>
      </div>

      {/* Stat rows */}
      <div style={{ marginTop: '24px' }}>
        {stats.map((stat, i) => (
          <StatRow
            key={stat.label}
            label={stat.label}
            value={stat.value}
            last={i === stats.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function ImpactMetrics() {
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
      {/* Label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
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
        By The Numbers
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '40px',
          color: '#1A3C5E',
          textAlign: 'center',
          margin: 0,
          marginTop: '12px',
          lineHeight: '1.2',
        }}
      >
        Program Impact
      </motion.h2>

      {/* Two-column stats grid */}
      <motion.div
        className="impact-metrics-grid"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={2}
        style={{
          marginTop: '48px',
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          gap: '48px',
        }}
      >
        <StatColumn heading="Food Recovery" stats={foodRecoveryStats} />
        <StatColumn heading="Composting Programs" stats={compostingStats} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .impact-metrics-grid {
            flex-direction: column !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
