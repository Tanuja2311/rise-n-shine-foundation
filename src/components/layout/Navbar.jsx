import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const logoSrc = 'https://www.figma.com/api/mcp/asset/3696d4da-4ba4-462c-b705-d4701546ae92'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about', dropdown: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/about/our-team' },
    { label: 'Awards', to: '/about/awards' },
    { label: 'Partners', to: '/about/partners' },
  ]},
  { label: 'Programs', to: '/programs', dropdown: [
    { label: 'All Programs', to: '/programs' },
    { label: 'Food Recovery', to: '/programs/food-recovery' },
    { label: 'School Composting', to: '/programs/school-composting' },
    { label: 'Community Services', to: '/programs/community-services' },
    { label: 'Advocacy', to: '/programs/advocacy' },
  ]},
  { label: 'Impact', to: '/impact' },
  { label: 'Events', to: '/events' },
  { label: 'Get Involved', to: '/get-involved', dropdown: [
    { label: 'Get Involved', to: '/get-involved' },
    { label: 'Volunteer', to: '/get-involved/volunteer' },
    { label: 'Donate', to: '/get-involved/donate' },
    { label: 'School Chapter', to: '/get-involved/school-chapter' },
    { label: 'Become a Partner', to: '/get-involved/become-a-partner' },
  ]},
  { label: 'Resources', to: '/resources' },
  { label: 'News & Media', to: '/news-media' },
  { label: 'Contact', to: '/contact' },
]

function DropdownMenu({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
    >
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="block px-4 py-2.5 text-sm text-[#1c1c1c] hover:bg-[#FFF8EC] hover:text-[#1A3C5E] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  )
}

function NavItem({ link, isActive }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!link.dropdown) {
    return (
      <Link
        to={link.to}
        className={`flex items-center h-[31px] text-[16px] whitespace-nowrap transition-colors
          ${isActive
            ? 'text-[#1A3C5E] font-semibold border-b-2 border-[#F5A623]'
            : 'text-[#1c1c1c] font-normal hover:text-[#1A3C5E]'}`}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 h-[31px] text-[16px] whitespace-nowrap transition-colors
          ${isActive
            ? 'text-[#1A3C5E] font-semibold border-b-2 border-[#F5A623]'
            : 'text-[#1c1c1c] font-normal hover:text-[#1A3C5E]'}`}
      >
        {link.label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && <DropdownMenu items={link.dropdown} />}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  function isActive(link) {
    if (link.to === '/') return location.pathname === '/'
    return location.pathname.startsWith(link.to)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-200'}`}>
        <div style={{ padding: '0 60px' }} className="h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={logoSrc} alt="Rise N Shine Foundation" className="h-[22px] w-auto" />
            <span className="font-bold text-[#1A3C5E] text-[18px] leading-[27px] whitespace-nowrap">
              Rise N Shine Foundation
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[16px] flex-1 justify-center">
            {navLinks.map((link) => (
              <NavItem key={link.to} link={link} isActive={isActive(link)} />
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              to="/get-involved/donate"
              style={{
                backgroundColor: '#F5A623',
                color: '#1c1c1c',
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '8px 16px',
                borderRadius: '10px',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Donate
            </Link>
            <Link
              to="/get-involved/volunteer"
              style={{
                backgroundColor: 'transparent',
                color: '#1A3C5E',
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '8px 16px',
                borderRadius: '10px',
                border: '2px solid #1A3C5E',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Volunteer
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="block h-[2px] w-5 bg-[#1A3C5E] rounded-full" />
            <span className="block h-[2px] w-5 bg-[#1A3C5E] rounded-full" />
            <span className="block h-[2px] w-5 bg-[#1A3C5E] rounded-full" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl lg:hidden flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-5 h-[72px] border-b border-gray-100">
                <span className="font-bold text-[#1A3C5E] text-[15px]">Rise N Shine Foundation</span>
                <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#1A3C5E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col px-4 py-4 gap-1 flex-1">
                {navLinks.map((link) => {
                  const active = isActive(link)
                  if (!link.dropdown) {
                    return (
                      <Link key={link.to} to={link.to}
                        className={`px-3 py-2.5 rounded-lg text-[16px] transition-colors
                          ${active ? 'bg-[#FFF8EC] text-[#1A3C5E] font-semibold border-l-4 border-[#F5A623]' : 'text-[#1c1c1c] hover:bg-gray-50'}`}>
                        {link.label}
                      </Link>
                    )
                  }
                  const expanded = mobileExpanded === link.label
                  return (
                    <div key={link.to}>
                      <button
                        onClick={() => setMobileExpanded(expanded ? null : link.label)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[16px] transition-colors
                          ${active ? 'bg-[#FFF8EC] text-[#1A3C5E] font-semibold border-l-4 border-[#F5A623]' : 'text-[#1c1c1c] hover:bg-gray-50'}`}>
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-4 border-l-2 border-gray-100 pl-3"
                          >
                            {link.dropdown.map((sub) => (
                              <Link key={sub.to} to={sub.to}
                                className="block px-2 py-2 text-[14px] text-[#444] hover:text-[#1A3C5E] transition-colors">
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </nav>

              <div className="px-5 py-5 border-t border-gray-100 flex flex-col gap-3">
                <Link to="/get-involved/donate"
                  className="w-full text-center bg-[#F5A623] text-[#1c1c1c] font-bold text-[14px] px-4 py-2.5 rounded-lg">
                  Donate
                </Link>
                <Link to="/get-involved/volunteer"
                  className="w-full text-center border-2 border-[#1A3C5E] text-[#1A3C5E] font-bold text-[14px] px-4 py-2.5 rounded-lg">
                  Volunteer
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-[72px]" />
    </>
  )
}