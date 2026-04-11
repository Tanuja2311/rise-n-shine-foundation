function CameraIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="9" width="28" height="20" rx="3" stroke="#1A3C5E" strokeWidth="2" fill="none" />
      <circle cx="16" cy="19" r="5" stroke="#1A3C5E" strokeWidth="2" fill="none" />
      <path
        d="M10 9L12.5 4h7L22 9"
        stroke="#1A3C5E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="25" cy="13" r="1.5" fill="#1A3C5E" />
    </svg>
  );
}

export default function HoursApproval() {
  return (
    <section
      style={{
        backgroundColor: '#F5A623',
        paddingTop: '48px',
        paddingBottom: '48px',
        paddingLeft: '24px',
        paddingRight: '24px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      {/* Camera icon */}
      <CameraIcon />

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: '700',
          fontSize: '26px',
          color: '#1A3C5E',
          textAlign: 'center',
          margin: 0,
          lineHeight: '1.5',
        }}
      >
        How volunteer hours are approved
      </h2>

      {/* Body */}
      <p
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '400',
          fontSize: '16px',
          color: '#1C1C1C',
          textAlign: 'center',
          maxWidth: '760px',
          margin: 0,
          lineHeight: '1.7',
        }}
      >
        As an IRS-approved nonprofit, we require volunteers to submit photo proof
        of their activity after each event or session. This is how we verify and
        approve your volunteer hours for the PVSA and other certifications.
      </p>
    </section>
  );
}
