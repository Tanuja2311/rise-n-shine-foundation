import { motion } from 'framer-motion';

const govPartners = [
  'MCPS',
  'MD Dept of Transportation',
  'Dept of Housing & Community Dev',
  'MD Environmental Trust',
  'Montgomery County Council',
  'MD Dept of Environmental Protection',
  'Forever Maryland',
];

const corporateSponsors = [
  'Leidos',
  'Walmart',
  'Wegmans',
  'Mastercard',
  'Coca-Cola',
  'Panera Bread',
  'Allstate',
  'Sodexo',
  '7-Eleven',
  'Hormel Foods',
  'Crumbl Cookies',
  'Patel Brothers',
];

const schoolPartners = [
  'Vyngate ES',
  'Jones Lane ES',
  'Sligo Creek ES',
  'Kemp Mill ES',
  'Darnestown ES',
  'Woodfield ES',
  'Clarksburg ES',
  'Cedar Grove ES',
  'Wilson Wims ES',
  'W.B. Gibbs ES',
  'Highland View ES',
  'Bradley Hills ES',
  'Viers Mill ES',
  'Burtonsville ES',
  'Rosa Parks MS',
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function LogoCard({ name }) {
  return (
    <motion.div
      variants={itemVariants}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <div
        style={{
          width: '120px',
          height: '48px',
          backgroundColor: '#F7F7F5',
          borderRadius: '8px',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '12px',
          color: '#888888',
          textAlign: 'center',
          maxWidth: '120px',
          lineHeight: '1.4',
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

function TierSection({ bgColor, tier, heading, partners }) {
  return (
    <section
      style={{
        backgroundColor: bgColor,
        width: '100%',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p
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
        {tier}
      </p>

      <h2
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '1.2',
          color: '#1A3C5E',
          textAlign: 'center',
          margin: 0,
          marginTop: '12px',
        }}
      >
        {heading}
      </h2>

      <motion.div
        className="partner-logo-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          marginTop: '40px',
          width: '100%',
          maxWidth: '720px',
          justifyItems: 'center',
        }}
      >
        {partners.map((name) => (
          <LogoCard key={name} name={name} />
        ))}
      </motion.div>
    </section>
  );
}

export default function PartnerLogos() {
  return (
    <>
      <style>{`
        .partner-logo-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 768px) {
          .partner-logo-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (max-width: 480px) {
          .partner-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      <TierSection
        bgColor="#FFFFFF"
        tier="Tier 1"
        heading="Government & Institutional Partners"
        partners={govPartners}
      />
      <TierSection
        bgColor="#F7F7F5"
        tier="Tier 2"
        heading="Corporate Sponsors"
        partners={corporateSponsors}
      />
      <TierSection
        bgColor="#FFFFFF"
        tier="Tier 3"
        heading="School Partners"
        partners={schoolPartners}
      />
    </>
  );
}
