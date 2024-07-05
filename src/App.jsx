import Collections from "./components/Collections"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"
import Slider from "./components/Slider"

function App() {
  
  return (
    <>
    <div className="bg-[#FAF7F5]">
    <Navbar/>
    <Slider/>
    <Hero/>
    <Offer/>
    <Collections/>
    </div>
    </>
  )
}

export default App
