import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";

function ProductCard({ id, title, price, image }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = wishlistItems.some(
    (item) => item.id === id
  );

  const product = {
    id,
    title,
    price,
    image,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    toast.success("🛒 Product added to cart!");
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));

      toast.info("💔 Removed from wishlist");
    } else {
      dispatch(addToWishlist(product));

      toast.success("❤️ Added to wishlist");
    }
  };

  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
      />

      <h3>{title}</h3>

      <p className="price">{price}</p>

      <button onClick={handleAddToCart}>
        🛒 Add to Cart
      </button>

      <button onClick={handleWishlist}>
        {isWishlisted
          ? "❤️ Remove Wishlist"
          : "🤍 Add to Wishlist"}
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