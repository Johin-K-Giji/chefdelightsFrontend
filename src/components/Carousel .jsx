import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FiChevronDown } from "react-icons/fi";
import Button from "./Button";
import BetrootDC from "../images/BetrootDC.webp";
import CarrotDC from "../images/CarrotDC.webp";
import ChocolateDC from "../images/ChocolateDC.webp";
import CarrotMC from "../images/CarrotMC.webp";
import ChocolateMC from "../images/ChocolateMC.webp";
import BetrootMC from "../images/BetrootMC.webp";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "CARROT",
    subtitle: "Puttupodi",
    desktopImage: BetrootDC,
    mobileImage: BetrootMC,
  },
  {
    id: 2,
    title: "RAGI",
    subtitle: "Puttupodi",
    desktopImage: CarrotDC,
    mobileImage: CarrotMC,
  },
  {
    id: 3,
    title: "WHEAT",
    subtitle: "Puttupodi",
    desktopImage: ChocolateDC,
    mobileImage: ChocolateMC,
  },
];


const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      className="w-full relative"
    >
      {slides.map((slide) => (
  <SwiperSlide key={slide.id}>
    <div className="relative w-full h-[60vh] md:h-screen flex items-center justify-center pt-6 px-4 md:px-0 md:pt-0 bg-[#FCFAF4]">
      
      {/* Mobile Image */}
      <img
        src={slide.mobileImage}
        alt={slide.title}
        className="w-full h-full object-cover md:hidden rounded-xl shadow-md"
      />

      {/* Desktop Image */}
      <img
        src={slide.desktopImage}
        alt={slide.title}
        className="w-full h-full object-cover hidden md:block"
      />

      {/* Button - Only on Desktop */}
      <div className="hidden md:block absolute left-10 top-[65%] transform -translate-y-1/2 text-left">
        <Link to="/products">
          <Button text="Discover More" width="160px" height="50px" />
        </Link>
      </div>

      {/* Pagination - Only on Desktop */}
      <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

      {/* Down Arrow - Only on Desktop */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center rounded-full bg-white bg-opacity-30 border border-white animate-bounce cursor-pointer">
        <FiChevronDown className="text-white text-2xl" />
      </div>
    </div>
  </SwiperSlide>
))}

    </Swiper>
  );
};

export default Carousel;
 