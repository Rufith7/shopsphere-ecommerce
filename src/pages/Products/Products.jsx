import { useState } from "react";

import products from "../../data/products";
import ProductGrid from "../../components/products/ProductGrid";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "low-high":
        return (
          Number(a.price.replace("$", "")) -
          Number(b.price.replace("$", ""))
        );

      case "high-low":
        return (
          Number(b.price.replace("$", "")) -
          Number(a.price.replace("$", ""))
        );

      case "a-z":
        return a.title.localeCompare(b.title);

      case "z-a":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });

  return (
    <section className="products-page">
      <h1>All Products</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Phones")}>Phones</button>
        <button onClick={() => setCategory("Laptops")}>Laptops</button>
        <button onClick={() => setCategory("Audio")}>Audio</button>
        <button onClick={() => setCategory("Shoes")}>Shoes</button>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="a-z">Name: A → Z</option>
        <option value="z-a">Name: Z → A</option>
      </select>

      <br />
      <br />

      <ProductGrid products={filteredProducts} />
    </section>
  );
}

export default Products;