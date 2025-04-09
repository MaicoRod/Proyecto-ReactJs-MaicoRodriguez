import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/itemListcontainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/cartContext/CartContext";
import Cart from "./components/cart/Cart";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>      
      </Router>
    </CartProvider>     
  );
};

export default App;
