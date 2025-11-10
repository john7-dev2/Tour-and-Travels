import { ArrowRight, Users, MapPin, Phone, Mail, Building, Globe, Award, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import toursData from '@/data/carnation-tours.json'

export function BusinessServices() {
  const { businessServices } = toursData

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-carnation to-gold text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Business Travel Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional event management, corporate travel, and business delegation services since 1995
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-white text-carnation hover:bg-gray-100">
              Request Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-carnation">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Our Business Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business travel and event management solutions tailored for corporate clients across India and internationally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <Card key={service.id} className="card-hover border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-carnation/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <Building className="h-8 w-8 text-carnation" />}
                    {index === 1 && <Globe className="h-8 w-8 text-carnation" />}
                    {index === 2 && <Award className="h-8 w-8 text-carnation" />}
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <ArrowRight className="h-5 w-5 text-carnation mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Why Corporate Clients Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three decades of excellence in business travel and event management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-carnation/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-carnation" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">30 Years Experience</h3>
                <p className="text-gray-600">Established in 1995, we bring three decades of expertise in business travel management.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Dedicated Team</h3>
                <p className="text-gray-600">Professional, service-oriented team committed to exceeding client expectations.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-bronze/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-bronze" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Global Reach</h3>
                <p className="text-gray-600">Extensive network across India and international destinations for seamless travel.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-carnation/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-carnation" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Attention to minute details and personalized service that wins client appreciation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Plan Your Next Corporate Event?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our experienced team handle all aspects of your business travel and event management needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-carnation mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 11 2345 6789</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-carnation mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">corporate@carnationtravels.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-carnation mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">New Delhi, India</p>
            </div>
          </div>

          <Button size="xl" className="bg-carnation hover:bg-carnation/90 text-white">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
