import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const steps = [
  {
    number: '1',
    title: 'Start a Club',
    description: 'Establish a school club to spread the word about Rise N Shine.',
  },
  {
    number: '2',
    title: 'Hold Meetings',
    description: 'Plan monthly meetings to build your community and set goals.',
  },
  {
    number: '3',
    title: 'Fundraise',
    description: 'Run local fundraising events to support your composting programs.',
  },
  {
    number: '4',
    title: 'Host an Event',
    description: 'Work toward a school-wide meal packing event of 5,000 to 10,000 meals.',
  },
];

export default function SchoolChapterSection() {
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
          fontSize: '14px',
          color: '#F5A623',
          textTransform: 'uppercase',
          letterSpacing: '1.56px',
          margin: '0 0 16px 0',
        }}
      >
        For Students
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
          margin: 0,
        }}
      >
        Bring Rise N Shine to your school.
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
          maxWidth: '600px',
          marginTop: '16px',
          marginBottom: 0,
        }}
      >
        We support motivated students who want to start a composting or food
        recovery chapter. The experience builds leadership skills and looks great
        on resumes and college applications.
      </motion.p>

      {/* Steps row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center',
          marginTop: '48px',
          width: '100%',
          maxWidth: '1100px',
        }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i + 3}
            style={{
              flex: '1 1 200px',
              maxWidth: '240px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '1.5',
                color: '#F5A623',
              }}
            >
              {step.number}
            </span>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '17px',
                lineHeight: '1.5',
                color: '#1A3C5E',
                margin: 0,
              }}
            >
              {step.title}
            </p>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#555555',
                margin: 0,
              }}
            >
              {step.description}
            </p>
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
        <Link
          to="/get-involved/school-chapter"
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
          Apply to Start a Chapter
        </Link>
      </motion.div>
    </section>
  );
}
