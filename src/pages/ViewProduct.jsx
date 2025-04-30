import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/SideBar';
import { FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newCoverImage, setNewCoverImage] = useState(null);
  const [newSubImages, setNewSubImages] = useState([]);
  const [existingSubImages, setExistingSubImages] = useState([]);
  const [existingCoverImage, setExistingCoverImage] = useState('');
  const [removedSubImages, setRemovedSubImages] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('https://www.chefsdelights.com/api/products/')
      .then(response => {
        if (response.data && response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setShowEditModal(true);
    setNewCoverImage(null);
    setNewSubImages([]);
    setExistingSubImages(product.subImages || []);
    setExistingCoverImage(product.coverImage || '');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'price_india' || name === 'price_uae') {
      const numericValue = parseFloat(value);
      setEditProduct((prev) => {
        const updatedProduct = {
          ...prev,
          price: {
            ...prev.price,
            [name === 'price_india' ? 'india' : 'uae']: isNaN(numericValue) ? value : numericValue,
          },
        };
        console.log(updatedProduct); // Debugging log
        return updatedProduct;
      });
    } else {
      setEditProduct((prev) => {
        const updatedProduct = {
          ...prev,
          [name]: value,
        };
        return updatedProduct;
      });
    }
  };
  


  const handleCoverImageChange = (e) => {
    setNewCoverImage(e.target.files[0]);
    setExistingCoverImage(null); // User has chosen a new cover image
  };

  const handleSubImagesChange = (e) => {
    setNewSubImages(Array.from(e.target.files));
  };

  const removeExistingSubImage = (index) => {
    const removed = existingSubImages[index];
    setRemovedSubImages((prev) => [...prev, removed]);
  
    const updated = [...existingSubImages];
    updated.splice(index, 1);
    setExistingSubImages(updated);
  };
  
  const handleEditSubmit = () => {
    const formData = new FormData();
  
    formData.append('product_name', editProduct.name);
    formData.append('price_india', editProduct.price.india);
    formData.append('price_uae', editProduct.price.uae);
    formData.append('product_description', editProduct.description);
  
    // Cover image
    if (newCoverImage) {
      formData.append('coverImage', newCoverImage);
    } else if (existingCoverImage) {
      formData.append('existingCoverImage', existingCoverImage);
    }
  
    // Existing and removed sub images
    formData.append('existingSubImages', JSON.stringify(existingSubImages));
    formData.append('removedSubImages', JSON.stringify(removedSubImages));
  
    // New sub images
    newSubImages.forEach((image) => {
      formData.append('subImages', image);
    });
  
    axios
      .put(`https://www.chefsdelights.com/api/products/edit/${editProduct._id}`, formData)
      .then((response) => {
        console.log('Product updated successfully:', response.data);
        fetchProducts();
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };
  


  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`https://www.chefsdelights.com/api/products/delete/${id}`)
        .then(() => fetchProducts())
        .catch(error => {
          console.error("Error deleting product:", error);
        });
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">View Products</h1>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-sm p-2 pl-10 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-xl" />
        </div>

        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-green-500 text-white text-left">
              <th className="p-4">S. No</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price (India)</th>
              <th className="p-4">Price (UAE)</th>
              <th className="p-4">Description</th>
              <th className="p-4">Cover Image</th>
              <th className="p-4">Sub Images</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr key={product._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-700">{index + 1}</td>
                  <td className="p-4 text-gray-700">{product.name}</td>
                  <td className="p-4 text-gray-700">{product.price.india}</td>
                  <td className="p-4 text-gray-700">{product.price.uae}</td>
                  <td className="p-4 text-gray-700">{product.description}</td>
                  <td className="p-4">
                    <img
                      src={`https://www.chefsdelights.com/static/products/${product.coverImage}`}
                      alt="Cover"
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex">
                      {product.subImages?.map((img, idx) => (
                        <img
                          key={idx}
                          src={`https://www.chefsdelights.com/static/products/${img}`}
                          alt="Sub"
                          className="w-12 h-12 object-cover rounded mr-2"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      onClick={() => handleEditClick(product)}
                    >
                      <FiEdit className="text-xl" />
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDeleteClick(product._id)}
                    >
                      <FiTrash2 className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-center text-gray-500">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>

        {showEditModal && editProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 overflow-y-auto max-h-[90vh]">
              <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  name="name"
                  value={editProduct.name}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block mb-2">
                Price (India):
                <input
                  type="number"
                  name="price_india"
                  value={editProduct.price?.india || ''}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>

              <label className="block mb-2">
                Price (UAE):
                <input
                  type="number"
                  name="price_uae"
                  value={editProduct.price?.uae || ''}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>


              <label className="block mb-2">
                Description:
                <textarea
                  name="description"
                  value={editProduct.description}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>

              <label className="block mb-2">
                Current Cover Image:
                {existingCoverImage && (
                  <div className="flex items-center mt-1">
                    <img
                      src={`https://www.chefsdelights.com/static/products/${existingCoverImage}`}
                      alt="Current Cover"
                      className="w-12 h-12 object-cover rounded mr-2"
                    />
                    <button
                      onClick={() => setExistingCoverImage(null)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      ❌ Remove
                    </button>
                  </div>
                )}
              </label>

              <label className="block mb-2">
                New Cover Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>

              <label className="block mb-2">
                Current Sub Images:
                <div className="flex flex-wrap mt-1">
                  {existingSubImages.map((img, idx) => (
                    <div key={idx} className="relative mr-2 mb-2">
                      <img
                        src={`https://www.chefsdelights.com/static/products/${img}`}
                        alt="Sub"
                        className="w-12 h-12 object-cover rounded"
                      />
                      <button
                        onClick={() => removeExistingSubImage(idx)}
                        className="absolute top-[-8px] right-[-8px] bg-white text-red-500 rounded-full text-xs"
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
              </label>

              <label className="block mb-4">
                Upload New Sub Images:
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleSubImagesChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>

              <div className="flex justify-end">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-400 text-white px-3 py-1 rounded mr-2 hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSubmit}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
