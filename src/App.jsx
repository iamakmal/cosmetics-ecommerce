import Collections from "./components/Collections"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"
import Products from "./components/Products"
import Slider from "./components/Slider"

function App() {
  
  return (
    <>
    <div className="bg-[#FAF7F5]">
    <Navbar/>
    <Slider/>
    <Hero/>
    <Collections/>
    <Offer/>
    <Products/>
    </div>
    </>
  )
}

export default App
