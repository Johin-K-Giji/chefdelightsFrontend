import AboutComponent from "../components/AboutComponent"
import Footer from "../components/Footer"
import Navbar from "../components/NavBar"
import { Helmet } from "react-helmet";


const About = ()=>{
    return(
        <div className="w-full flex flex-col">

<Helmet>
  <title>About Chef Delights | Authentic Kerala Food Products in India & UAE</title>
  <meta
    name="description"
    content="Learn more about Chef Delights — a trusted brand for authentic Kerala puttu podi, spices, and millets. Serving homes across India and UAE with traditional taste."
  />
  <meta
    name="keywords"
    content="About Chef Delights, Kerala food company, Indian food in UAE, puttu powder brand, authentic spices India, traditional Kerala products"
  />
  <link rel="canonical" href="https://chefdelightsfoods.com/about" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="About Chef Delights | Kerala Taste Across India & UAE" />
  <meta
    property="og:description"
    content="Chef Delights brings the essence of Kerala cuisine to your table. Learn our story and how we deliver authentic food products to India and UAE."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chefdelightsfoods.com/about" />
  <meta property="og:image" content="https://chefdelightsfoods.com/images/about-banner.jpg" />
  <meta property="og:site_name" content="Chef Delights" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Chef Delights | Authentic Kerala Flavours" />
  <meta
    name="twitter:description"
    content="Chef Delights delivers traditional Kerala food products like puttu podi, millets, and spices across India & UAE. Read our story."
  />
  <meta name="twitter:image" content="https://chefdelightsfoods.com/images/about-banner.jpg" />

  {/* Geo & Language */}
  <meta name="geo.region" content="IN" />
  <meta name="geo.region" content="AE" />
  <meta name="language" content="English" />
</Helmet>

            <Navbar/>
        <AboutComponent/>

        <Footer/>
        </div>
    )
}
export default About