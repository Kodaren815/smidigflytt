'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Hem', href: '/' },
  { 
    name: 'Tjänster', 
    href: '/tjanster',
    submenu: [
      { name: 'Bohagsflytt privatflytt', href: '/tjanster/bohagsflytt-privatflytt' },
      { name: 'Företagsflytt', href: '/tjanster/foretagsflytt' },
      { name: 'Utlandsflytt', href: '/tjanster/utlandsflytt' },
      { name: 'Bärhjälp', href: '/tjanster/barhjalp' },
      { name: 'Packhjälp vid flytt', href: '/tjanster/packhjalp-vid-flytt' },
      { name: 'Bortforsling av möbler', href: '/tjanster/bortforsling-av-mobler' },
      { name: 'Magasinering av möbler', href: '/tjanster/magasinering-av-mobler' },
      { name: 'Flyttstädning', href: '/tjanster/flyttstadning' },
      { name: 'Byggstädning', href: '/tjanster/byggstadning' },
      { name: 'Fönsterputsning', href: '/tjanster/fonsterputsning' },
    ]
  },
  { 
    name: 'Städer', 
    href: '/stader',
    submenu: [
      { name: 'Stockholm', href: '/stader/stockholm' },
      { name: 'Göteborg', href: '/stader/goteborg' },
      { name: 'Malmö', href: '/stader/malmo' },
      { name: 'Uppsala', href: '/stader/uppsala' },
      { name: 'Västerås', href: '/stader/vasteras' },
      { name: 'Örebro', href: '/stader/orebro' },
    ]
  },
  { name: 'Reklamera', href: '/reklamation' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const desktopSubmenuVariants = {
    hidden: { opacity: 0, y: 10, pointerEvents: 'none' as const },
    visible: { opacity: 1, y: 0, pointerEvents: 'auto' as const, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 10, pointerEvents: 'none' as const, transition: { duration: 0.15 } }
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-smidig-darkblue text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:010-123-4567" className="flex items-center hover:text-smidig-blue transition-colors">
              <Phone size={14} className="mr-1.5" />
              Kommer snart
            </a>
            <a href="mailto:info@smidigflytt365.nu" className="flex items-center hover:text-smidig-blue transition-colors">
              <Mail size={14} className="mr-1.5" />
              info@smidigflytt365.nu
            </a>
          </div>
          <div className="hidden sm:block">
            <p>Öppet Mån-Fre 08:00-17:00</p>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-none'
        }`}
        initial={false}
        animate={{ 
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-2xl">S</span>
                  </div>
                  <div>
                    <div style={{color: 'black !important'}} className="text-2xl font-bold text-smidig-darkblue">Smidigflytt</div>
                    <div style={{color: 'black !important'}} className="text-xs text-smidig-blue -mt-1">Din flyttpartner i Södermanland</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-smidig-blue px-4 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center group"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={16} className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />}
                  </Link>
                  <AnimatePresence>
                    {item.submenu && hoveredMenu === item.name && (
                      <motion.div 
                        className="absolute left-0 mt-1 w-56 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50"
                        variants={desktopSubmenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-smidig-lightgray hover:text-smidig-darkblue transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block ml-5">
              <Link
                href="/offert"
                style={{ color: 'black !important'}}
                className="bg-gradient-cta text-smidig-darkblue px-6 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Begär Offert
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-smidig-blue focus:outline-none p-2 rounded-md"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'X' : 'Menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-800 hover:text-smidig-blue block px-3 py-3 text-lg font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="pl-6 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-gray-600 hover:text-smidig-blue block px-3 py-2 text-base"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-6">
                    <Link
                      href="/offert"
                      className="bg-gradient-cta text-smidig-darkblue block text-center px-6 py-4 rounded-full text-lg font-semibold w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Begär Offert
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}
