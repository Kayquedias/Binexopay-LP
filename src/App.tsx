
import HeaderBackground from './assets/header-bg.png'

import './index.css'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ScrollDown } from './components/ScrollDown'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { DownloadSection } from './components/DowloadSection/DownloadSection'

function App() {

  return (
    <div>
      <img src={HeaderBackground} alt="" className='max-w-screen-lg absolute left-0 top-0 -z-10 lg:w-full lg:max-w-full lg:max-h-80' />
      
      <Navigation />

      <HeroSection />

      <ScrollDown />

      <Features />

      <Services />

      {/* <TrustSection /> */}

      <DownloadSection />

      <Footer />
    </div>
  )
}

export default App
