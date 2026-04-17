import { motion } from 'framer-motion';

export default function MediaCard({ source, headline, date, link, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.22, ease: 'easeIn' } }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      className="flex flex-col w-full"
    >
      {/* Image placeholder */}
      <div className="h-[197px] bg-[#EEEEEE] rounded-t-[12px] shrink-0 w-full" />

      {/* Content */}
      <div
        className="bg-white flex flex-col"
        style={{
          borderLeft: '0.8px solid #EEEEEE',
          borderRight: '0.8px solid #EEEEEE',
          borderBottom: '0.8px solid #EEEEEE',
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          padding: '24px 16px',
          gap: '8px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '12px',
            color: '#888888',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            lineHeight: '18px',
            margin: 0,
          }}
        >
          {source}
        </p>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '700',
            fontSize: '16px',
            color: '#1C1C1C',
            lineHeight: '22.4px',
            margin: 0,
          }}
        >
          {headline}
        </p>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '13px',
            color: '#888888',
            lineHeight: '19.5px',
            margin: 0,
          }}
        >
          {date}
        </p>

        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '700',
            fontSize: '13px',
            color: '#1A3C5E',
            lineHeight: '19.5px',
            margin: 0,
          }}
        >
          {link}
        </p>
      </div>
    </motion.div>
  );
}
