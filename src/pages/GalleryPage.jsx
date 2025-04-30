
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Navbar from "../components/NavBar"
import { Helmet } from "react-helmet";


const GalleryPage = ()=>{
    return(
        <div className="w-full flex flex-col">
            <Helmet>
  <title>Gallery | Chef Delights – Traditional Kerala Food Visuals</title>
  <meta
    name="description"
    content="Explore our gallery showcasing delicious Kerala dishes, premium puttu podi, millets, and traditional spice blends. See what makes Chef Delights special."
  />
  <meta
    name="keywords"
    content="Chef Delights gallery, Kerala food images, puttu podi photos, spice gallery, millets showcase, traditional Indian cuisine visuals"
  />
  <link rel="canonical" href="https://chefdelightsfoods.com/gallery" />

  {/* Open Graph */}
  <meta property="og:title" content="Gallery | Chef Delights – South Indian Food Showcase" />
  <meta
    property="og:description"
    content="Visual delight of authentic Kerala flavors – browse images of our popular puttu podi, spices, and meals enjoyed across India & UAE."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://chefdelightsfoods.com/gallery" />
  <meta property="og:image" content="https://chefdelightsfoods.com/images/gallery-preview.jpg" />
  <meta property="og:site_name" content="Chef Delights" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Gallery | Chef Delights" />
  <meta
    name="twitter:description"
    content="Get inspired by our traditional Kerala food gallery. Trusted by customers in India and UAE."
  />
  <meta name="twitter:image" content="https://chefdelightsfoods.com/images/gallery-preview.jpg" />

  {/* Geo & Language */}
  <meta name="geo.region" content="IN" />
  <meta name="geo.region" content="AE" />
  <meta name="language" content="English" />
</Helmet>

            <Navbar/>
        <Gallery/>

        <Footer/>
        </div>
    )
}
export default GalleryPage