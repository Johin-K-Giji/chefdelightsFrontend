import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { Helmet } from "react-helmet";


const CartPage = () => {
  return (
    <>
    <Helmet>
  <title>Your Cart | Chef Delights – Authentic Kerala Foods</title>
  <meta
    name="description"
    content="View your cart items at Chef Delights. Ready to order authentic Kerala puttu podi, spices, and traditional products? We deliver across India & UAE."
  />
  <meta
    name="keywords"
    content="Chef Delights cart, puttu podi order, Kerala food cart India UAE, online spice shopping, traditional South Indian products"
  />
  <link rel="canonical" href="https://chefdelightsfoods.com/cart" />

  {/* Open Graph */}
  <meta property="og:title" content="Your Cart | Chef Delights – Kerala Flavours Delivered" />
  <meta
    property="og:description"
    content="You're almost there! Review your cart and enjoy authentic Kerala dishes delivered to your doorstep in India and UAE."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chefdelightsfoods.com/cart" />
  <meta property="og:image" content="https://chefdelightsfoods.com/images/cart-preview.jpg" />
  <meta property="og:site_name" content="Chef Delights" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Your Cart | Chef Delights" />
  <meta
    name="twitter:description"
    content="Finalize your purchase of authentic Kerala products. Shop now and get delivery in India & UAE."
  />
  <meta name="twitter:image" content="https://chefdelightsfoods.com/images/cart-preview.jpg" />

  {/* Geo & Language */}
  <meta name="geo.region" content="IN" />
  <meta name="geo.region" content="AE" />
  <meta name="language" content="English" />
</Helmet>

      <Navbar />
      <div className="bg-[#FCFAF4] min-h-screen font-instrument pt-6 pb-12 px-4">
        <Cart />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
