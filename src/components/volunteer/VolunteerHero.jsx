import { motion } from 'framer-motion';

const heroBg = 'https://www.figma.com/api/mcp/asset/586c4be6-af12-4c68-8ba2-ed40135bfe9c';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function VolunteerHero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background photo */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          pointerEvents: 'none',
        }}
      />

      {/* Navy overlay 50% */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(26, 60, 94, 0.50)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          padding: '80px 24px',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '14px',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '1.56px',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Ages 6 and above welcome
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(36px, 6vw, 60px)',
            lineHeight: '1.15',
            color: '#FFFFFF',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Make a difference. Build your future.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '19px',
            lineHeight: '1.7',
            color: 'rgba(255,255,255,0.80)',
            textAlign: 'center',
            maxWidth: '560px',
            margin: 0,
          }}
        >
          Join a community of youth volunteers fighting food insecurity and waste
          in Montgomery County. Earn verified hours toward the President's
          Volunteer Service Award.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <a
            href="https://forms.gle/fHx3bmszKSipFyPc9"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: '#F5A623',
              color: '#1C1C1C',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '1.5',
              padding: '16px 24px',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Register as a Volunteer
          </a>

          <a
            href="https://docs.google.com/forms/d/1F0MH2lzxajvoGfLDUEM7wTKvg9dNXQ4sOitNZQL8Dcc/viewform"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '1.5',
              padding: '14.4px 24px',
              borderRadius: '10px',
              border: '1.6px solid #FFFFFF',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Join Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
