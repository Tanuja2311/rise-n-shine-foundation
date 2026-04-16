import { motion } from 'framer-motion';

const founders = [
  {
    name: 'Shrusti Amula',
    title: 'Founder and CEO',
    bio: 'Shrusti is an award-winning environmental entrepreneur, community leader, and social advocate dedicated to driving positive change. As the founder of Rise N Shine Foundation, she has led the organization from a student initiative to a recognized nonprofit running programs across 100+ schools in Montgomery County.',
  },
  {
    name: 'Vayun Amula',
    title: 'COO',
    bio: 'Vayun is a student at Rosa Parks High School actively engaged in day-to-day operations at Rise N Shine. As COO he has honed his leadership skills focusing on community programming, managing teams, and driving impactful outcomes for the organization.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.18, ease: 'easeOut' },
  }),
};

export default function FoundersSection() {
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
        Leadership
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
        Founders
      </h2>

      {/* Cards row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          maxWidth: '1000px',
          width: '100%',
          marginTop: '48px',
        }}
      >
        {founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '16px',
              padding: '40px',
              flex: '1 1 380px',
              maxWidth: '460px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxSizing: 'border-box',
            }}
          >
            {/* Photo placeholder */}
            <div
              style={{
                width: '120px',
                height: '120px',
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
                fontSize: '22px',
                color: '#1A3C5E',
                textAlign: 'center',
                margin: 0,
                marginTop: '20px',
              }}
            >
              {founder.name}
            </p>

            {/* Title */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '14px',
                color: '#F5A623',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textAlign: 'center',
                margin: 0,
                marginTop: '6px',
              }}
            >
              {founder.title}
            </p>

            {/* Bio */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#555555',
                textAlign: 'left',
                margin: 0,
                marginTop: '16px',
              }}
            >
              {founder.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
