import { useState } from "react";

import products from "../../data/products";
import ProductGrid from "../../components/products/ProductGrid";

function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="products-page">
      <h1>All Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ProductGrid products={filteredProducts} />
    </section>
  );
}

export default Products;