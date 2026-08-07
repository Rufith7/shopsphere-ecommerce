import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="empty-products">
        <div className="empty-products-icon">🔎</div>
        <h2>No products found</h2>
        <p>
          Try changing your search or selecting a different category.
        </p>
      </div>
    );
  }

  return (
    <section className="products-section">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;