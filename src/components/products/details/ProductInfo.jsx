import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../../../features/cart/cartSlice";

import {
  addToWishlist,
  removeFromWishlist,
} from "../../../features/wishlist/wishlistSlice";

function ProductInfo({ product }) {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    toast.success(
      `${product.title} added to cart`,
      {
        position: "bottom-right",
        autoClose: 1800,
      }
    );
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));

      toast.info("Removed from wishlist", {
        position: "bottom-right",
        autoClose: 1800,
      });
    } else {
      dispatch(addToWishlist(product));

      toast.success("Added to wishlist", {
        position: "bottom-right",
        autoClose: 1800,
      });
    }
  };

  return (
    <div className="product-details-info">
      <span className="details-category">
        {product.category}
      </span>

      <h1>{product.title}</h1>

      <p className="details-brand">
        by {product.brand}
      </p>

      <div className="details-rating">
        <span>★</span>
        {product.rating} / 5
      </div>

      <div className="details-price">
        {product.price}
      </div>

      <p className="details-description">
        {product.description}
      </p>

      <span className="details-stock">
        {product.stock > 10
          ? `✓ In stock · ${product.stock} available`
          : `⚡ Only ${product.stock} left`}
      </span>

      <div className="details-actions">
        <button
          className="details-cart-btn"
          onClick={handleAddToCart}
        >
          🛒 Add to Cart
        </button>

        <button
          className="details-wishlist-btn"
          onClick={handleWishlist}
        >
          {isWishlisted
            ? "♥ Wishlisted"
            : "♡ Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;