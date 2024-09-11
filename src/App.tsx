import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
