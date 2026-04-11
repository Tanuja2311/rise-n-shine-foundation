import { motion } from 'framer-motion';

const iconHunger =
  'https://www.figma.com/api/mcp/asset/fff16c33-e999-4cc3-bd66-10fc7be25438';
const iconWaste =
  'https://www.figma.com/api/mcp/asset/931912bf-1dfb-4b0b-bcfa-40b8db4a545e';
const iconSchool =
  'https://www.figma.com/api/mcp/asset/d7379ae5-8c9b-4b92-aded-5a902e38fd0d';
const iconRecycle =
  'https://www.figma.com/api/mcp/asset/5e00b469-e6f4-4343-83f3-df38ae36489c';

const stats = [
  { icon: iconHunger, text: '1 in 6 Americans struggles with hunger.' },
  {
    icon: iconWaste,
    text: 'Montgomery County generates 124,000 tons of food waste annually.',
  },
  { icon: iconSchool, text: '40%+ of school waste is food.' },
  {
    icon: iconRecycle,
    text: 'Only 15.5% of food waste was recycled in Maryland in 2019.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function AdvocacyBill() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
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
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          style={{ flex: '1 1 320px', minWidth: 0 }}
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
            The Bill
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: '32px',
              lineHeight: '1.3',
              color: '#1A3C5E',
              margin: '16px 0 0 0',
            }}
          >
            Grant Program to Reduce and Compost School Waste
          </h2>

          {/* Body text */}
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '17px',
              lineHeight: '1.75',
              color: '#555555',
              marginTop: '20px',
              marginBottom: 0,
            }}
          >
            HB150/SB124 creates a $500,000 grant program for Maryland schools to
            receive funds for food waste reduction programs — including placing
            compost bins in school cafeterias and supporting student-led
            environmental initiatives.
          </p>

          {/* Status badge */}
          <div
            style={{
              display: 'inline-block',
              backgroundColor: '#1A3C5E',
              borderRadius: '999px',
              padding: '8px 20px',
              marginTop: '28px',
            }}
          >
            <span
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '13px',
                color: '#ffffff',
                whiteSpace: 'nowrap',
              }}
            >
              Passed and Signed by Governor
            </span>
          </div>
        </motion.div>

        {/* Right column — stat items */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          style={{
            flex: '1 1 280px',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            justifyContent: 'center',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <img
                src={stat.icon}
                alt=""
                style={{ width: '24px', height: '24px', flexShrink: 0 }}
              />
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: '#1C1C1C',
                  margin: 0,
                }}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
