import { motion } from 'framer-motion';

const pastEvents = [
  {
    name: 'Community Meal Packing Event',
    date: 'February 2025',
    location: 'Montgomery County, MD',
    description:
      'Students and volunteers packed over 8,000 meals for local food banks and shelters.',
  },
  {
    name: 'School Composting Launch — Kemp Mill ES',
    date: 'January 2025',
    location: 'Kemp Mill Elementary School',
    description:
      'Launched the composting program at Kemp Mill ES with student training and bin installation.',
  },
  {
    name: 'Holiday Shoe Drive',
    date: 'December 2024',
    location: 'Montgomery County, MD',
    description:
      'Collected and donated over 200 pairs of shoes to families in need across the county.',
  },
];

export default function PastEvents() {
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
          Archive
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
          Past Events
        </motion.h2>

        {/* Cards row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '48px',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {pastEvents.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '12px',
                padding: '32px',
                flex: '1 1 280px',
                minWidth: '260px',
                maxWidth: '340px',
                boxSizing: 'border-box',
              }}
            >
              {/* Event name */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '18px',
                  color: '#1A3C5E',
                  margin: 0,
                  lineHeight: '1.4',
                }}
              >
                {event.name}
              </p>

              {/* Date */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#F5A623',
                  margin: 0,
                  marginTop: '8px',
                }}
              >
                {event.date}
              </p>

              {/* Location */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#888888',
                  margin: 0,
                  marginTop: '6px',
                }}
              >
                {event.location}
              </p>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#555555',
                  margin: 0,
                  marginTop: '12px',
                }}
              >
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
