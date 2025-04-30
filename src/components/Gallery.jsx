
import bananaImage from "../images/Bananna.png";
import beetrootImage from "../images/Beetroot.png";
import cornImage from "../images/Corn.png";
import BetrootDC from "../images/BetrootDC.webp";
import CarrotDC from "../images/CarrotDC.webp";
import ChocolateMC from "../images/ChocolateMC.webp";


const galleryImages = [
  { id: 1, src: BetrootDC, class: "col-span-2 row-span-2" },
  { id: 2, src: bananaImage, class: "col-span-1 row-span-1" },
  { id: 3, src: beetrootImage, class: "col-span-1 row-span-1" },
  { id: 4, src: cornImage, class: "col-span-2 row-span-1" },
  { id: 5, src: bananaImage, class: "col-span-1 row-span-1" },
  { id: 6, src: bananaImage, class: "col-span-1 row-span-1" },
];

const Gallery = () => {
  return (
    <div className="bg-[#FCFAF4] py-12 px-4 md:px-16 font-instrument">
      <h2 className="text-center text-xl md:text-2xl font-semibold mt-4 md:mt-8 mb-6 md:mb-8 relative after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#157EE1] after:mx-auto after:mt-2">
        Our Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] md:auto-rows-[200px] gap-4 max-w-6xl mx-auto">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={`rounded-lg overflow-hidden shadow-md ${img.class}`}
          >
            <img
              src={img.src}
              alt={`gallery-${img.id}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
