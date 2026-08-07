import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";

function ProductCard({
  id,
  title,
  price,
  image,
  category,
  brand,
  rating,
  stock,
}) {
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
    category,
    brand,
    rating,
    stock,
  };

  const handleCart = () => {
    dispatch(addToCart(product));

    toast.success(`${title} added to cart`, {
      position: "bottom-right",
      autoClose: 1800,
    });
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(id));

      toast.info(`${title} removed from wishlist`, {
        position: "bottom-right",
        autoClose: 1800,
      });
    } else {
      dispatch(addToWishlist(product));

      toast.success(`${title} added to wishlist`, {
        position: "bottom-right",
        autoClose: 1800,
      });
    }
  };

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={title}
          className="product-card-image"
        />

        <button
          className={`wishlist-icon ${
            isWishlisted ? "wishlisted" : ""
          }`}
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-card-content">
        <span className="product-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p className="product-brand">
          {brand}
        </p>

        <div className="product-rating">
          <span>★</span>
          {rating}
        </div>

        <div className="product-card-bottom">
          <span className="price">
            {price}
          </span>

          <span className="stock">
            {stock > 10
              ? "In Stock"
              : `Only ${stock} left`}
          </span>
        </div>

        <div className="product-card-actions">
          <button
            className="add-cart-btn"
            onClick={handleCart}
          >
            🛒 Add to Cart
          </button>

          <Link
            to={`/products/${id}`}
            className="details-btn"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;