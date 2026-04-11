import { Link } from 'react-router-dom'

const logoSrc = 'https://www.figma.com/api/mcp/asset/3696d4da-4ba4-462c-b705-d4701546ae92'

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Impact', to: '/impact' },
  { label: 'Events', to: '/events' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Resources', to: '/resources' },
  { label: 'News & Media', to: '/news-media' },
  { label: 'Contact', to: '/contact' },
]

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M11.25 10.833h2.083l.417-2.5H11.25V6.875c0-.69.338-1.25 1.354-1.25H13.9V3.438A18.6 18.6 0 0 0 11.942 3.333c-2.23 0-3.609 1.265-3.609 3.438v1.562H6.25v2.5h2.083V17.5h2.917v-6.667Z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M11.485 8.955 16.725 3h-1.24l-4.553 5.146L7.147 3H3l5.494 7.797L3 17h1.24l4.806-5.433L12.853 17H17l-5.515-8.045ZM9.65 10.767l-.557-.777L4.68 3.914h1.908l3.576 4.986.557.777 4.648 6.478H12.86L9.651 10.767Z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M17.316 5.617a2.081 2.081 0 0 0-1.464-1.473C14.423 3.75 10 3.75 10 3.75s-4.423 0-5.852.394a2.081 2.081 0 0 0-1.464 1.473C2.292 7.05 2.292 10 2.292 10s0 2.95.392 4.383a2.081 2.081 0 0 0 1.464 1.473C5.577 16.25 10 16.25 10 16.25s4.423 0 5.852-.394a2.081 2.081 0 0 0 1.464-1.473c.392-1.433.392-4.383.392-4.383s0-2.95-.392-4.383ZM8.333 12.5v-5l4.167 2.5-4.167 2.5Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 3.333c-1.82 0-2.049.008-2.765.04-.714.033-1.202.146-1.629.312a3.29 3.29 0 0 0-1.189.774 3.29 3.29 0 0 0-.774 1.19c-.166.426-.279.914-.312 1.628C3.3 7.993 3.333 8.18 3.333 10s.008 2.049.04 2.765c.033.714.146 1.202.312 1.629a3.29 3.29 0 0 0 .774 1.189 3.29 3.29 0 0 0 1.19.774c.426.166.914.279 1.628.312.716.033.945.04 2.765.04s2.049-.008 2.765-.04c.714-.033 1.202-.146 1.629-.312a3.29 3.29 0 0 0 1.189-.774 3.29 3.29 0 0 0 .774-1.19c.166-.426.279-.914.312-1.628.033-.716.04-.945.04-2.765s-.008-2.049-.04-2.765c-.033-.714-.146-1.202-.312-1.629a3.29 3.29 0 0 0-.774-1.189 3.29 3.29 0 0 0-1.19-.774c-.426-.166-.914-.279-1.628-.312C12.049 3.34 11.82 3.333 10 3.333Zm0 1.208c1.789 0 2.001.007 2.709.039.653.03.008-.004 1.046.448.26.1.45.22.647.417.196.196.317.387.416.647.452 1.038.417.393.448 1.047.032.707.039.919.039 2.708 0 1.79-.007 2.002-.039 2.71-.03.653-.004.007-.448 1.045a1.69 1.69 0 0 1-.416.648 1.69 1.69 0 0 1-.647.416c-1.038.452-.393.418-1.046.448-.708.032-.92.039-2.709.039-1.79 0-2.001-.007-2.709-.039-.653-.03-.008.004-1.046-.448a1.69 1.69 0 0 1-.647-.416 1.69 1.69 0 0 1-.417-.648C4.73 12.012 4.764 12.356 4.734 11.703c-.032-.708-.039-.92-.039-2.709 0-1.79.007-2.001.039-2.709.03-.653.004-.008.448-1.046.1-.26.22-.45.417-.647.196-.196.387-.317.647-.416C7.284 3.724 6.938 3.758 7.591 3.729c-.708-.032-.92-.04-2.709-.04.001 0 .001 0 0 0Zm0 2.054a3.405 3.405 0 1 0 0 6.81 3.405 3.405 0 0 0 0-6.81Zm0 1.208a2.197 2.197 0 1 1 0 4.394 2.197 2.197 0 0 1 0-4.394Zm4.322-2.147a.796.796 0 1 0 0 1.592.796.796 0 0 0 0-1.592Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M5.417 7.083H3.333v9.584h2.084V7.083ZM4.375 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM16.667 11.25c0-2.26-.486-4.167-3.167-4.167-1.286 0-2.147.687-2.5 1.338V7.083H8.917v9.584H11V11.62c0-1.096.208-2.12 1.542-2.12 1.312 0 1.375 1.214 1.375 2.187v4.98h2.083l-.333-5.417Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/RiseNShinefoundation', icon: <FacebookIcon /> },
  { label: 'Twitter', href: 'https://x.com/risenshinefound', icon: <TwitterIcon /> },
  { label: 'YouTube', href: 'https://www.youtube.com/@risenshinefoundation/featured', icon: <YouTubeIcon /> },
  { label: 'Instagram', href: 'https://www.instagram.com/rise.n.shine.foundation/', icon: <InstagramIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/risenshinefoundation/', icon: <LinkedInIcon /> },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A3C5E]">
      <div style={{ padding: '48px 60px' }} className="max-w-[1320px] mx-auto">

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2">
              <img src={logoSrc} alt="Rise N Shine Foundation logo" className="h-[22px] w-auto" />
              <span className="font-bold text-white text-[18px] leading-[27px] whitespace-nowrap" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Rise N Shine Foundation
              </span>
            </div>
            <p className="italic text-[14px] leading-[21px] text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Volunteer-powered. Community-driven.
            </p>
            <p className="text-[13px] leading-[19.5px] text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              EIN: 84-3822442
            </p>
          </div>

          {/* Quick Links column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[13px] leading-[19.5px] text-white tracking-[1.3px] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[14px] leading-[21px] text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-[13px] leading-[19.5px] text-white tracking-[1.3px] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Contact Us
            </h3>
            <a
              href="mailto:info@risenshinefoundation.org"
              className="text-[14px] leading-[21px] text-white/70 underline hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              info@risenshinefoundation.org
            </a>
            <p className="text-[14px] leading-[21px] text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              +1 240-394-9596
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-6 h-px bg-white/15" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] leading-[19.5px] text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Copyright 2026 Rise N Shine Foundation Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[13px] leading-[19.5px] text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[16px] leading-6">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
