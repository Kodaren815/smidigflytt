'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, ChevronDown, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SubMenuItem {
  name: string
  href: string
  description?: string
  services?: string[]
}

interface NavigationItem {
  name: string
  href: string
  submenu?: SubMenuItem[]
}

const navigation: NavigationItem[] = [
  { name: 'Hem', href: '/' },
  { 
    name: 'Tjänster',
    href: '/tjanster'
  },
  { 
    name: 'Flyttfirma', 
    href: '/',
    submenu: [
      { 
        name: 'Västmanland', 
        href: '/stader/vastmanland/flyttfirma',
        description: 'Flyttjänster i Västerås, Köping och Sala med omnejd.',
        services: ['Bohagsflytt', 'Kontorsflytt', 'Transport']
      },
      { 
        name: 'Stockholm', 
        href: '/stader/stockholm/flyttfirma',
        description: 'Smidig flytt i hela Storstockholm – från city till förort.',
        services: ['Bohagsflytt', 'Kontorsflytt', 'Transport']
      },
      { 
        name: 'Örebro län', 
        href: '/stader/orebro-lan/flyttfirma',
        description: 'Vi hjälper dig med flytt i Örebro, Kumla och Hallsberg.',
        services: ['Bohagsflytt', 'Kontorsflytt', 'Transport']
      },
      { 
        name: 'Södermanland', 
        href: '/stader/sodermanland/flyttfirma',
        description: 'Flyttjänster i Eskilstuna, Strängnäs och Katrineholm.',
        services: ['Bohagsflytt', 'Kontorsflytt', 'Transport']
      },
    ]
  },
  { 
    name: 'Städfirma', 
    href: '/',
    submenu: [
      { 
        name: 'Västmanland', 
        href: '/stader/vastmanland/stadfirma',
        description: 'Flyttstäd och hemstäd i Västerås, Köping och Sala.',
        services: ['Flyttstäd', 'Hemstäd', 'Kontorsstäd']
      },
      { 
        name: 'Stockholm', 
        href: '/stader/stockholm/stadfirma',
        description: 'Städtjänster för hem och kontor i hela Stockholm.',
        services: ['Flyttstäd', 'Hemstäd', 'Kontorsstäd']
      },
      { 
        name: 'Örebro län', 
        href: '/stader/orebro-lan/stadfirma',
        description: 'Städning vid flytt och vardag i Örebro, Kumla och Hallsberg.',
        services: ['Flyttstäd', 'Hemstäd', 'Kontorsstäd']
      },
      { 
        name: 'Södermanland', 
        href: '/stader/sodermanland/stadfirma',
        description: 'Professionell städservice i Eskilstuna, Strängnäs och Katrineholm.',
        services: ['Flyttstäd', 'Hemstäd', 'Kontorsstäd']
      },
    ]
  },
  { name: 'Om oss', href: '/om-oss' },
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
      <div style={{ backgroundColor: '#162F65' }} className="text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a 
              href="tel:08270909" 
              className="flex items-center transition-colors"
              style={{ color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3361AC'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
              }}
            >
              <Phone size={14} className="mr-1.5" />
              08-27 09 09
            </a>
            <a 
              href="sms:0761780552" 
              className="flex items-center transition-colors"
              style={{ color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3361AC'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
              }}
            >
              <MessageCircle size={14} className="mr-1.5" />
              076-178 05 52
            </a>
            <a 
              href="mailto:info@smidigflytt365.se" 
              className="flex items-center transition-colors"
              style={{ color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3361AC'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
              }}
            >
              <Mail size={14} className="mr-1.5" />
              info@smidigflytt365.se
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
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md overflow-hidden">
                    <img 
                      src="/logo.png" 
                      alt="Smidig Flytt 365 Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#162F65' }}>Smidig Flytt 365 AB</div>
                    <div className="text-xs -mt-1" style={{ color: '#3361AC' }}>Din flyttfirma i Mälardalen</div>
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
                    className="text-gray-700 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center group"
                    style={{ color: '#374151' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#3361AC'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#374151'
                    }}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={16} className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />}
                  </Link>
                  <AnimatePresence>
                    {item.submenu && hoveredMenu === item.name && (
                      <motion.div 
                        className="absolute left-0 mt-1 w-80 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50"
                        variants={desktopSubmenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem: SubMenuItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-5 py-3 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                              style={{
                                backgroundColor: 'transparent'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#E7E6DD'
                                e.currentTarget.style.color = '#162F65'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = '#374151'
                              }}
                            >
                              <div className="font-semibold">{subItem.name}</div>
                              <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                              <div className="flex gap-2 mt-2">
                                {subItem.services && subItem.services.map((service: string, index: number) => (
                                  service && (
                                    <span 
                                      key={index}
                                      className="inline-block px-2 py-1 rounded text-xs"
                                      style={{
                                        backgroundColor: 'transparent',
                                        color: 'white'
                                      }}
                                    >
                                    </span>
                                  )
                                ))}
                              </div>
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
                className="px-6 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #E8AF30 0%, #E8C766 100%)',
                  color: '#162F65'
                }}
              >
                Begär Offert
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none p-2 rounded-md"
                style={{ color: '#6B7280' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#3361AC'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6B7280'
                }}
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
                        className="text-gray-800 block px-3 py-3 text-lg font-semibold"
                        style={{ color: '#374151' }}
                        onTouchStart={(e) => {
                          e.currentTarget.style.color = '#3361AC'
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.color = '#374151'
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="pl-6 mt-1 space-y-3">
                          {item.submenu.map((subItem: SubMenuItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="font-medium text-gray-700" style={{ color: '#374151' }}>{subItem.name}</div>
                              <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {subItem.services && subItem.services.map((service: string, index: number) => (
                                  <span 
                                    key={index}
                                    className="inline-block px-2 py-1 rounded text-xs"
                                    style={{
                                      backgroundColor: 'transparent',
                                      color: 'transparent'
                                    }}
                                  >
                                  </span>
                                ))}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-6">
                    <Link
                      href="/offert"
                      className="block text-center px-6 py-4 rounded-full text-lg font-semibold w-full"
                      style={{ 
                        background: 'linear-gradient(135deg, #E8AF30 0%, #E8C766 100%)',
                        color: '#162F65'
                      }}
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
