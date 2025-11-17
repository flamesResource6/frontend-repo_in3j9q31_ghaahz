import { Twitter, Instagram, Facebook, Github, Mail } from 'lucide-react'

export default function Footer() {
  const links = [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Operators', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
  ]
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h3 className="text-white font-semibold">WavePass</h3>
            <p className="mt-1 text-sm text-white/60">Seamless ticketing across Africa</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {links.map(l => (
              <a key={l.label} href={l.href} className="text-sm text-white/70 hover:text-white">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {[Twitter, Instagram, Facebook, Github, Mail].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full border border-white/10 p-2 text-white/70 hover:text-white hover:bg-white/5">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} WavePass. All rights reserved.</p>
      </div>
    </footer>
  )
}
