import React, { useEffect, useState } from 'react';
import Sidebar from '../components/SideBar';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    monthlyPurchases: 0,
    yearlyPurchases: 0,
    monthlyRevenue: 0,
    yearlyRevenue: 0
  });

  useEffect(() => {
    axios.get('https://www.chefsdelights.com/api/admin/product-stats')
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.error("Error fetching stats:", err);
      });
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="p-8 w-full">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Products This Month</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.monthlyPurchases}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Products This Year</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.yearlyPurchases}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Revenue This Month</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">₹{stats.monthlyRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Revenue This Year</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">₹{stats.yearlyRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
