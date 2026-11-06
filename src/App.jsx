import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Destinations, Why, Services, CTA, Contact } from './components/Sections'

export default function App() {
  return (<><Navbar /><main><Hero /><About /><Destinations /><Why /><Services /><CTA /><Contact /></main><Footer /></>)
}
