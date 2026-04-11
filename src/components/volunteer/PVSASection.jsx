import { motion } from 'framer-motion';

const pvsaImage = 'https://www.figma.com/api/mcp/asset/91322f32-9157-48fa-9128-43fdd1eaa953';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function PVSASection() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Left — text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            flex: '1 1 340px',
            minWidth: '280px',
            maxWidth: '560px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '14px',
              color: '#F5A623',
              textTransform: 'uppercase',
              letterSpacing: '1.56px',
              margin: 0,
            }}
          >
            Official PVSA Certifier
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: '36px',
              lineHeight: '1.2',
              color: '#1A3C5E',
              margin: 0,
            }}
          >
            Earn the President's Volunteer Service Award
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '17px',
              lineHeight: '1.7',
              color: '#555555',
              margin: 0,
            }}
          >
            Rise N Shine is an official certifying organization for the PVSA — a
            national award established in 2003 by the President's Council on Service
            and Civic Participation. Volunteers who demonstrate 12 months of
            sustained service are honored for their commitment to their communities.
          </motion.p>

          <motion.div variants={fadeUp} custom={3}>
            <a
              href="https://drive.google.com/file/d/1rWIlUTWReXH2E9DMUMqVGDJFfql1pzYC/view"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px',
                border: '0.8px solid #1A3C5E',
                borderRadius: '10px',
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '16px',
                color: '#1A3C5E',
                textDecoration: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Learn More About PVSA
            </a>
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            flex: '1 1 340px',
            minWidth: '280px',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <img
            src={pvsaImage}
            alt="Rise N Shine Foundation — official PVSA certifying organization"
            style={{
              width: '100%',
              borderRadius: '16px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '13px',
              color: '#888888',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Rise N Shine Foundation is an official certifying organization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
