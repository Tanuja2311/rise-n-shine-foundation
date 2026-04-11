import { motion } from 'framer-motion';

const iconTable =
  'https://www.figma.com/api/mcp/asset/fbc37cee-c9be-43ea-912c-96c09d98602e';
const iconWord =
  'https://www.figma.com/api/mcp/asset/38c8f19c-5027-4b87-b4b3-c7d337b8e420';
const iconDigital =
  'https://www.figma.com/api/mcp/asset/0916a2a0-72e9-4f51-b292-0e1f64f756bd';
const iconFlyers =
  'https://www.figma.com/api/mcp/asset/56896294-1308-447c-9aa6-7a5f4a5d41e9';

const steps = [
  {
    icon: iconTable,
    title: 'Set Up a Table',
    description:
      'Put a table in your school hallway and recruit volunteers to help students write postcards.',
  },
  {
    icon: iconWord,
    title: 'Spread the Word',
    description:
      'Talk to club leaders, SGA sponsors, and teachers about supporting the campaign.',
  },
  {
    icon: iconDigital,
    title: 'Go Digital',
    description:
      'Send a campaign email to your club or SGA members with the writing prompt.',
  },
  {
    icon: iconFlyers,
    title: 'Post Flyers',
    description:
      'Put up flyers in classrooms so students know the campaign is happening.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function PostcardCampaign() {
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
        textAlign: 'center',
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
          margin: 0,
        }}
      >
        Take Action
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
          lineHeight: '1.2',
          color: '#1A3C5E',
          margin: '12px 0 0 0',
        }}
      >
        Write a Postcard to Your Delegate
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
          lineHeight: '1.6',
          color: '#555555',
          maxWidth: '640px',
          marginTop: '16px',
          marginBottom: 0,
        }}
      >
        Last year we sent 5,000 postcards to Annapolis and got SB124 passed.
        Personal messages from students and teachers make lawmakers pay
        attention. Your postcard matters.
      </motion.p>

      {/* 2x2 step grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '28px',
          justifyContent: 'center',
          maxWidth: '900px',
          marginTop: '48px',
          width: '100%',
        }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i + 3}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              flex: '1 1 380px',
              maxWidth: '436px',
              textAlign: 'left',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={step.icon}
              alt=""
              style={{ width: '32px', height: '32px', flexShrink: 0 }}
            />
            <div>
              <h3
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '17px',
                  lineHeight: '1.5',
                  color: '#1C1C1C',
                  margin: 0,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '1.65',
                  color: '#555555',
                  marginTop: '8px',
                  marginBottom: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={7}
        style={{ marginTop: '48px' }}
      >
        <a
          href="/postcard-template.pdf"
          download
          style={{
            backgroundColor: '#F5A623',
            color: '#1c1c1c',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '14px 32px',
            borderRadius: '24px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Download Postcard Template
        </a>
      </motion.div>
    </section>
  );
}
