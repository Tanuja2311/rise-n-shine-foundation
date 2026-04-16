import { motion } from 'framer-motion';

const members = [
  {
    name: 'Trisha Adkar',
    title: 'Director Composting',
    school: 'Georgetown University',
  },
  {
    name: 'Nikhil Nare',
    title: 'Media & Content Specialist',
    school: 'Richard Montgomery High School',
  },
  {
    name: 'Sreekar Penikelapati',
    title: 'Website Admin',
    school: 'Clarksburg High School',
  },
  {
    name: 'Abhinav Bommareddy',
    title: 'Director Volunteer Operations',
    school: 'Clarksburg High School',
  },
  {
    name: 'Sriradha Regula',
    title: 'Director Volunteer Operations',
    school: 'Clarksburg High School',
  },
  {
    name: 'Anuoshka Patil',
    title: 'Director Food Recovery Operations',
    school: 'Clarksburg High School',
  },
  {
    name: 'Anusha Merchant',
    title: 'Food Recovery Volunteer',
    school: 'Robert Frost Middle School',
  },
  {
    name: 'Ishana Chowdhury',
    title: 'School Chapter Lead',
    school: 'Robert Frost Middle School',
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

export default function ExecutiveTeam() {
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
        Executive Team
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
        Our Team
      </h2>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          maxWidth: '1100px',
          width: '100%',
          marginTop: '48px',
        }}
        className="exec-team-grid"
      >
        {members.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            {/* Photo placeholder */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#DDDDDD',
                flexShrink: 0,
              }}
            />

            {/* Name */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '16px',
                color: '#1A3C5E',
                textAlign: 'center',
                margin: 0,
                marginTop: '16px',
              }}
            >
              {member.name}
            </p>

            {/* Title */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '14px',
                color: '#555555',
                textAlign: 'center',
                margin: 0,
                marginTop: '4px',
              }}
            >
              {member.title}
            </p>

            {/* School */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '13px',
                color: '#888888',
                fontStyle: 'italic',
                textAlign: 'center',
                margin: 0,
                marginTop: '4px',
              }}
            >
              {member.school}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Responsive grid styles */}
      <style>{`
        @media (max-width: 1024px) {
          .exec-team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .exec-team-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
