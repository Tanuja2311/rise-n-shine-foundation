import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.14, ease: 'easeOut' },
  }),
};

const stats = [
  { value: '300,000 lbs', label: 'Food Recovered'    },
  { value: '206,000 lbs', label: 'Waste Diverted'    },
  { value: '100+',        label: 'Schools Reached'   },
  { value: '1,300+',      label: 'Volunteer Hours'   },
];

export default function Hero() {
  return (
    <section
      className="relative flex flex-col min-h-screen"
      style={{
        /* Replace backgroundColor with a background image when photo is ready */
        backgroundColor: '#1A3C5E',
      }}
    >
      {/* ── Hero content ─────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-5 py-[120px] sm:px-8">
        <div className="w-full max-w-[870px] flex flex-col items-center gap-8">

          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-white text-[16px] font-normal uppercase tracking-[1.3px] text-center"
          >
            Est. 2018 · Montgomery County, MD
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-white text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-tight text-center"
          >
            Making our community a better place, one action at a time.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-[rgba(255,255,255,0.85)] text-[17px] sm:text-[20px] leading-relaxed text-center max-w-[574px]"
          >
            Rise N Shine Foundation is a 501(c)3 nonprofit driven by youth
            volunteers fighting food insecurity and waste in Montgomery County,
            Maryland.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <a
              href="/donate"
              style={{
                backgroundColor: '#F5A623',
                color: '#1c1c1c',
                fontWeight: 'bold',
                fontSize: '15px',
                padding: '12px 28px',
                borderRadius: '24px',
                textDecoration: 'none',
                display: 'inline-block',
                border: 'none',
              }}
            >
              Donate Now
            </a>
            <a
              href="/get-involved"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '15px',
                padding: '12px 28px',
                borderRadius: '24px',
                textDecoration: 'none',
                display: 'inline-block',
                border: '2px solid white',
              }}
            >
              Get Involved
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '32px 60px',
          marginTop: 0,
        }}
      >
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '32px',
        textAlign: 'center',
      }}>
      {stats.map((stat) => (
        <div key={stat.label} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}>
        <span style={{
          color: '#1A3C5E',
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '1.2',
          fontFamily: "'Urbanist', sans-serif",
        }}>
          {stat.value}
        </span>
        <span style={{
          color: '#555555',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontFamily: "'Open Sans', sans-serif",
        }}>
          {stat.label}
        </span>
      </div>
    ))}
  </div>
</motion.div>
    </section>
  );
}
