import "./App.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import ProductCard from "./components/products/ProductCard";
import Footer from "./components/layout/Footer";

import iphone from "./assets/images/iphone.png";
import macbook from "./assets/images/macbook.webp";
import airpods from "./assets/images/airpods.jpg";
import shoes from "./assets/images/shoes.png";

function App() {
  const products = [
    {
      id: 1,
      title: "iPhone 16 Pro",
      price: "$999",
      image: iphone,
    },
    {
      id: 2,
      title: "MacBook Pro",
      price: "$1999",
      image: macbook,
    },
    {
      id: 3,
      title: "AirPods Pro",
      price: "$249",
      image: airpods,
    },
    {
      id: 4,
      title: "Nike Shoes",
      price: "$149",
      image: shoes,
    },
  ];

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