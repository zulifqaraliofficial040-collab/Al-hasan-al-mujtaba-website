// Replace with the real number (international format, digits only) via VITE_WHATSAPP_NUMBER in .env
const NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ''
export const WA = `https://wa.me/${NUMBER}?text=${encodeURIComponent('Assalamu Alaikum, I would like to inquire about Ziyarat packages.')}`

export const NAV = [['Home','#home'],['About Us','#about'],['Ziyarat Services','#services'],['Destinations','#destinations'],['Contact','#contact']]

export const DESTINATIONS = [
  { name:'Karbala', ar:'کربلا', country:'Iraq', desc:'The sacred resting place of Imam Hussain (a.s.) and his companions.', img:'karbala' },
  { name:'Najaf', ar:'نجف', country:'Iraq', desc:'Home of the shrine of Imam Ali (a.s.) and Wadi-us-Salaam.', img:'najaf' },
  { name:'Kufa', ar:'کوفہ', country:'Iraq', desc:'The historic Masjid-e-Kufa and the city of Imam Ali (a.s.).', img:'masjid e kufa' },
  { name:'Kazmain', ar:'کاظمین', country:'Iraq', desc:'Shrines of Imam Musa al-Kazim and Imam Muhammad al-Jawad (a.s.).', img:'kazmain' },
  { name:'Samarra', ar:'سامرا', country:'Iraq', desc:'The Al-Askari shrines and the golden dome of Imam Hadi and Imam Askari (a.s.).', img:'sammra' },
  { name:'Mashhad', ar:'مشہد', country:'Iran', desc:'The shrine of Imam Ali al-Ridha (a.s.), the spiritual heart of Iran.', img:'mashad' },
  { name:'Qom', ar:'قم', country:'Iran', desc:'City of Hazrat Masooma (s.a.) and a centre of Islamic learning.', img:'qom' },
  { name:'Masjid e Jamkran', ar:'مسجدِ جمکران', country:'Iran', desc:'Masjid-e-Jamkaran is a famous Shia mosque near Qom, Iran, believed to have been built by the command of Imam Mahdi (عج), and is a major center of prayer and spiritual devotion..', img:'masjid e jamkran' },
]

export const WHY = [
  ['ShieldCheck','Trusted Travel Assistance','Clear guidance and honest planning from first enquiry to return.'],
  ['BedDouble','Comfortable Travel Arrangements','Thoughtfully arranged stays and transport for peaceful journeys.'],
  ['Headset','Dedicated Customer Support','A responsive team to answer questions before and during travel.'],
  ['Sparkles','Memorable Ziyarat Experiences','Unhurried itineraries that leave space for prayer and reflection.'],
]

export const SERVICES = [
  ['Landmark','Iraq Ziyarat Tours','Karbala, Najaf, Kufa, Kazmain and Samarra.'],
  ['MapPin','Iran Ziyarat Tours','Mashhad, Qom and Tehran.'],
  ['Globe2','Iraq & Iran Combined Packages','One seamless journey across both countries.'],
  ['FileCheck2','Visa Assistance','Help with documentation and visa applications.'],
  ['Hotel','Hotel Accommodation','Comfortable stays close to the holy shrines.'],
  ['Plane','Air Ticket Assistance','Flight options matched to your travel dates.'],
  ['Users','Group & Family Ziyarat','Arrangements designed for groups and families.'],
]
