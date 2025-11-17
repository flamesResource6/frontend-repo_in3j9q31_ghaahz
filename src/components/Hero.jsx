import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Futuristic ticketing across Africa
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Book ferry, bus and event tickets in seconds
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            One pass for sea, road and stage. Discover routes, compare prices, and get there with confidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(168,85,247,0.35)]">
              Start booking
            </a>
            <a href="#explore" className="inline-flex justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Explore routes
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
