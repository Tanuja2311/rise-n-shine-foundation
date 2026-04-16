import { motion } from 'framer-motion';

const awardsList = [
  { name: 'Proclamation from The County Executive of Montgomery County', year: '2023' },
  { name: 'Citation from Maryland Governor', year: '2023' },
  { name: 'Proclamation from The Maryland General Assembly', year: '2022' },
  { name: '2022 Climate & Energy Leadership Award', year: '2022' },
  { name: '2024 Honor Rows Award — Baltimore Ravens and M&T Bank', year: '2024' },
  { name: "Official certifying organization for President's Volunteer Service Award", year: 'Ongoing' },
  { name: "L'Oreal Women of Worth", year: '2023' },
  { name: "Riley's Way Foundation", year: '2022' },
  { name: 'George H.W. Bush Inspiration Spotlight', year: '2021' },
  { name: 'Gloria Barron Prize for Young Heroes', year: '2021' },
  { name: 'Points of Light Award', year: '2022' },
  { name: 'Futura Business Leaders of America — State Champion', year: '2022' },
  { name: 'First Tech Challenge — Tennessee State Competition', year: '2021' },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function FullAwardsList() {
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
      {/* Inner container */}
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
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
            margin: 0,
          }}
        >
          Full List
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '40px',
            lineHeight: '1.2',
            color: '#1A3C5E',
            margin: 0,
            marginTop: '12px',
          }}
        >
          All Awards &amp; Citations
        </h2>

        {/* List */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            marginTop: '32px',
            width: '100%',
          }}
        >
          {awardsList.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #EEEEEE',
                paddingTop: '16px',
                paddingBottom: '16px',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '16px',
                  color: '#1C1C1C',
                  lineHeight: '1.5',
                }}
              >
                {item.name}
              </span>
              <span
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#888888',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {item.year}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
