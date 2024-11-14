
import './App.css'
import Brands from './Components/Brands'
import Buttoncontact from './Components/Buttoncontact'
import Faq from './Components/Faq'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Imagestext from './Components/Imagestext'
import Iphones from './Components/Iphones'
import Subscription from './Components/Subscription'
import Sectiontestimonials from './Components/Sectiontestimonials'



function App() {


  return (
    <div className="Wrapper">
      <Header />
      <main id="main">
        <Hero />
        <Brands />
        <Features />
        <Iphones />
        <Imagestext />
        <Sectiontestimonials />
        <Faq />
        <Buttoncontact />
        <Subscription />
      </main>
      <Footer />
    </div>
  )
}

export default App