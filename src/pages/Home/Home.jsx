import { Link } from "react-router-dom";

import products from "../../data/products";
import ProductGrid from "../../components/products/ProductGrid";

function Home() {
  const featuredProducts = products.slice(0, 8);

  const categoryCount = new Set(
    products.map((product) => product.category)
  ).size;

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">
            WELCOME TO SHOPSPHERE
          </span>

          <h1>
            Everything You Want.
            <br />
            <span>All In One Place.</span>
          </h1>

          <p>
            Explore premium technology, audio,
            fashion and everyday accessories
            from one modern storefront.
          </p>

          <div className="hero-actions">
            <Link
              to="/products"
              className="hero-primary-btn"
            >
              Shop Now →
            </Link>

            <Link
              to="/products"
              className="hero-secondary-btn"
            >
              Explore Products
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>{products.length}+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>{categoryCount}</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>4.6★</strong>
              <span>Avg. Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              HANDPICKED FOR YOU
            </span>

            <h2>Featured Products</h2>

            <p>
              A selection from our latest collection.
            </p>
          </div>

          <Link
            to="/products"
            className="view-all-link"
          >
            View all →
          </Link>
        </div>

        <ProductGrid
          products={featuredProducts}
        />
      </section>

      <section className="category-showcase">
        <div>
          <span className="eyebrow">
            SHOP BY CATEGORY
          </span>

          <h2>Find what you're looking for</h2>
        </div>

        <div className="category-cards">
          <Link to="/products" className="category-card">
            <span>📱</span>
            <strong>Phones</strong>
            <small>
              {products.filter(
                (p) => p.category === "Phones"
              ).length}{" "}
              products
            </small>
          </Link>

          <Link to="/products" className="category-card">
            <span>💻</span>
            <strong>Laptops</strong>
            <small>
              {products.filter(
                (p) => p.category === "Laptops"
              ).length}{" "}
              products
            </small>
          </Link>

          <Link to="/products" className="category-card">
            <span>🎧</span>
            <strong>Audio</strong>
            <small>
              {products.filter(
                (p) => p.category === "Audio"
              ).length}{" "}
              products
            </small>
          </Link>

          <Link to="/products" className="category-card">
            <span>⌚</span>
            <strong>Watches</strong>
            <small>
              {products.filter(
                (p) => p.category === "Watches"
              ).length}{" "}
              products
            </small>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;