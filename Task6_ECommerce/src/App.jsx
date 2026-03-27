import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  // Add product or increase quantity
  const addToCart = (product) => {
    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Decrease quantity or remove
  const removeFromCart = (productId) => {
    const existing = cart.find((p) => p.id === productId);
    if (!existing) return;
    if (existing.quantity > 1) {
      setCart(
        cart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    } else {
      setCart(cart.filter((p) => p.id !== productId));
    }
  };

  // Place order
  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setCart([]);
    alert("Order placed successfully!");
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} placeOrder={placeOrder} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;