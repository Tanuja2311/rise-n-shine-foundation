import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const letters = [
  {
    org: 'Montgomery County Council',
    date: 'April 2021',
    summary:
      'Letter of support for food waste management efforts in Montgomery County schools.',
  },
  {
    org: 'Montgomery County Council',
    date: 'December 2019',
    summary:
      'Recognition of composting and food recovery program leadership.',
  },
  {
    org: 'Montgomery County Public Schools',
    date: 'November 2019',
    summary:
      'Support for composting pilot program across MCPS schools.',
  },
  {
    org: 'MCPS — Chief Operating Officer',
    date: 'November 2019',
    summary:
      'Formal support for Rise N Shine composting and food recovery initiatives.',
  },
  {
    org: 'Division of Sustainability and Compliance, MCPS',
    date: 'November 2023',
    summary:
      'Recognition of sustained impact across MCPS composting programs.',
  },
  {
    org: 'MCPS — Facilities Management',
    date: 'November 2023',
    summary:
      'Letter supporting continued composting program expansion.',
  },
];

function LetterCard({ org, date, summary }) {
  return (
    <motion.div
      variants={cardVariants}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        borderRadius: '12px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '700',
          fontSize: '17px',
          color: '#1A3C5E',
          margin: 0,
          lineHeight: '1.5',
        }}
      >
        {org}
      </p>
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '14px',
          color: '#888888',
          margin: 0,
          marginTop: '8px',
          lineHeight: '1.5',
        }}
      >
        {date}
      </p>
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '15px',
          color: '#555555',
          margin: 0,
          marginTop: '12px',
          lineHeight: '1.6',
          flex: '1 1 auto',
        }}
      >
        {summary}
      </p>
      <a
        href="#"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '700',
          fontSize: '14px',
          color: '#F5A623',
          marginTop: '20px',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Download PDF →
      </a>
    </motion.div>
  );
}

export default function LettersOfSupport() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
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
        Official Recognition
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
        Letters of Support
      </motion.h2>

      {/* Subtext */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '17px',
          color: '#555555',
          textAlign: 'center',
          margin: 0,
          marginTop: '16px',
          lineHeight: '1.5',
          maxWidth: '780px',
        }}
      >
        Government bodies, school systems, and community organizations have
        formally recognized Rise N Shine's work.
      </motion.p>

      {/* Cards grid */}
      <motion.div
        className="letters-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          marginTop: '48px',
          width: '100%',
          maxWidth: '1100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '24px',
        }}
      >
        {letters.map((letter) => (
          <LetterCard key={`${letter.org}-${letter.date}`} {...letter} />
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 960px) {
          .letters-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 600px) {
          .letters-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
