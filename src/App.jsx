import "./App.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ProductCard from "./components/products/ProductCard";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ProductCard />
      </main>

      <Footer />
    </>
  );
}

export default App;