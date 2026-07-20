import ProductCard from "./ProductCard";
import products from "../../data/products";

function ProductGrid() {
  return (
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
  );
}

export default ProductGrid;