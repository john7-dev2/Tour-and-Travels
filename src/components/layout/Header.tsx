import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MapPin, Phone, Mail, Plane, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPlane, setShowPlane] = useState(false)
  const location = useLocation()
  const prevLocationRef = useRef(location.pathname)

  const navigation = [
    { name: 'About Us', href: '/about' },
    { 
      name: 'Europe', 
      href: '/europe',
      dropdown: [
        { name: 'Western Europe', href: '/europe/western' },
        { name: 'Eastern Europe', href: '/europe/eastern' },
        { name: 'Scandinavia', href: '/europe/scandinavia' },
        { name: 'Mediterranean', href: '/europe/mediterranean' }
      ]
    },
    { 
      name: 'Central Asia', 
      href: '/central-asia',
      dropdown: [
        { name: 'Kazakhstan', href: '/central-asia/kazakhstan' },
        { name: 'Uzbekistan', href: '/central-asia/uzbekistan' },
        { name: 'Kyrgyzstan', href: '/central-asia/kyrgyzstan' },
        { name: 'Tajikistan', href: '/central-asia/tajikistan' }
      ]
    },
    { 
      name: 'International', 
      href: '/international',
      dropdown: [
        { name: 'Southeast Asia', href: '/international/southeast-asia' },
        { name: 'Middle East', href: '/international/middle-east' },
        { name: 'Africa', href: '/international/africa' },
        { name: 'Americas', href: '/international/americas' }
      ]
    },
    { name: 'Cruise', href: '/cruise' },
    { 
      name: 'Domestic', 
      href: '/domestic',
      dropdown: [
        { name: 'North India', href: '/domestic/north-india' },
        { name: 'South India', href: '/domestic/south-india' },
        { name: 'East India', href: '/domestic/east-india' },
        { name: 'West India', href: '/domestic/west-india' },
        { name: 'Northeast India', href: '/domestic/northeast-india' }
      ]
    },
    { name: 'Deals & Offers', href: '/deals' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact us', href: '/contact' }
  ]

  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      setShowPlane(true)
      const timer = setTimeout(() => setShowPlane(false), 1200)
      prevLocationRef.current = location.pathname
      return () => clearTimeout(timer)
    }
  }, [location.pathname])

  return (
    <>
      {showPlane && (
        <div className="fixed top-20 left-0 w-full h-1 pointer-events-none z-50 overflow-hidden">
          <Plane className="h-8 w-8 text-carnation drop-shadow-lg animate-plane-fly" />
        </div>
      )}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:block bg-carnation text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 11 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@carnationtravels.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>New Delhi, India - Since 1995</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-carnation to-gold rounded-lg flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-charcoal">TravelPro</h1>
              <p className="text-xs text-gray-600 -mt-1">Your Journey, Our Passion</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-carnation",
                        isActive(item.href) ? "text-carnation" : "text-gray-700"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-carnation/5 hover:text-carnation transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-carnation",
                      isActive(item.href) ? "text-carnation" : "text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-carnation hover:bg-carnation/90 text-white" size="lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 max-h-96 overflow-y-auto">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block text-base font-medium transition-colors py-2",
                      isActive(item.href) ? "text-carnation" : "text-gray-700"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-sm text-gray-600 hover:text-carnation transition-colors py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="bg-carnation hover:bg-carnation/90 text-white mt-4" size="lg">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  )
}
