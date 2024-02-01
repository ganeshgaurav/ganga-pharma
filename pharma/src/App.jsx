import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./components/Shop";
import { Home } from "../src/components/Home";
import { Navbar } from "../src/components/Navbar";
import { Contact } from "./components/Contact";
import { Cart } from "./components/Cart";
import { ShopContextProvider } from "../src/context/globalContext";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
