import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiHome } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("uae");
  const location = useLocation();
  const { cartItems } = useCart();

  const navLinks = [
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  const getLinkClass = ({ isActive }) =>
    `hover:text-[#157EE1] transition-all duration-200 ${
      isActive ? "text-[#157EE1]" : "text-gray-800"
    }`;

  const toggleLocation = () => {
    setSelectedLocation((prev) => (prev === "uae" ? "india" : "uae"));
  };

  return (
    <nav className="bg-[#FCFAF4] shadow-md py-6 px-4 md:px-12 font-instrument">
      <div className="relative container mx-auto flex items-center justify-between">

        {/* Mobile Left Toggle */}
        {/* <div className="flex md:hidden">
          <div
            onClick={toggleLocation}
            className="w-24 h-10 bg-gradient-to-r from-[#6F8EE6] to-[#157EE1] rounded-full p-[3px] flex items-center cursor-pointer relative transition-all duration-300 shadow-lg"
          >
            <div
              className={`absolute top-[3px] left-[3px] h-[22px] w-[42px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                selectedLocation === "uae" ? "translate-x-[calc(100%-3px)]" : ""
              }`}
            />
            <span className={`z-10 flex-1 text-[10px] font-bold text-center ${selectedLocation === "india" ? "text-[#ffffff]" : "text-[#FCFAF4]"}`}>
              IND
            </span>
            <span className={`z-10 flex-1 text-[10px] font-bold text-center ${selectedLocation === "uae" ? "text-[#ffffff]" : "text-[#FCFAF4]"}`}>
              UAE
            </span>
          </div>
        </div> */}

        {/* Logo */}
        <img
          src={Logo}
          alt="Chef Delights Logo"
          className="h-28 w-auto object-contain -my-4 absolute left-1/2 transform -translate-x-1/2 z-10"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 font-semibold text-xl items-center flex-1 justify-start">
          {location.pathname !== "/" && (
            <Link to="/" className="text-xl text-gray-800 hover:text-[#157EE1]">
              <FiHome />
            </Link>
          )}
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={getLinkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Icons (Desktop & Mobile) */}
        <div className="flex items-center space-x-4 md:space-x-6 flex-1 justify-end md:order-2">

          {/* Desktop Toggle */}
          {/* <div className="hidden md:flex">
            <div
              onClick={toggleLocation}
              className="w-24 h-10 bg-gradient-to-r from-[#6F8EE6] to-[#157EE1] rounded-full p-[3px] flex items-center cursor-pointer relative transition-all duration-300 shadow-lg"
            >
              <div
                className={`absolute top-[3px] left-[3px] h-[22px] w-[42px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  selectedLocation === "uae" ? "translate-x-[calc(100%-3px)]" : ""
                }`}
              />
              <span className={`z-10 flex-1 text-[10px] font-bold text-center ${selectedLocation === "india" ? "text-[#ffffff]" : "text-[#FCFAF4]"}`}>
                IND
              </span>
              <span className={`z-10 flex-1 text-[10px] font-bold text-center ${selectedLocation === "uae" ? "text-[#ffffff]" : "text-[#FCFAF4]"}`}>
                UAE
              </span>
            </div>
          </div> */}

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingBag className="text-gray-800 text-xl cursor-pointer hover:text-[#157EE1]" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#157EE1] text-white text-[10px] px-[6px] py-[2px] rounded-full font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Hamburger for Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-gray-800 text-2xl" />
            ) : (
              <FiMenu className="text-gray-800 text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-6 space-y-4 bg-[#FCFAF4] border-t border-gray-300">
          {location.pathname !== "/" && (
            <Link
              to="/"
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 transition text-gray-800 hover:text-[#157EE1]"
              title="Go to Home"
            >
              <FiHome className="text-xl" />
            </Link>
          )}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-[#157EE1] ${
                  isActive ? "text-[#157EE1]" : "text-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Cart link in Mobile */}
          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-lg font-semibold hover:text-[#157EE1] ${
                isActive ? "text-[#157EE1]" : "text-gray-800"
              }`
            }
          >
            Cart ({cartItems.length})
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
