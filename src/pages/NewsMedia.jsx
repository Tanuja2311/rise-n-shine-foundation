import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MediaCard from '../components/ui/MediaCard';

const mediaItems = [
  {
    id: 1,
    source: 'USA TODAY',
    headline: 'Youth volunteers expand food recovery to 100 Montgomery County schools',
    date: 'March 2025',
    link: 'Read →',
    type: 'print',
  },
  {
    id: 2,
    source: 'PEOPLE MAGAZINE',
    headline: 'Meet the young woman changing how Maryland schools handle food waste',
    date: 'January 2025',
    link: 'Read →',
    type: 'print',
  },
  {
    id: 3,
    source: '7 NEWS ABC',
    headline: 'Montgomery County students lead national food recovery effort',
    date: 'November 2024',
    link: 'Watch →',
    type: 'tv',
  },
  {
    id: 4,
    source: 'PR NEWSWIRE',
    headline: 'Rise N Shine Foundation receives 2024 Honor Rows Award from Baltimore Ravens and M&T Bank',
    date: 'October 2024',
    link: 'Read →',
    type: 'print',
  },
  {
    id: 5,
    source: 'THE WEEK JUNIOR',
    headline: 'Ready, Set, Solve: Young leaders tackling food insecurity in Maryland',
    date: 'September 2024',
    link: 'Read →',
    type: 'print',
  },
  {
    id: 6,
    source: "L'OREAL WOMEN OF WORTH",
    headline: "Shrusti Amula named L'Oreal Women of Worth honoree for environmental leadership",
    date: 'August 2024',
    link: 'Read →',
    type: 'print',
  },
  {
    id: 7,
    source: 'MONTGOMERY COMMUNITY MEDIA',
    headline: 'Local nonprofit launches composting programs in 15 Montgomery County schools',
    date: 'June 2024',
    link: 'Read →',
    type: 'print',
  },
  {
    id: 8,
    source: 'POINTS OF LIGHT',
    headline: 'Rise N Shine Foundation recognized for outstanding volunteer service impact',
    date: 'April 2024',
    link: 'Read →',
    type: 'print',
  },
  {
    id: 9,
    source: 'FORBES',
    headline: 'Student-led nonprofit shows how youth can drive real environmental change',
    date: 'February 2024',
    link: 'Read →',
    type: 'print',
  },
];

const FILTERS = ['All', 'TV & Video', 'Print & Online'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.18, ease: 'easeOut' },
  }),
};

export default function NewsMedia() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = mediaItems.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'TV & Video') return item.type === 'tv';
    if (activeFilter === 'Print & Online') return item.type === 'print';
    return true;
  });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '781px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background placeholder — swap div for <img> with real collage later */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #0d2340 0%, #1A3C5E 55%, #1e4976 100%)',
          }}
        />
        {/* Navy overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(26, 60, 94, 0.7)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '80px 24px',
            maxWidth: '780px',
            width: '100%',
            gap: '14px',
          }}
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
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
            Press &amp; Coverage
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(36px, 6vw, 56px)',
              lineHeight: '1.15',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            News &amp; Media
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: '400',
              fontSize: '19px',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '580px',
              margin: 0,
            }}
          >
            Rise N Shine has been featured across local news, national media, and online publications.
          </motion.p>
        </div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          paddingTop: '32px',
          paddingBottom: '32px',
          paddingLeft: '24px',
          paddingRight: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '21px',
                borderRadius: '999px',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: filter === 'All' ? '22px' : '24px',
                paddingRight: filter === 'All' ? '22px' : '24px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, color 0.2s ease',
                backgroundColor: isActive ? '#1A3C5E' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#1A3C5E',
                border: '0.8px solid #1A3C5E',
                outline: 'none',
              }}
            >
              {filter}
            </button>
          );
        })}
      </section>

      {/* ── Media Cards Grid ─────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          paddingTop: '48px',
          paddingBottom: '64px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '13px',
            color: '#F5A623',
            textTransform: 'uppercase',
            letterSpacing: '1.56px',
            margin: 0,
            textAlign: 'center',
          }}
        >
          {activeFilter === 'All'
            ? 'All Coverage'
            : activeFilter === 'TV & Video'
            ? 'TV & Video'
            : 'Print & Online'}
        </motion.p>

        {/* Grid wrapper */}
        <motion.div
          layout
          style={{
            width: '100%',
            maxWidth: '1040px',
            padding: '0 24px',
            boxSizing: 'border-box',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            columnGap: '15px',
            rowGap: '24px',
          }}
          className="news-media-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MediaCard
                key={item.id}
                source={item.source}
                headline={item.headline}
                date={item.date}
                link={item.link}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .news-media-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 560px) {
          .news-media-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            max-width: 400px !important;
          }
        }
      `}</style>
    </>
  );
}
