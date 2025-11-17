import { useState } from 'react'
import { CalendarDays, MapPin, Users, Ship, Bus, Music } from 'lucide-react'

const tabs = [
  { id: 'ferry', label: 'Ferry', icon: Ship },
  { id: 'bus', label: 'Bus', icon: Bus },
  { id: 'event', label: 'Event', icon: Music },
]

export default function BookingWidget() {
  const [active, setActive] = useState('ferry')

  return (
    <section id="book" className="relative bg-black py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
          <div className="flex flex-wrap gap-3">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors border ${
                  active === id
                    ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black border-transparent'
                    : 'border-white/15 text-white/80 hover:bg-white/5'
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="col-span-1 lg:col-span-2">
              <label className="text-xs text-white/60">From</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white">
                <MapPin className="h-4 w-4 text-white/50" />
                <input className="w-full bg-transparent outline-none placeholder:text-white/40" placeholder="City or port" />
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <label className="text-xs text-white/60">To</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white">
                <MapPin className="h-4 w-4 text-white/50" />
                <input className="w-full bg-transparent outline-none placeholder:text-white/40" placeholder="City, port or venue" />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/60">Date</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white">
                <CalendarDays className="h-4 w-4 text-white/50" />
                <input type="date" className="w-full bg-transparent outline-none placeholder:text-white/40 [color-scheme:dark]" />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/60">Passengers</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white">
                <Users className="h-4 w-4 text-white/50" />
                <input type="number" min="1" defaultValue={1} className="w-full bg-transparent outline-none placeholder:text-white/40" />
              </div>
            </div>
            <div className="lg:col-span-1 flex items-end">
              <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-3 text-sm font-medium text-black shadow-[0_0_25px_rgba(168,85,247,0.35)]">Search</button>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/50">Popular: Lagos ↔️ Accra • Dar es Salaam → Zanzibar • Nairobi → Mombasa</p>
        </div>
      </div>
    </section>
  )
}
