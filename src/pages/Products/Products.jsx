import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import products from "../../data/products";
import ProductGrid from "../../components/products/ProductGrid";

const categories = [
  "All",
  "Phones",
  "Laptops",
  "Audio",
  "Shoes",
  "Watches",
  "Accessories",
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        product.title.toLowerCase().includes(searchText) ||
        product.brand.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    result = [...result].sort((a, b) => {
      const priceA = Number(
        a.price.replace("$", "")
      );

      const priceB = Number(
        b.price.replace("$", "")
      );

      switch (sortBy) {
        case "low-high":
          return priceA - priceB;

        case "high-low":
          return priceB - priceA;

        case "a-z":
          return a.title.localeCompare(b.title);

        case "z-a":
          return b.title.localeCompare(a.title);

        case "rating":
          return b.rating - a.rating;

        default:
          return a.id - b.id;
      }
    });

    return result;
  }, [search, category, sortBy]);

  return (
    <main className="products-page">
      <section className="products-header">
        <div>
          <span className="eyebrow">
            SHOPSPHERE COLLECTION
          </span>

          <h1>Explore Our Products</h1>

          <p>
            Discover {products.length} products across
            technology, audio, fashion and accessories.
          </p>
        </div>

        <Link
          to="/"
          className="back-home-btn"
        >
          ← Home
        </Link>
      </section>

      <section className="products-toolbar">
        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search products, brands or categories..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="clear-search"
            >
              ×
            </button>
          )}
        </div>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="sort-select"
        >
          <option value="default">
            Sort: Featured
          </option>

          <option value="low-high">
            Price: Low to High
          </option>

          <option value="high-low">
            Price: High to Low
          </option>

          <option value="a-z">
            Name: A → Z
          </option>

          <option value="z-a">
            Name: Z → A
          </option>

          <option value="rating">
            Highest Rated
          </option>
        </select>
      </section>

      <section className="category-filter">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </section>

      <div className="results-info">
        <strong>
          {filteredProducts.length}
        </strong>{" "}
        products found
        {category !== "All" && (
          <>
            {" "}
            in <strong>{category}</strong>
          </>
        )}
      </div>

      <ProductGrid
        products={filteredProducts}
      />
    </main>
  );
}

export default Products;