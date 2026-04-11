import { motion } from 'framer-motion';

const iconSewing =
  'https://www.figma.com/api/mcp/asset/4d1cb564-0479-4114-9599-e8f797f0eabe';
const iconShoe =
  'https://www.figma.com/api/mcp/asset/b9fe0cdf-a4e9-41d8-812b-dc6057aaf15d';
const iconEnvelope =
  'https://www.figma.com/api/mcp/asset/d48abe62-23a6-4315-b381-cdd81203ae53';
const iconFood =
  'https://www.figma.com/api/mcp/asset/ca028438-ce45-49d4-b22e-99a1672b147a';
const iconHeart =
  'https://www.figma.com/api/mcp/asset/9b29fac4-5bf7-41d3-b4e4-932afd075940';

const cards = [
  {
    icon: iconSewing,
    title: 'Sewing Pillowcases',
    description:
      'We sew pillowcases for children living in shelters, bringing a small comfort in difficult circumstances.',
  },
  {
    icon: iconShoe,
    title: 'Shoe Drives',
    description:
      'We collect and donate shoes to families and individuals who need them most.',
  },
  {
    icon: iconEnvelope,
    title: 'Letters of Hope',
    description:
      'Volunteers write personal letters of encouragement to people in shelters and care facilities.',
  },
  {
    icon: iconFood,
    title: 'Sandwich Drives',
    description:
      'We prepare and distribute sandwich and cookie bags to people experiencing food insecurity.',
  },
  {
    icon: iconHeart,
    title: 'Fight Against Hunger',
    description:
      'Direct food assistance initiatives that complement our food recovery programs.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function CommunityServicesContent() {
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Section label */}
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
          margin: '0 0 12px 0',
        }}
      >
        Our Initiatives
      </motion.p>

      {/* Section heading */}
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
          textAlign: 'center',
          margin: '0 0 48px 0',
        }}
      >
        How we serve the community
      </motion.h2>

      {/* Cards grid — flex wrap: 3 top, 2 centered bottom */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1060px',
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i + 2}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              padding: '32px',
              flex: '1 1 280px',
              maxWidth: '340px',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={card.icon}
              alt=""
              style={{
                width: '36px',
                height: '36px',
                display: 'block',
              }}
            />
            <h3
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '18px',
                lineHeight: '1.5',
                color: '#1A3C5E',
                marginTop: '16px',
                marginBottom: 0,
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '1.65',
                color: '#555555',
                marginTop: '10px',
                marginBottom: 0,
              }}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
