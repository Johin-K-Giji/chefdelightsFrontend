import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/SideBar';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [priceIndia, setPriceIndia] = useState('');
  const [priceUAE, setPriceUAE] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [subImages, setSubImages] = useState([]);
  const [coverPreview, setCoverPreview] = useState(null);
  const [subImagePreviews, setSubImagePreviews] = useState([]);

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleSubImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setSubImages(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setSubImagePreviews(previews);
  };

  const handleRemoveSubImage = (index) => {
    const newImages = subImages.filter((_, i) => i !== index);
    const newPreviews = subImagePreviews.filter((_, i) => i !== index);
    setSubImages(newImages);
    setSubImagePreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
  
    // Instead of sending a single price, send an object for both 'india' and 'uae'
    formData.append('price[india]', priceIndia);  // Price for India
    formData.append('price[uae]', priceUAE);      // Price for UAE
  
    if (coverImage) {
      formData.append('coverImage', coverImage);  // Ensure this field name matches
    }
  
    subImages.forEach((img) => {
      formData.append('subImages', img);  // Ensure this field name matches
    });
  
    try {
      const response = await axios.post('https://www.chefsdelights.com/api/products/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 201) {
        alert('Product added successfully');
        // Reset form
        setProductName('');
        setPriceIndia('');
        setPriceUAE('');
        setProductDescription('');
        setCoverImage(null);
        setSubImages([]);
        setCoverPreview(null);
        setSubImagePreviews([]);
      }
    } catch (error) {
      console.error('Error adding product:', error);  // Detailed error logging
      alert('Failed to add product');
    }
  };
  
  
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Add Product</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">Price (India)</label>
              <input
                type="number"
                value={priceIndia}
                onChange={(e) => setPriceIndia(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
                placeholder="₹ Price in INR"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Price (UAE)</label>
              <input
                type="number"
                value={priceUAE}
                onChange={(e) => setPriceUAE(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
                placeholder="د.إ Price in AED"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              placeholder="Enter product description"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
              className="w-full mt-2"
              required
            />
            {coverPreview && (
              <div className="mt-4">
                <img
                  src={coverPreview}
                  alt="Cover Preview"
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Sub Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleSubImagesChange}
              className="w-full mt-2"
            />
            <div className="flex flex-wrap gap-4 mt-4">
              {subImagePreviews.map((preview, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={preview}
                    alt="Sub Preview"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveSubImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
