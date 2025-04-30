import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductComponent from "../components/Products";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://www.chefsdelights.com/api/products/");
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error?.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="text-center py-10">Loading products...</div>
      ) : (
        <ProductComponent products={products} />
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
