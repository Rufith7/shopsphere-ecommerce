import Hero from "../../components/home/Hero";
import ProductCard from "../../components/products/ProductCard";

import products from "../../data/products";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;