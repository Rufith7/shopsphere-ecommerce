import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";
import { toggleWishlist } from "../../features/wishlist/wishlistSlice";

function ProductCard({ id, title, price, image }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isWishlisted = wishlistItems.some(
    (item) => item.id === id
  );

  const product = {
    id,
    title,
    price,
    image,
  };

  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
      />

      <h3>{title}</h3>

      <p className="price">{price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        🛒 Add to Cart
      </button>

      <button
        onClick={() => dispatch(toggleWishlist(product))}
      >
        {isWishlisted ? "❤️ Remove Wishlist" : "🤍 Add Wishlist"}
      </button>

      <Link to={`/products/${id}`}>
        <button>
          View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;