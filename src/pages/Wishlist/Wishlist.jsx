import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../../features/cart/cartSlice";

import {
  removeFromWishlist,
  clearWishlist,
} from "../../features/wishlist/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));

    toast.success(
      `${item.title} moved to cart`,
      {
        position: "bottom-right",
        autoClose: 1800,
      }
    );
  };

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));

    toast.info("Removed from wishlist", {
      position: "bottom-right",
      autoClose: 1800,
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <main className="wishlist-page">
        <div className="empty-wishlist">
          <div className="empty-icon">♡</div>

          <h1>Your wishlist is empty</h1>

          <p>
            Save products you love and come back
            to them anytime.
          </p>

          <Link
            to="/products"
            className="primary-action"
          >
            Explore Products →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="wishlist-page">
      <section className="wishlist-header">
        <div>
          <span className="eyebrow">
            SAVED FOR LATER
          </span>

          <h1>My Wishlist</h1>

          <p>
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1
              ? "product"
              : "products"}{" "}
            saved.
          </p>
        </div>

        <button
          className="clear-wishlist-btn"
          onClick={() => {
            dispatch(clearWishlist());

            toast.info("Wishlist cleared");
          }}
        >
          Clear Wishlist
        </button>
      </section>

      <section className="wishlist-grid">
        {wishlistItems.map((item) => (
          <article
            className="wishlist-card"
            key={item.id}
          >
            <div className="wishlist-image">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="wishlist-content">
              <span>
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p className="wishlist-brand">
                {item.brand}
              </p>

              <div className="wishlist-price">
                {item.price}
              </div>

              <div className="wishlist-actions">
                <button
                  className="wishlist-cart-btn"
                  onClick={() =>
                    handleMoveToCart(item)
                  }
                >
                  🛒 Move to Cart
                </button>

                <button
                  className="wishlist-remove-btn"
                  onClick={() =>
                    handleRemove(item.id)
                  }
                >
                  Remove
                </button>
              </div>

              <Link
                to={`/products/${item.id}`}
                className="wishlist-details"
              >
                View Details →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Wishlist;