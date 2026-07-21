import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

function ProductInfo({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("Added to cart:", product);
  };

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

      <button onClick={handleAddToCart}>
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ProductInfo;