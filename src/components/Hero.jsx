import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import hero from '../assets/hero.webp'
import { WA } from '../data'

const fade = (d) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: d, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-deep">
      <motion.img
        src={hero}
        alt="The Holy Kaaba in Makkah and the golden shrine of Karbala at sunrise"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover object-[35%_center] md:object-center"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep/85 via-deep/65 to-deep" />
      <div className="pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-32 text-center">
        <motion.p {...fade(0.3)} className="mb-6 font-arabic text-2xl text-gold">بسم اللہ الرحمن الرحیم</motion.p>
        <motion.h1 {...fade(0.5)} className="font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Begin Your <span className="gold-text">Sacred Journey</span> With Us
        </motion.h1>
        <motion.p {...fade(0.7)} className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
          Experience peaceful and memorable Ziyarat journeys to the holy cities of Iraq and Iran with Al Hasan Al Mujtaba Travel and Tours.
        </motion.p>
        <motion.div {...fade(0.9)} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#destinations" className="btn btn-gold">Explore Ziyarat Packages <ArrowRight size={16} /></a>
          <a href={WA} target="_blank" rel="noreferrer" className="btn btn-ghost"><MessageCircle size={16} />Contact Us on WhatsApp</a>
        </motion.div>
        <motion.p {...fade(1.1)} className="mt-12 text-xs uppercase tracking-[0.35em] text-gold/90">
          Makkah &nbsp;·&nbsp; Karbala &nbsp;·&nbsp; Najaf &nbsp;·&nbsp; Mashhad
        </motion.p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  )
}