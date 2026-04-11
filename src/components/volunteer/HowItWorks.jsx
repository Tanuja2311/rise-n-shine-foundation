import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const steps = [
  {
    number: '1',
    title: 'Register',
    description:
      'Complete the online volunteer registration form using the button above.',
  },
  {
    number: '2',
    title: 'Attend an Event',
    description:
      'Show up to a volunteer session — food recovery runs, composting days, or community drives.',
  },
  {
    number: '3',
    title: 'Submit Proof',
    description:
      'After each session, submit a photo of your activity so we can approve your volunteer hours.',
  },
  {
    number: '4',
    title: 'Earn Your Award',
    description:
      'Accumulate hours over 12 months to qualify for the President\'s Volunteer Service Award.',
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '14px',
            color: '#F5A623',
            textTransform: 'uppercase',
            letterSpacing: '1.56px',
            textAlign: 'center',
            margin: 0,
          }}
        >
          The Process
        </p>
        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.5',
          }}
        >
          How volunteering works
        </h2>
      </div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '980px',
        }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={stepVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              flex: '1 1 180px',
              maxWidth: '220px',
              minWidth: '160px',
              textAlign: 'center',
            }}
          >
            {/* Circle number */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#1A3C5E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: '700',
                  fontSize: '20px',
                  color: '#FFFFFF',
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '18px',
                color: '#1C1C1C',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '15px',
                color: '#555555',
                lineHeight: '1.65',
                margin: 0,
              }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
