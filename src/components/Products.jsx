import { useState } from "react";
import { FaThLarge, FaList, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import Button from "./Button";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import cornImage from "../images/Corn.png";

const ProductComponent = ({ products }) => {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="pt-4 pb-8 px-3 sm:px-6 bg-[#FCFAF4] font-instrument text-center min-h-[600px]">
      <h2 className="text-2xl font-semibold mb-4">Our Products</h2>

      {/* Toggle View Icons */}
      <div className="flex justify-start max-w-6xl mx-auto mb-6">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 mx-2 ${viewMode === "grid" ? "text-blue-600" : "text-gray-600"} text-xl`}
        >
          <FaThLarge />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`p-2 mx-2 ${viewMode === "list" ? "text-blue-600" : "text-gray-600"} text-xl`}
        >
          <FaList />
        </button>
      </div>

      {/* Product Display */}
      <div
        className={`w-full mx-auto ${
          viewMode === "grid"
            ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-1 sm:px-4"
            : "flex flex-col items-center gap-6 px-2 sm:px-4"
        }`}
      >
        {viewMode === "list"
          ? products.map((product) => <ListView key={product.id} product={product} />)
          : products.map((product) => <GridView key={product.id} product={product} />)}
      </div>
    </div>
  );
};

// List View
const ListView = ({ product }) => {
  const [mainImage, setMainImage] = useState(`https://www.chefsdelights.com/static/products/${product.coverImage}`);
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 sm:p-5 rounded-lg shadow flex flex-col sm:flex-row items-center w-full sm:w-[90%] min-h-[350px]">
      <div className="w-full sm:w-1/3 flex justify-center h-[180px] sm:h-[300px] mb-4 sm:mb-0">
      <img
  src={mainImage}
  alt={product.name}
  onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop if fallback fails
    e.target.src = cornImage;
  }}
  className="h-full object-contain"
/>
      </div>

      <div className="w-full sm:w-2/3 sm:pl-6 text-left">
        <h3 className="text-sm sm:text-lg font-bold text-[#DC143C]">{product.name}</h3>
        <p className="text-sm sm:text-base font-semibold text-gray-800 flex items-center gap-1">
          <FaRupeeSign className="text-[13px] sm:text-base" />
          {parseFloat(product.price.india).toFixed(2)}
        </p>

        <p className="text-sm sm:text-base text-gray-700 mt-2">{product.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.subImages.map((img, index) => (
            <img
            key={index}
            src={`https://www.chefsdelights.com/static/products/${img}`}
            alt={`Sub-image of ${product.name}`}
            onClick={() => setMainImage(`https://www.chefsdelights.com/static/products/${img}`)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = cornImage;
            }}
            className="w-9 h-9 sm:w-12 sm:h-12 object-cover rounded-md cursor-pointer hover:ring-2 hover:ring-orange-500 transition"
          />
          
          ))}
        </div>

        <div className="flex items-center gap-3 mt-4 flex-wrap">
        <Link to={`/checkout?productId=${product._id}`}>
  <Button text="Buy Now" width="90px" height="40px" />
</Link>
          <button
            className="bg-gray-200 p-2 rounded-full text-lg hover:bg-gray-300 transition"
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} added to cart! 🛒`, {
                icon: "🎉",
              });
            }}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

// Grid View
const GridView = ({ product }) => {
  const [mainImage, setMainImage] = useState(`https://www.chefsdelights.com/static/products/${product.coverImage}`);
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col w-full px-1 sm:px-2">
      <div className="bg-white p-3 rounded-lg shadow w-full h-36 sm:h-44 flex justify-center items-center">
      <img
  src={mainImage}
  alt={product.name}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = cornImage;
  }}
  className="h-full object-contain"
/>
      </div>

      <div className="mt-2 text-left sm:text-center px-1">
        <h3 className="text-xs font-bold text-[#DC143C] truncate">{product.name}</h3>
        <p className="text-xs font-semibold text-gray-800 flex items-center gap-1 justify-start sm:justify-center">
          <FaRupeeSign className="text-[11px]" />
          {parseFloat(product.price.india).toFixed(2)}
        </p>

        <div className="flex gap-2 mt-2 justify-start sm:justify-center">
        <Link to={`/checkout?productId=${product._id}`}>
  <Button text="Buy Now" width="90px" height="40px" />
</Link>
          <button
            className="bg-gray-200 p-2 rounded-full text-lg hover:bg-gray-300 transition"
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} added to cart! 🛒`, {
                icon: "🎉",
              });
            }}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
