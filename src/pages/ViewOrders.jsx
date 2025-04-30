import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/SideBar';
import { FiSearch } from 'react-icons/fi';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('https://www.chefsdelights.com/api/orders/getorder')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
      });
  };

  const filteredOrders = orders.filter(order => {
    const query = searchQuery.toLowerCase();
    return (
      order.userName.toLowerCase().includes(query) ||
      order.transactionId?.toLowerCase().includes(query)
    );
  });
  
  
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (a.status === 1 && b.status !== 1) return 1;
    if (a.status !== 1 && b.status === 1) return -1;
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
  

  const handleStatusUpdate = (orderId) => {
    axios.put('https://www.chefsdelights.com/api/orders/update-order', { orderId })
      .then(response => {
        console.log(response.data.message);
        fetchOrders(); // Refresh order list
      })
      .catch(error => {
        console.error("Error updating order status:", error);
      });
  };

  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="p-4 sm:p-8 w-full sm:w-3/4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">View Orders</h1>

        {/* Search Bar */}
        <div className="relative mb-6 max-w-full sm:max-w-sm">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full p-2 pl-10 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-xl" />
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr className="bg-green-500 text-white text-left">
                <th className="p-4">S. No</th>
                <th className="p-4">Full Name</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Address</th>
                <th className="p-4">Products</th>
                <th className="p-4">Amount</th>
                {/* <th className="p-4">Payment Mode</th> */}
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                sortedOrders.map((order, index) => (
                  <tr key={order._id || index} className="border-b hover:bg-gray-50">
                    <td className="p-4 text-gray-700">{index + 1}</td>
                    <td className="p-4 text-gray-700">{order.userName}</td>
                    <td className="p-4 text-gray-700">{order.phone}</td>
                    <td className="p-4 text-gray-700">{order.address}</td>
                    <td className="p-4 text-gray-700">
                      {order.products?.map(product => product.name).join(', ')}
                    </td>
                    <td className="p-4 text-gray-700">₹{order.orderAmount}</td>
                    {/* <td className="p-4 text-gray-700">{order.paymentMode}</td> */}
                    <td className="p-4 text-gray-700">{order.transactionId}</td>
                    <td className="p-4 text-gray-700">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                    <td className="p-4">
                      {order.status === 1 ? (
                        <span className="bg-gray-300 text-white px-4 py-1 rounded-full">Completed</span>
                      ) : (
                        <button
                          className="bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-600"
                          onClick={() => handleStatusUpdate(order._id)}
                        >
                          Order Placed
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="p-4 text-center text-gray-500">No orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
