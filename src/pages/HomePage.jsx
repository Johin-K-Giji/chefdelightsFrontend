import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { Suspense, lazy, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Carousel = lazy(() => import("../components/Carousel "));
const SignatureProducts = lazy(() => import("../components/SignatureProducts"));
const AboutHome = lazy(() => import("../components/AboutHome"));

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
  {/* Primary Meta Tags */}
  <title>Buy Kerala Puttu Podi Online | Authentic Taste in India & UAE - Chef Delights</title>
  <meta
    name="description"
    content="Shop authentic Kerala puttu podi, millets, spices, and more from Chef Delights. Available across India and UAE. Pure, traditional flavors delivered to your doorstep."
  />
  <meta
    name="keywords"
    content="Kerala puttu podi, buy puttu powder UAE, Indian millets online, Kerala food products, traditional spices, Chef Delights, best puttu podi India"
  />
  <link rel="canonical" href="https://chefdelightsfoods.com/" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Buy Kerala Puttu Podi Online | Chef Delights" />
  <meta
    property="og:description"
    content="Experience the authentic flavors of Kerala. Buy premium puttu podi, millets, and spices online from Chef Delights. Shipping across India & UAE."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://chefdelightsfoods.com/images/home-banner.jpg" />
  <meta property="og:url" content="https://chefdelightsfoods.com/" />
  <meta property="og:site_name" content="Chef Delights" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Buy Kerala Puttu Podi Online | Chef Delights" />
  <meta
    name="twitter:description"
    content="Shop Kerala's favorite puttu podi, millets, and spices online. Delivery to India & UAE. Taste tradition with Chef Delights."
  />
  <meta name="twitter:image" content="https://chefdelightsfoods.com/images/home-banner.jpg" />

  {/* Geo Meta Tags */}
  <meta name="geo.region" content="IN" />
  <meta name="geo.region" content="AE" />
  <meta name="language" content="English" />
</Helmet>



      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Suspense fallback={<Skeleton height="300px" />}>
        <div data-aos="fade-up">
          <Carousel />
        </div>
      </Suspense>

      {/* Signature Products */}
      <Suspense fallback={<Skeleton height="400px" />}>
        <div data-aos="fade-up">
          <SignatureProducts />
        </div>
      </Suspense>

      {/* About Home */}
      <Suspense fallback={<Skeleton height="400px" />}>
        <div data-aos="fade-up">
          <AboutHome />
        </div>
      </Suspense>

      {/* Footer */}

      {/* WhatsApp Floating Icon */}
{/* WhatsApp Floating Icon (Visible on all screens including mobile) */}
<a
  href="https://wa.me/918547730543"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 animate-bounceSlow"
  data-aos="zoom-in"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
    alt="WhatsApp Chat"
    className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
  />
</a>


      <Footer />
    </div>
  );
};

export default Home;
