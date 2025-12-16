import HomeSlider from "../components/HomeSlider"
import InvoiceSection from "../components/InvoiceSection";
const Home = () => {
  return (
    <div>
      {/* Slider */}
      <div className="slider-container">
        <HomeSlider />
      </div>

      {/* Content */}
      <section className="p-10 text-center">
        <InvoiceSection />
      </section>
    </div>
  )
}

export default Home
