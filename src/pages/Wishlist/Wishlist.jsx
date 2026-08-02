import { useSelector, useDispatch } from "react-redux";
import { toggleWishlist } from "../../features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

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
              onClick={() => dispatch(toggleWishlist(item))}
            >
              Remove
            </button>

            <br />
            <br />

            <Link to={`/products/${item.id}`}>
              <button>View Details</button>
            </Link>

            <hr />
          </div>
        ))
      )}
    </section>
  );
}

export default Wishlist;