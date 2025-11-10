import { useParams } from 'react-router-dom'
import { Star, MapPin, Calendar, Users, Clock, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import toursData from '@/data/tours.json'

export function TourDetails() {
  const { id } = useParams()
  const { tours } = toursData
  
  const tour = tours.find(t => t.id === id)
  
  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-8">The tour you're looking for doesn't exist.</p>
          <Button variant="coral">Back to Tours</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-8 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-5 w-5" />
            <span>{tour.destination}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">{tour.title}</h1>
        </div>
      </section>

      {/* Tour Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">Tour Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Calendar className="h-6 w-6 text-teal mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold">{tour.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Users className="h-6 w-6 text-teal mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Group Size</div>
                    <div className="font-semibold">{tour.groupSize}</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Shield className="h-6 w-6 text-teal mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Difficulty</div>
                    <div className="font-semibold">{tour.difficulty}</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Star className="h-6 w-6 text-teal mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Rating</div>
                    <div className="font-semibold">{tour.rating}/5</div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">Tour Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-coral rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              {tour.itinerary && (
                <div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-6">Itinerary</h3>
                  <div className="space-y-6">
                    {tour.itinerary.map((day, index) => (
                      <Card key={index} className="border-l-4 border-l-coral">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {day.day}
                            </div>
                            <h4 className="text-lg font-semibold text-charcoal">{day.title}</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{day.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-teal">${tour.price}</span>
                      {tour.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${tour.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>

                  <div className="flex items-center justify-center space-x-2 mb-6">
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

                  <Button variant="coral" size="lg" className="w-full mb-4">
                    Book This Tour
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button variant="outline" size="lg" className="w-full mb-6">
                    Contact Us
                  </Button>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-teal" />
                      <span>Free cancellation up to 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-teal" />
                      <span>Instant confirmation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-teal" />
                      <span>Small group experience</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
