function ProductInfo({ product }) {
  return (
    <div className="product-info">

      <h1>{product.title}</h1>

      <h2>{product.price}</h2>

      <div className="rating">
        ⭐⭐⭐⭐⭐
      </div>

      <p>
        This is a premium quality product with
        excellent performance and modern design.
      </p>

      <p>
        Category: {product.category}
      </p>

      <button>
        🛒 Add to Cart
      </button>

    </div>
  );
}

export default ProductInfo;