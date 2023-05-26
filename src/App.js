import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

//Navigation Bar

// Home Page Imports
import { Header } from "./pages/HomePage/Header";
import { BrandsGallery } from "./pages/HomePage/BrandsGallery";
import { CTA } from "./pages/HomePage/CTA";
import { Article } from "./pages/HomePage/Article";
import { Contact } from "./pages/signup";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Featured } from "./pages/HomePage/Featured";

// Shops Imports
import { DressUpHub } from "./pages/DressUpHub/DressUpHub";
import { SneakerHouse } from "./pages/SneakerHouse/SneakerHouse";


function Home() {
  return (
    <>
      {/* <DressUpHub /> */}
      <Header />
      <Featured />
      <BrandsGallery />
      <CTA />
      <Article />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DressUpHub" element={<DressUpHub />} />
            <Route path="/SneakerHouse" element={<SneakerHouse />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
