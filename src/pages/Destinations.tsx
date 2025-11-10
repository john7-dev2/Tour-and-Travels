import { useState } from 'react'
import { Star, MapPin, Filter, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import toursData from '@/data/tours.json'

export function Destinations() {
  const { destinations, tours } = toursData
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')

  const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania']
  const priceRanges = ['All', 'Under $1000', '$1000-$2000', '$2000-$5000', 'Over $5000']

  const filteredDestinations = destinations.filter(dest => {
    if (selectedRegion !== 'All' && dest.region !== selectedRegion) return false
    return true
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal to-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Explore Destinations
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover extraordinary places around the world, each carefully selected for their unique beauty, culture, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <select 
                value={selectedRegion} 
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              
              <select 
                value={priceFilter} 
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div className="ml-auto text-sm text-gray-600">
              {filteredDestinations.length} destinations found
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => {
              const destinationTours = tours.filter(tour => 
                tour.destination === destination.name
              )
              
              return (
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
                    <div className="absolute top-4 left-4 bg-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.region}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{destination.name}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-charcoal mb-3">{destination.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-teal font-semibold">{destination.priceRange}</span>
                      <span className="text-sm text-gray-500">
                        {destinationTours.length} tour{destinationTours.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="coral" size="sm" className="flex-1">
                        View Tours
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal to-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our travel experts can create a custom itinerary tailored to your preferences, budget, and travel style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" className="bg-white text-teal hover:bg-gray-100">
              Plan Custom Trip
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-teal">
              Contact Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
