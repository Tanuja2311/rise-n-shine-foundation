import { motion } from 'framer-motion';

function CalendarIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="10" width="36" height="32" rx="3" stroke="#DDDDDD" strokeWidth="2.5" fill="none" />
      <line x1="6" y1="20" x2="42" y2="20" stroke="#DDDDDD" strokeWidth="2.5" />
      <line x1="16" y1="6" x2="16" y2="14" stroke="#DDDDDD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="6" x2="32" y2="14" stroke="#DDDDDD" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function UpcomingEvents() {
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
          maxWidth: '860px',
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
          Coming Up
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
          Upcoming Events
        </motion.h2>

        {/* Empty state */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CalendarIcon />

          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '17px',
              lineHeight: '1.6',
              color: '#888888',
              textAlign: 'center',
              maxWidth: '560px',
              margin: 0,
              marginTop: '20px',
            }}
          >
            No upcoming events at this time. Check back soon or follow us on
            social media for updates.
          </p>

          <a
            href="https://www.instagram.com/risenshinefoundation"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#1A3C5E',
              color: '#FFFFFF',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 'bold',
              fontSize: '15px',
              padding: '12px 28px',
              borderRadius: '24px',
              textDecoration: 'none',
              display: 'inline-block',
              border: 'none',
              cursor: 'pointer',
              marginTop: '24px',
            }}
          >
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
