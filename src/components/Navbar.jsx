import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.webp'
import { NAV, WA } from '../data'

export default function Navbar() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${solid || open ? 'bg-deep/95 shadow-xl backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Al Hasan Al Mujtaba logo" className="h-12 w-12 rounded-full ring-2 ring-gold/70" />
          <span className="hidden leading-tight sm:block"><span className="block font-serif text-lg font-bold tracking-wide text-white">AL HASAN AL MUJTABA</span><span className="block text-[10px] tracking-[0.3em] text-gold">TRAVEL AND TOURS</span></span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map(([l, h]) => <li key={h}><a href={h} className="text-sm text-white/85 transition hover:text-gold">{l}</a></li>)}
        </ul>
        <a href={WA} target="_blank" rel="noreferrer" className="btn btn-gold hidden !py-2.5 lg:inline-flex"><MessageCircle size={16} />WhatsApp Inquiry</a>
        <button className="p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="border-t border-white/10 px-5 pb-6 lg:hidden">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-white/90">{l}</a>)}
          <a href={WA} target="_blank" rel="noreferrer" className="btn btn-gold mt-5 w-full"><MessageCircle size={16} />WhatsApp Inquiry</a>
        </div>
      )}
    </header>
  )
}
