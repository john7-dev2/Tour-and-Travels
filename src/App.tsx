import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Destinations } from './pages/Destinations'
import { TourDetails } from './pages/TourDetails'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'
import { BusinessServices } from './pages/BusinessServices'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/business-services" element={<BusinessServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
