import './App.css';
import About from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage'; // ← If you created it
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext'; // ← Import CartProvider
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './pages/CheckoutPage';
import Dashboard from './pages/Dashboard';
import AddProductPage from './pages/AddProduct';
import ViewProducts from './pages/ViewProduct';
import ViewOrders from './pages/ViewOrders';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <CartProvider>
      <Router>
      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/products' element={<ProductPage />} />
  <Route path='/about' element={<About />} />
  <Route path='/gallery' element={<GalleryPage />} />
  <Route path='/cart' element={<CartPage />} />
  <Route path='/checkout' element={<Checkout />} /> 

  <Route path='/login' element={<Login />} />

  {/* Protected Routes */}
  <Route path='/admin' element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } />

  <Route path='/add-product' element={
    <ProtectedRoute>
      <AddProductPage />
    </ProtectedRoute>
  } />

  <Route path='/view-product' element={
    <ProtectedRoute>
      <ViewProducts />
    </ProtectedRoute>
  } />

  <Route path='/view-orders' element={
    <ProtectedRoute>
      <ViewOrders />
    </ProtectedRoute>
  } />
</Routes>
        <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    draggable
  />
      </Router>
    </CartProvider>
  );
}

export default App;
