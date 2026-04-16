import { useState, useEffect } from 'react';

const posters = [
  'What to Compost',
  'Throwing Away Food?',
  'Leftovers for Loved Ones',
  'Benefits of Composting',
  'Basics on Composting',
  'Steps for Backyard Composting',
];

const videos = [
  { title: 'Veggies and Fruits Composting Guide' },
  { title: 'How to Sort Your Food and Use Green Bins' },
];

function DownloadIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A3C5E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="24" fill="rgba(26,60,94,0.12)" />
      <polygon points="19,14 38,24 19,34" fill="#1A3C5E" />
    </svg>
  );
}

export default function EducationalMaterials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const posterGridCols = isMobile ? '1fr 1fr' : 'repeat(3, 1fr)';
  const videoFlex = isMobile ? 'column' : 'row';

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
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Label */}
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
          Learn
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: '#1A3C5E',
            textAlign: 'center',
            margin: 0,
            marginTop: '12px',
          }}
        >
          Educational Materials
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '400',
            fontSize: '17px',
            lineHeight: '1.7',
            color: '#555555',
            textAlign: 'center',
            maxWidth: '620px',
            margin: '16px auto 0',
          }}
        >
          Posters, guides, and videos for teaching composting and food recovery
          in schools.
        </p>

        {/* ── Posters subsection ── */}
        <h3
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '22px',
            color: '#1A3C5E',
            borderLeft: '3px solid #F5A623',
            paddingLeft: '16px',
            margin: 0,
            marginTop: '48px',
          }}
        >
          Posters
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: posterGridCols,
            gap: '16px',
            marginTop: '24px',
          }}
        >
          {posters.map((title) => (
            <div key={title}>
              {/* Card */}
              <div
                style={{
                  backgroundColor: '#F7F7F5',
                  borderRadius: '8px',
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  overflow: 'hidden',
                }}
              >
                {/* Download button */}
                <button
                  aria-label={`Download ${title}`}
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(255,255,255,0.85)',
                    border: 'none',
                    borderRadius: '6px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <DownloadIcon />
                </button>
              </div>

              {/* Title below card */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '13px',
                  color: '#555555',
                  textAlign: 'center',
                  margin: 0,
                  marginTop: '8px',
                }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>

        {/* ── Videos subsection ── */}
        <h3
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: '700',
            fontSize: '22px',
            color: '#1A3C5E',
            borderLeft: '3px solid #F5A623',
            paddingLeft: '16px',
            margin: 0,
            marginTop: '48px',
          }}
        >
          Composting Videos
        </h3>

        <div
          style={{
            display: 'flex',
            flexDirection: videoFlex,
            gap: '24px',
            marginTop: '24px',
          }}
        >
          {videos.map((v) => (
            <div key={v.title} style={{ flex: 1 }}>
              {/* Video placeholder */}
              <div
                style={{
                  backgroundColor: '#EEEEEE',
                  borderRadius: '12px',
                  aspectRatio: '16 / 9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <PlayIcon />
              </div>

              {/* Title below */}
              <p
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: '14px',
                  color: '#555555',
                  textAlign: 'center',
                  margin: 0,
                  marginTop: '10px',
                }}
              >
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
