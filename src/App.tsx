import './App.css'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Benefits } from './components/Benefits'
import {Sectors} from './components/Sectors'
import {Footer} from './components/Footer'

function App() {

  return (
    <main className="bg-slate-950">
      <h1>SAI</h1>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Benefits />
      <Sectors />
      <Footer />
    </main>
  )
}

export default App