import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BuyPage from "../components/BuyPage";
import { Helmet } from "react-helmet";


const Checkout = () => {
  return (
    <>
    <Helmet>
  <title>Checkout | Chef Delights – Secure Order for Kerala Specialties</title>
  <meta
    name="description"
    content="Complete your order of authentic Kerala puttu podi, spices, and traditional foods at Chef Delights. Secure checkout for India & UAE customers."
  />
  <meta
    name="keywords"
    content="Chef Delights checkout, puttu podi order India, spice delivery UAE, Kerala food online, secure payment, food delivery India UAE"
  />
  <link rel="canonical" href="https://chefdelightsfoods.com/checkout" />

  {/* Open Graph */}
  <meta property="og:title" content="Checkout | Chef Delights – Secure Kerala Food Delivery" />
  <meta
    property="og:description"
    content="Place your order for Kerala's finest products. Fast delivery across India and the UAE. Safe and secure payment gateway."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chefdelightsfoods.com/checkout" />
  <meta property="og:image" content="https://chefdelightsfoods.com/images/checkout-banner.jpg" />
  <meta property="og:site_name" content="Chef Delights" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Checkout | Chef Delights" />
  <meta
    name="twitter:description"
    content="Secure checkout for traditional Kerala food lovers. Shop now from India or UAE."
  />
  <meta name="twitter:image" content="https://chefdelightsfoods.com/images/checkout-banner.jpg" />

  {/* Geo & Language */}
  <meta name="geo.region" content="IN" />
  <meta name="geo.region" content="AE" />
  <meta name="language" content="English" />
</Helmet>

      <Navbar />
      <div className="bg-[#FCFAF4] min-h-screen font-instrument pt-6 pb-12 px-4">
        <BuyPage/>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
