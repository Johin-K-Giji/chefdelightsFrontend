import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D4F66] text-white py-10 px-4 md:px-16 text-sm">
      {/* Wrapper with responsive layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
        {/* Mobile Horizontal Footer (Flex Row) */}
        <div className="flex flex-wrap justify-between w-full md:hidden gap-2 text-[11px]">
          {/* Left */}
          <div className="flex flex-col items-center min-w-[100px]">
            <h2 className="font-semibold text-sm">Chef’s Delights</h2>
            <p className="mt-1">© Chef’s Delights</p>
          </div>

          {/* Home Links */}
          <div className="flex flex-col items-center min-w-[100px]">
            <h3 className="font-semibold mb-1 text-sm">Home</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Products</li>
              <li>Gallery</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="flex flex-col items-center min-w-[100px]">
            <h3 className="font-semibold mb-1 text-sm">Policies</h3>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center min-w-[100px]">
            <h3 className="font-semibold mb-1 text-sm">Contact</h3>
            <p>+91 9447580543</p>
            <p>+971 545016864</p>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold">Chef’s Delights</h2>
          <p className="text-sm mt-2">© Chef’s Delights</p>
        </div>

        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-2">Home</h3>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Products</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-2">Policies</h3>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">+91 9632451125</p>
          <p className="text-sm">+91 9632451125</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-6 space-x-6">
        <FaInstagram className="text-xl cursor-pointer hover:text-gray-300" />
        <FaWhatsapp className="text-xl cursor-pointer hover:text-gray-300" />
        <FaFacebook className="text-xl cursor-pointer hover:text-gray-300" />
      </div>
    </footer>
  );
};

export default Footer;
