import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const moveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <section className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => (
          <div
            key={item.id}
            className="wishlist-item"
            style={{ marginBottom: "20px" }}
          >
            <img
              src={item.image}
              alt={item.title}
              width="120"
            />

            <h3>{item.title}</h3>

            <p>{item.price}</p>

            <button
              onClick={() => moveToCart(item)}
            >
              🛒 Move to Cart
            </button>

            <button
              onClick={() =>
                dispatch(removeFromWishlist(item.id))
              }
            >
              Remove
            </button>

            <br />
            <br />

            <Link to={`/products/${item.id}`}>
              <button>
                View Details
              </button>
            </Link>

            <hr />
          </div>
        ))
      )}
    </section>
  );
}

export default Wishlist;