import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  // Define menu items with their routes
  const menuItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Add Product', path: '/add-product' },
    { name: 'View Products', path: '/view-product' },
    { name: 'View Orders ', path: '/view-orders' },
    { name: 'Feedback ', path: '/view-order' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 min-h-screen w-1/4">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">Chef Delights Admin</h2>
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              location.pathname === item.path
                ? 'bg-green-600 text-white shadow-lg'
                : 'hover:bg-gray-700 hover:text-green-400'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;