import { motion } from 'framer-motion'
import { ShieldCheck, BedDouble, Headset, Sparkles, Landmark, MapPin, Globe2, FileCheck2, Hotel, Plane, Users, Circle } from 'lucide-react'
const Icons = { ShieldCheck, BedDouble, Headset, Sparkles, Landmark, MapPin, Globe2, FileCheck2, Hotel, Plane, Users }

export const Icon = ({ name, ...p }) => { const C = Icons[name] || Icons.Circle; return <C aria-hidden="true" {...p} /> }

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: 'easeOut' }}>{children}</motion.div>
)

export const SectionHead = ({ eyebrow, title, text, light }) => (
  <Reveal className="mx-auto mb-14 max-w-2xl text-center">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
    <h2 className={`font-serif text-4xl font-semibold md:text-5xl ${light ? 'text-white' : 'text-deep'}`}>{title}</h2>
    <div className="mx-auto my-5 flex items-center justify-center gap-3"><span className="h-px w-16 bg-gold/60" /><span className="h-2 w-2 rotate-45 bg-gold" /><span className="h-px w-16 bg-gold/60" /></div>
    {text && <p className={light ? 'text-white/75' : 'text-charcoal/70'}>{text}</p>}
  </Reveal>
)
