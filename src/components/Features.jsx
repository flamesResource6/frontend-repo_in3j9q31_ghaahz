import { Ship, Bus, Music, ShieldCheck, Clock, Smartphone, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Ship,
    title: 'Ferry routes',
    desc: 'Sail across coasts and islands with verified operators.',
  },
  {
    icon: Bus,
    title: 'Intercity buses',
    desc: 'Comfortable coaches connecting major African cities.',
  },
  {
    icon: Music,
    title: 'Events & shows',
    desc: 'Concerts, festivals and sports at your fingertips.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure payments',
    desc: 'Protected checkout with leading local gateways.',
  },
  {
    icon: Clock,
    title: 'Real-time updates',
    desc: 'Live schedules, delays and boarding notifications.',
  },
  {
    icon: Smartphone,
    title: 'Mobile wallet',
    desc: 'Store tickets and scan QR at the gate—no printing.',
  },
]

export default function Features() {
  return (
    <section id="explore" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything in one pass</h2>
          <p className="mt-3 text-white/70">Travel and entertainment, unified. Pick, pay, and go.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-fuchsia-500/80 to-cyan-400/80 p-2.5 text-black shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <a href="#book" className="mt-4 inline-flex items-center gap-2 text-sm text-fuchsia-300 hover:text-fuchsia-200">
                Learn more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
