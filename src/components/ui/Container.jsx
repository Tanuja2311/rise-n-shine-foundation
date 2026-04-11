function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto px-[60px] md:px-[40px] sm:px-[20px] ${className}`}>
      {children}
    </div>
  )
}

export default Container
