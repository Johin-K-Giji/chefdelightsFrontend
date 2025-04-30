import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaUser, FaPhone, FaHome } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

const BuyPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId"); // Get the product ID from the URL query parameter

  const [products, setProducts] = useState([]); // Can hold one or multiple products

  const [productIds, setProductIds] = useState([]); // State to store product IDs
  
  const [form, setForm] = useState({
    name: "",
    phone: "",
    altPhone: "",
    house: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const stateProducts = location.state?.products;
    console.log("log",products); 

    if (stateProducts && Array.isArray(stateProducts)) {
      setProducts(stateProducts);
      setProductIds(stateProducts.map((item) => item._id));
    } else if (productId) {
      // fetch single product
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://www.chefsdelights.com/api/products/${productId}`);
          if (response.data) {
            setProducts([response.data]); // Wrap in array for consistency
            setProductIds([response.data._id]);
          }
        } catch (error) {
          console.error("Error fetching product:", error?.response?.data || error.message);
        }
      };
      fetchProduct();
    }
  }, [location.state, productId]);


  const productSubtotal = products.reduce((acc, item) => acc + (item.price?.india || 0), 0);
  const totalAmount = productSubtotal + 49;
  

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    // Check if all required fields are filled
    const requiredFields = [
      "name",
      "phone",
      "house",
      "street",
      "city",
      "state",
      "pincode",
    ];

    // Check for missing fields
    const missingFields = requiredFields.filter((field) => !form[field]);

    if (missingFields.length > 0) {
      Swal.fire({
        title: "Missing Fields",
        text: `Please fill in the following fields: ${missingFields.join(", ")}`,
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }
    
    console.log("productIds before payment:", productIds);

    // Proceed with Razorpay payment flow if all required fields are filled
    const res = await loadRazorpayScript();
    if (!res) {
      Swal.fire({
        title: "Error",
        text: "Razorpay SDK failed to load.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }


    // Create order on backend
    const orderResponse = await axios.post("https://www.chefsdelights.com/api/payment/create-order/", {
      amount: totalAmount * 100, // in paise
    });

    const { amount, id: order_id, currency } = orderResponse.data;

    const options = {
      key: "rzp_test_bHWhJgONq3yqhm", // Replace with your Razorpay key
      amount,
      currency,
      name: "Chef Delights Products",
      description: "Purchase",
      image: "/logo.png", // Optional
      order_id,
      handler: async (response) => {
        // Send payment success data to backend



        const verifyRes = await axios.post("https://www.chefsdelights.com/api/payment/verify-payment", {
          ...response,
          orderDetails: form,
          totalAmount,
          productIds,
        });

        console.log("idss:",productIds);
        

        if (verifyRes.data.success) {

          setForm({
            name: "",
            phone: "",
            altPhone: "",
            house: "",
            street: "",
            landmark: "",
            city: "",
            state: "",
            pincode: "",
          });

          
          Swal.fire({
            title: "Payment Successful",
            text: "Your payment was successful, and the order has been saved!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Payment Verification Failed",
            text: "There was an issue verifying your payment.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      },
      prefill: {
        name: form.name,
        contact: form.phone,
      },
      theme: {
        color: "#c1a365",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-[#FCFAF4] text-[#222] font-instrument min-h-screen py-6 px-3 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT FORM */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Enter Your Delivery Details
          </h2>
          <form className="grid grid-cols-1 gap-5 text-base">
            <InputRow icon={<FaUser />} placeholder="Full Name" name="name" value={form.name} onChange={handleInput} required />
            <InputRow icon={<FaPhone />} placeholder="Phone Number" name="phone" value={form.phone} onChange={handleInput} required />
            <InputRow icon={<FaPhone />} placeholder="Alternate Phone Number (Optional)" name="altPhone" value={form.altPhone} onChange={handleInput} />

            <div className="grid grid-cols-2 gap-4">
              <InputRow icon={<FaHome />} placeholder="House / Flat No." name="house" value={form.house} onChange={handleInput} required />
              <InputRow icon={<FaHome />} placeholder="Street / Area" name="street" value={form.street} onChange={handleInput} required />
              <InputRow icon={<FaHome />} placeholder="Landmark (Optional)" name="landmark" value={form.landmark} onChange={handleInput} />
              <InputRow icon={<FaHome />} placeholder="City" name="city" value={form.city} onChange={handleInput} required />
              <InputRow icon={<FaHome />} placeholder="State" name="state" value={form.state} onChange={handleInput} required />
              <InputRow icon={<FaHome />} placeholder="Pincode" name="pincode" value={form.pincode} onChange={handleInput} required />
            </div>
          </form>
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 sticky top-6">
            <h3 className="text-lg font-semibold mb-3 border-b pb-2">Order Summary</h3>
            {products.length > 0 ? (
  products.map((product, index) => (
    <div key={index} className="flex gap-4 mb-4">
      <img
        src={`https://www.chefsdelights.com/static/products/${product.coverImage}`}
        alt={product.name}
        className="w-20 h-20 object-contain rounded"
      />
      <div>
        <h4 className="text-sm font-medium">{product.name}</h4>
        <p className="text-xs text-gray-500">Price: ₹{product.price.india}</p>
        <p className="text-sm font-semibold mt-1">Subtotal: ₹{product.price.india}</p>
      </div>
    </div>
  ))
) : (
  <div>Loading product(s)...</div>
)}


            <div className="space-y-3 text-sm">
            <SummaryRow label="Product Subtotal" value={`₹${productSubtotal}`} />
            <SummaryRow label="Delivery Charge" value="₹49.00" />
              <hr />
              <SummaryRow label="Total Amount" value={`₹${totalAmount}`} bold={true} />
            </div>

            <div className="mt-5">
              <button
                className="w-full bg-[#c1a365] hover:bg-[#b5914c] transition text-white font-medium py-2.5 rounded-full text-sm cursor-pointer"
                onClick={handlePayment}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputRow = ({ icon, placeholder, required = false, name, value, onChange }) => (
  <div className="flex items-center border-b border-gray-300 focus-within:border-[#c1a365] transition col-span-1">
    <div className="text-gray-500 mr-2 sm:mr-3">{icon}</div>
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full py-2 outline-none text-sm placeholder-gray-400"
      required={required}
    />
  </div>
);

const SummaryRow = ({ label, value, bold = false }) => (
  <div className="flex justify-between items-center">
    <span className={bold ? "font-semibold" : ""}>{label}</span>
    <span className={bold ? "font-semibold" : ""}>{value}</span>
  </div>
);

export default BuyPage;
