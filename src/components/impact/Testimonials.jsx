import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const testimonials = [
  {
    quote:
      'Rise N Shine has completely transformed how our school thinks about food waste. The students are engaged, the program runs smoothly, and the impact is real.',
    name: 'School Principal',
    role: 'Montgomery County Public Schools',
  },
  {
    quote:
      'Shrusti and her team are the real deal. They showed up, did the work, and made composting happen in our cafeteria in ways we never thought possible.',
    name: 'Cafeteria Staff Lead',
    role: 'MCPS Partner School',
  },
  {
    quote:
      'As a donor, I wanted to know my money was going somewhere meaningful. Rise N Shine showed me exactly where every dollar goes. I have been giving for three years.',
    name: 'Community Donor',
    role: 'Montgomery County, MD',
  },
];

function TestimonialCard({ quote, name, role }) {
  return (
    <motion.div
      variants={cardVariants}
      style={{
        backgroundColor: '#F7F7F5',
        borderRadius: '16px',
        padding: '40px',
        flex: '1 1 0',
        minWidth: '0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Large quotation mark */}
      <div
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '400',
          fontSize: '48px',
          color: '#F5A623',
          lineHeight: '1',
          height: '48px',
          overflow: 'hidden',
        }}
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontStyle: 'italic',
          fontSize: '17px',
          color: '#1C1C1C',
          lineHeight: '1.7',
          margin: 0,
          marginTop: '16px',
          flex: '1 1 auto',
        }}
      >
        {quote}
      </p>

      {/* Name */}
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '700',
          fontSize: '15px',
          color: '#1A3C5E',
          margin: 0,
          marginTop: '24px',
          lineHeight: '1.5',
        }}
      >
        {name}
      </p>

      {/* Role */}
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '14px',
          color: '#888888',
          margin: 0,
          marginTop: '4px',
          lineHeight: '1.5',
        }}
      >
        {role}
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
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
          textAlign: 'center',
          margin: 0,
        }}
      >
        What People Are Saying
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
          color: '#1A3C5E',
          textAlign: 'center',
          margin: 0,
          marginTop: '12px',
          lineHeight: '1.2',
        }}
      >
        Testimonials
      </motion.h2>

      {/* Cards row */}
      <motion.div
        className="testimonials-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          marginTop: '48px',
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
