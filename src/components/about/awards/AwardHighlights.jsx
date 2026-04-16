import { motion } from 'framer-motion';

const awards = [
  {
    name: 'Honor Rows Recipient',
    body: "Baltimore Ravens, M&T Bank, Governor's Office",
    year: '2024',
  },
  {
    name: 'Climate & Energy Leadership Award',
    body: 'Metropolitan Washington Council of Governments',
    year: '2022',
  },
  {
    name: 'Official PVSA Certifying Organization',
    body: "President's Council on Service & Civic Participation",
    year: 'Ongoing',
  },
  {
    name: "L'Oreal Women of Worth",
    body: "L'Oreal Paris",
    year: '2023',
  },
  {
    name: "Riley's Way Foundation Recognition",
    body: "Riley's Way Foundation",
    year: '2022',
  },
  {
    name: 'Proclamation',
    body: 'County Executive of Montgomery County, Maryland',
    year: '2023',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function AwardHighlights() {
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
      <p
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
        Top Awards
      </p>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '1.2',
          color: '#1A3C5E',
          textAlign: 'center',
          margin: 0,
          marginTop: '12px',
        }}
      >
        Award Highlights
      </h2>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'center',
          maxWidth: '1100px',
          width: '100%',
          marginTop: '48px',
        }}
      >
        {awards.map((award, i) => (
          <motion.div
            key={award.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              padding: '32px',
              flex: '1 1 300px',
              maxWidth: '340px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            {/* Logo placeholder */}
            <div
              style={{
                width: '140px',
                height: '48px',
                backgroundColor: '#F7F7F5',
                borderRadius: '8px',
                flexShrink: 0,
              }}
            />

            {/* Award name */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '17px',
                color: '#1A3C5E',
                textAlign: 'center',
                margin: 0,
                marginTop: '20px',
              }}
            >
              {award.name}
            </p>

            {/* Awarding body */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#888888',
                textAlign: 'center',
                margin: 0,
                marginTop: '6px',
              }}
            >
              {award.body}
            </p>

            {/* Year */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '14px',
                color: '#F5A623',
                textAlign: 'center',
                margin: 0,
                marginTop: '6px',
              }}
            >
              {award.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
