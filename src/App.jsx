import "./App.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ProductCard from "./components/products/ProductCard";
import Footer from "./components/layout/Footer";

import products from "./data/products";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="products-section">
          <h2>Featured Products</h2>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;