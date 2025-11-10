import { Users, Award, Globe, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-carnation to-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About Carnation Travels
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Your Journey, Our Passion. Since 1995, we've been India's leading travel company, specializing in cultural tours, business travel, and personalized experiences across India and beyond.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Established in 1995, Carnation Travel Services (P) Ltd. has been one of India's most upcoming 
              and leading Travel & Tour management companies. With three decades of experience, we possess 
              extensive knowledge, expertise, and resources in conceptualizing and executing events, group tours, 
              business delegations, and conferences both in India and across the world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a professionally managed company that puts our clients in focus. Our keywords in everything 
              we do are Creativity, Quality, Know How, and Value for Money. Our constant endeavor is to provide 
              our clients the best services within stipulated budgets, with personalized attention to minute details.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting destinations to supporting local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Authentic Experiences</h3>
                <p className="text-gray-600">We believe in genuine connections with local cultures and communities.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Sustainable Travel</h3>
                <p className="text-gray-600">Protecting the environment and supporting local economies is our priority.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-sand" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Excellence</h3>
                <p className="text-gray-600">We maintain the highest standards in service, safety, and customer satisfaction.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">Personal Touch</h3>
                <p className="text-gray-600">Every journey is tailored to create meaningful and memorable experiences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate travelers and local experts who bring your adventures to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                  alt="Sarah Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Sarah Chen</h3>
                <p className="text-coral font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">With 15 years in travel, Sarah's vision drives our commitment to authentic, sustainable tourism.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
                  alt="Maria Rodriguez"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-charcoal mb-2">Maria Rodriguez</h3>
                <p className="text-coral font-medium mb-3">Head of Operations</p>
                <p className="text-gray-600 text-sm">Maria ensures every detail of your journey is perfectly planned and executed.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                  alt="David Kim"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-charcoal mb-2">David Kim</h3>
                <p className="text-coral font-medium mb-3">Cultural Experience Director</p>
                <p className="text-gray-600 text-sm">David curates authentic cultural experiences and builds relationships with local communities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
