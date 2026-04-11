import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  {
    outlet: 'USA TODAY',
    headline: 'Youth-led food recovery organization expands to 100 schools',
    date: 'March 2025',
  },
  {
    outlet: 'PEOPLE MAGAZINE',
    headline: 'The young woman changing how Maryland schools handle waste',
    date: 'January 2025',
  },
  {
    outlet: '7 NEWS ABC',
    headline: 'Montgomery County students lead national food recovery effort',
    date: 'November 2024',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function NewsTeaser() {
  const [winWidth, setWinWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    function handleResize() {
      setWinWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hPad = winWidth >= 1024 ? '60px' : winWidth >= 640 ? '40px' : '20px';
  const isDesktop = winWidth >= 768;

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: `96px ${hPad}`,
        boxSizing: 'border-box',
      }}
    >
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '13px',
          letterSpacing: '1.56px',
          color: '#F5A623',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        In The News
      </p>

      <h2
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '1.2',
          color: '#1A3C5E',
          marginTop: '12px',
          marginBottom: 0,
        }}
      >
        Recent Coverage
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          gap: '24px',
          marginTop: '48px',
        }}
      >
        {articles.map((article) => (
          <motion.div
            key={article.outlet}
            variants={cardVariants}
            style={{
              flex: isDesktop ? '1' : 'unset',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                backgroundColor: '#EEEEEE',
                borderRadius: '12px 12px 0 0',
              }}
            />

            <div style={{ padding: '24px' }}>
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '12px',
                  letterSpacing: '1.2px',
                  color: '#888888',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {article.outlet}
              </p>

              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '1.4',
                  color: '#1C1C1C',
                  marginTop: '8px',
                  marginBottom: 0,
                }}
              >
                {article.headline}
              </p>

              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                  fontSize: '14px',
                  color: '#888888',
                  marginTop: '12px',
                  marginBottom: 0,
                }}
              >
                {article.date}
              </p>

              <Link
                to="/news-media"
                style={{
                  display: 'inline-block',
                  marginTop: '12px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '13px',
                  color: '#1A3C5E',
                  textDecoration: 'none',
                }}
              >
                Read →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link
          to="/news-media"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '700',
            fontSize: '15px',
            color: '#1A3C5E',
            textDecoration: 'none',
          }}
        >
          See All Coverage →
        </Link>
      </div>
    </section>
  );
}
