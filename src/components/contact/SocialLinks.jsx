import { motion } from 'framer-motion';

/* ── platform card data ──────────────────────────────────────────── */
const platforms = [
  {
    name: 'Facebook',
    handle: 'Rise N Shine Foundation',
    href: 'https://www.facebook.com/risenshinefoundation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#1877F2" />
        <path
          d="M21 6h-3a5 5 0 00-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3V6z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    handle: '@risenshinefdn',
    href: 'https://twitter.com/risenshinefdn',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#000000" />
        <path
          d="M7 7h5l3.5 5L19 7h5l-6.5 9L25 25h-5l-4-5.5L12 25H7l7-9.5L7 7z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'Rise N Shine Foundation',
    href: 'https://www.youtube.com/@risenshinefoundation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#FF0000" />
        <rect x="5" y="9" width="22" height="14" rx="3" fill="#FF0000" stroke="white" strokeWidth="1.5" />
        <polygon points="13,12 21,16 13,20" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@risenshinefoundation',
    href: 'https://www.instagram.com/risenshinefoundation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ig-grad" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDC80" />
            <stop offset="0.3" stopColor="#F56040" />
            <stop offset="0.6" stopColor="#C13584" />
            <stop offset="1" stopColor="#833AB4" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#ig-grad)" />
        <rect x="7" y="7" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8" />
        <circle cx="16" cy="16" r="4.5" stroke="white" strokeWidth="1.8" />
        <circle cx="22" cy="10" r="1.2" fill="white" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Rise N Shine Foundation Inc',
    href: 'https://www.linkedin.com/company/rise-n-shine-foundation-inc',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#0A66C2" />
        <rect x="7" y="12" width="3.5" height="12" rx="1" fill="white" />
        <circle cx="8.75" cy="8.75" r="2" fill="white" />
        <path
          d="M14 12h3.5v1.6a4 4 0 013.5-1.6c2.8 0 4 1.8 4 5v7h-3.5v-6.5c0-1.5-.5-2.5-1.8-2.5-1.2 0-2.2.8-2.2 2.7V24H14V12z"
          fill="white"
        />
      </svg>
    ),
  },
];

/* ── animation variants ──────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const headingFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function SocialLinks() {
  return (
    <section
      style={{
        backgroundColor: '#F7F7F5',
        paddingTop: '64px',
        paddingBottom: '64px',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
      }}
    >
      {/* Label */}
      <motion.p
        variants={headingFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '600',
          fontSize: '13px',
          color: '#F5A623',
          textTransform: 'uppercase',
          letterSpacing: '1.56px',
          textAlign: 'center',
          margin: 0,
        }}
      >
        Stay Connected
      </motion.p>

      {/* Heading */}
      <motion.h2
        variants={headingFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '32px',
          color: '#1A3C5E',
          textAlign: 'center',
          margin: 0,
          marginTop: '12px',
          lineHeight: '1.2',
        }}
      >
        Follow Rise N Shine
      </motion.h2>

      {/* Cards row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '40px auto 0',
        }}
      >
        {platforms.map((platform) => (
          <motion.a
            key={platform.name}
            variants={cardVariants}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              padding: '24px',
              textDecoration: 'none',
              flex: '1 1 140px',
              maxWidth: '160px',
              minWidth: '130px',
              boxSizing: 'border-box',
              cursor: 'pointer',
            }}
          >
            {/* Icon */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {platform.icon}
            </div>

            {/* Platform name */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '15px',
                color: '#1C1C1C',
                textAlign: 'center',
                margin: 0,
                marginTop: '12px',
              }}
            >
              {platform.name}
            </p>

            {/* Handle */}
            <p
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '400',
                fontSize: '13px',
                color: '#888888',
                textAlign: 'center',
                margin: 0,
                marginTop: '4px',
                wordBreak: 'break-word',
              }}
            >
              {platform.handle}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
