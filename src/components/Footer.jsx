import logo from '../assets/logo.webp'
import { NAV, DESTINATIONS } from '../data'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Al Hasan Al Mujtaba logo" className="h-16 w-16 rounded-full ring-2 ring-gold/60" />
          <h3 className="mt-4 font-serif text-xl text-white">Al Hasan Al Mujtaba</h3>
          <p className="text-[10px] tracking-[0.3em] text-gold">TRAVEL AND TOURS</p>
          <p className="mt-4 text-sm">Your Trusted Partner on the Sacred Journey.</p>
        </div>
        <div><h4 className="mb-4 font-serif text-lg text-gold">Quick Links</h4><ul className="space-y-2 text-sm">{NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul></div>
        <div><h4 className="mb-4 font-serif text-lg text-gold">Destinations</h4><ul className="space-y-2 text-sm">{DESTINATIONS.map((d) => <li key={d.name}><a href="#destinations" className="hover:text-gold">{d.name}</a></li>)}</ul></div>
        <div><h4 className="mb-4 font-serif text-lg text-gold">Contact</h4><ul className="space-y-2 text-sm"><li>+00 000 0000000</li><li>info@example.com</li><li>Office address to be added</li></ul></div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} Al Hasan Al Mujtaba Travel and Tours. All rights reserved.</p>
    </footer>
  )
}
