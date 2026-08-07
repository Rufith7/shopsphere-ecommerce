import { Link, useParams } from "react-router-dom";

import products from "../../data/products";
import ProductInfo from "../../components/products/details/ProductInfo";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="empty-products">
        <h2>Product Not Found</h2>

        <p>
          The product you're looking for doesn't exist.
        </p>

        <Link
          to="/products"
          className="details-cart-btn"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <div className="product-details">
        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <ProductInfo product={product} />
      </div>
    </main>
  );
}

export default ProductDetails;