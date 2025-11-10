import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Shield, Clock, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import toursData from '@/data/carnation-tours.json'

export function Home() {
  const { destinations, tours, testimonials, blogPosts } = toursData

  const featuredDestinations = destinations.filter(dest => dest.featured)
  const featuredTours = tours.filter(tour => tour.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
            Welcome to
            <span className="block text-gold">Carnation Travels</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
            Your Journey, Our Passion. Established 1995 — Three decades of creating unforgettable travel experiences across India and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
            <Button size="xl" className="text-lg bg-carnation hover:bg-carnation/90 text-white transform hover:scale-105 transition-transform duration-300">
              Explore India Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-charcoal transform hover:scale-105 transition-transform duration-300">
              Business Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-pulse-glow">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Top Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover breathtaking locations handpicked by our travel experts for their natural beauty and cultural richness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="card-hover overflow-hidden border-0 shadow-lg">
                <div className="relative h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-carnation font-semibold">{destination.priceRange}</span>
                    <Button variant="ghost" size="sm" className="text-carnation hover:text-carnation/80">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button variant="outline" size="lg" className="border-carnation text-carnation hover:bg-carnation hover:text-white">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Why Choose Carnation Travels
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Since 1995, we've been India's trusted travel partner, specializing in cultural tours, business travel, and personalized experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-carnation/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-carnation" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">30 Years Experience</h3>
                <p className="text-gray-600">Three decades of expertise in creating exceptional travel experiences across India and internationally.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock assistance wherever you are in the world, whenever you need us.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Business Services</h3>
                <p className="text-gray-600">Specialized in corporate events, conferences, trade delegations, and business travel management.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-carnation/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-carnation" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Personalized Service</h3>
                <p className="text-gray-600">Customized itineraries and dedicated support ensuring every journey exceeds expectations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Featured Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully curated experiences that showcase the best of each destination's culture, nature, and adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="card-hover overflow-hidden border-0 shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2 relative">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-carnation text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{tour.destination}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{tour.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{tour.groupSize}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(tour.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({tour.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-carnation">₹{tour.price.toLocaleString()}</span>
                        {tour.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{tour.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <Button className="bg-carnation hover:bg-carnation/90 text-white" size="sm">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button variant="outline" size="lg" className="border-carnation text-carnation hover:bg-carnation hover:text-white">
                View All Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              What Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real travelers who've experienced the magic of our carefully crafted journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Travel Inspiration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stories, tips, and insights from our travel experts to inspire your next adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-hover overflow-hidden border-0 shadow-lg">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-carnation text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-carnation text-carnation hover:bg-carnation hover:text-white">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-carnation to-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 10,000+ travelers and get exclusive deals, destination guides, and travel inspiration delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-charcoal placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" size="lg" className="bg-white text-carnation hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  )
}
