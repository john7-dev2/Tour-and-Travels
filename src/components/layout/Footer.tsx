import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal to-coral rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">TravelPro</h3>
                <p className="text-xs text-gray-400 -mt-1">Your Journey, Our Passion</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating unforgettable travel experiences with handpicked destinations, 
              authentic cultural immersion, and personalized service that goes beyond expectations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-coral cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-coral cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-coral cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-coral cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-coral transition-colors text-sm">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-coral transition-colors text-sm">Destinations</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-coral transition-colors text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-coral transition-colors text-sm">Travel Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-coral transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-300 hover:text-coral transition-colors text-sm">Bali, Indonesia</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-coral transition-colors text-sm">Santorini, Greece</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-coral transition-colors text-sm">Kyoto, Japan</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-coral transition-colors text-sm">Maldives</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-coral transition-colors text-sm">Paris, France</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-coral" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-coral" />
                <span className="text-gray-300 text-sm">hello@wanderia.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-coral mt-1" />
                <span className="text-gray-300 text-sm">
                  123 Travel Street<br />
                  Adventure City, AC 12345<br />
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get exclusive travel deals and destination inspiration delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-coral"
              />
              <button className="px-6 py-2 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TravelPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-coral text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-coral text-sm transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-400 hover:text-coral text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
