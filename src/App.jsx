import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import BookingWidget from './components/BookingWidget'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <BookingWidget />
      <Footer />
    </div>
  )
}

export default App
