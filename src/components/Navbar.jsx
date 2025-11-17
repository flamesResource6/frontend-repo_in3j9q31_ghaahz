import { useState } from 'react'
import { Menu, X, Ticket, Globe2, MapPin, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Explore', href: '#explore' },
    { label: 'Routes', href: '#routes' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Support', href: '#support' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 blur-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 opacity-60 rounded" />
              <Ticket className="relative h-7 w-7 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide">WavePass</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-white/80 hover:text-white text-sm">Sign in</a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-black shadow-[0_0_25px_rgba(168,85,247,0.35)]">
              <Globe2 className="h-4 w-4" /> Book tickets
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-black w-max">
                <MapPin className="h-4 w-4" /> Book tickets
              </a>
              <a href="#support" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="h-4 w-4" /> Support
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
