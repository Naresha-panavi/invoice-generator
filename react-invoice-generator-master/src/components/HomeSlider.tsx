import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

const HomeSlider = () => {
  // Centralized list of images
  const sliderImages = [
    "/assets/slider/invoice-hero1.png",
    "/assets/slider/invoice-hero2.png",
  ]

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[400px]"
    >
      {sliderImages.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeSlider
