import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { Icon, Reveal, SectionHead } from './ui'
import { DESTINATIONS, WHY, SERVICES, WA } from '../data'
import karbala from '../assets/karbala.webp'
import kaaba from '../assets/kaaba.webp'

const imgs = { karbala }

export const About = () => (
  <section id="about" className="mx-auto max-w-6xl px-6 py-24">
    <div className="grid items-center gap-12 md:grid-cols-2">
      <Reveal><div className="relative"><img src={kaaba} alt="The Holy Kaaba" loading="lazy" className="aspect-[4/3] w-full rounded-t-[8rem] rounded-b-2xl object-cover shadow-2xl" /><div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-t-[8rem] rounded-b-2xl border border-gold" /></div></Reveal>
      <Reveal delay={0.15}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">About Us</p>
        <h2 className="font-serif text-4xl font-semibold text-deep md:text-5xl">Your Trusted Partner on the Sacred Journey</h2>
        <p className="mt-6 leading-relaxed text-charcoal/75">Al Hasan Al Mujtaba Travel and Tours is dedicated to Ziyarat and religious tourism across Iraq and Iran, helping pilgrims travel with peace of mind so they can focus on devotion.</p>
        <p className="mt-4 text-sm italic text-charcoal/50">[Editable: add company history, years of experience and licences once confirmed.]</p>
      </Reveal>
    </div>
  </section>
)

export const Destinations = () => (
  <section id="destinations" className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHead eyebrow="Holy Cities" title="Ziyarat Destinations" text="From the golden domes of Iraq to the sanctuaries of Iran." />
      {['Iraq', 'Iran'].map((c) => (
        <div key={c} className="mb-14 last:mb-0">
          <h3 className="mb-6 font-serif text-2xl text-royal">{c}</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DESTINATIONS.filter((d) => d.country === c).map((d, i) => (
              <Reveal key={d.name} delay={i * 0.07}>
                <motion.article whileHover={{ y: -8 }} className="group relative h-80 overflow-hidden rounded-2xl bg-deep shadow-lg">
                  {imgs[d.img] ? <img src={imgs[d.img]} alt={`${d.name} shrine`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" /> : <div className="pattern absolute inset-0 bg-gradient-to-br from-royal to-deep" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="font-arabic text-2xl text-gold">{d.ar}</span>
                    <h4 className="font-serif text-3xl text-white">{d.name}</h4>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">{d.desc}</p>
                  </div>
                  <div className="absolute inset-3 rounded-xl border border-gold/0 transition duration-500 group-hover:border-gold/60" />
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)

export const Why = () => (
  <section className="pattern bg-ivory py-24">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHead eyebrow="Why Al Hasan Al Mujtaba" title="A Journey Made With Care" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map(([ic, t, d], i) => (
          <Reveal key={t} delay={i * 0.1} className="text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 rotate-45 items-center justify-center rounded-2xl border border-gold bg-white shadow-md"><Icon name={ic} size={30} className="-rotate-45 text-royal" /></div>
            <h3 className="font-serif text-xl font-semibold text-deep">{t}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{d}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export const Services = () => (
  <section id="services" className="bg-deep py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHead light eyebrow="What We Offer" title="Ziyarat Services" text="Proposed service categories — final details to be confirmed with the company." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(([ic, t, d], i) => (
          <Reveal key={t} delay={i * 0.06}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/10">
              <Icon name={ic} size={32} className="text-gold" />
              <h3 className="mt-5 font-serif text-xl text-white">{t}</h3>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export const CTA = () => (
  <section className="relative overflow-hidden py-28 text-center">
    <img src={karbala} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-deep/85" />
    <Reveal className="relative mx-auto max-w-3xl px-6">
      <h2 className="font-serif text-4xl font-semibold text-white md:text-6xl">Your Journey of <span className="gold-text">Ziyarat</span> Begins Here</h2>
      <p className="mt-5 text-lg text-white/80">Let us help you plan your next sacred journey.</p>
      <a href={WA} target="_blank" rel="noreferrer" className="btn btn-gold mt-9"><MessageCircle size={16} />Plan Your Ziyarat</a>
    </Reveal>
  </section>
)

const SOCIAL = [[Facebook, 'Facebook'], [Instagram, 'Instagram'], [Youtube, 'YouTube']]
export const Contact = () => (
  <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
    <SectionHead eyebrow="Get in Touch" title="Contact Us" text="We would be honoured to help you plan your Ziyarat." />
    <div className="grid gap-5 md:grid-cols-3">
      {[[Phone, 'Phone', '+00 000 0000000'], [Mail, 'Email', 'info@example.com'], [MapPin, 'Office', 'Office address to be added']].map(([I, l, v]) => (
        <Reveal key={l}><div className="rounded-2xl border border-gold/30 bg-white p-7 text-center shadow-sm"><I className="mx-auto text-royal" /><h3 className="mt-3 font-serif text-xl text-deep">{l}</h3><p className="mt-1 text-sm text-charcoal/60">{v}</p></div></Reveal>
      ))}
    </div>
    <div className="mt-10 flex flex-col items-center gap-6">
      <a href={WA} target="_blank" rel="noreferrer" className="btn bg-[#25D366] text-white hover:-translate-y-0.5 hover:brightness-110"><MessageCircle size={16} />Chat on WhatsApp</a>
      <div className="flex gap-4">{SOCIAL.map(([I, n]) => <a key={n} href="#contact" aria-label={n} className="flex h-11 w-11 items-center justify-center rounded-full border border-deep/20 text-deep transition hover:bg-deep hover:text-gold"><I size={18} /></a>)}</div>
    </div>
  </section>
)
