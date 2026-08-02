import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartTotal = cartItems.reduce((total, item) => {
    const price = Number(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                width="120"
              />

              <h3>{item.title}</h3>

              <p>{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Subtotal: $
                {Number(item.price.replace("$", "")) *
                  item.quantity}
              </p>

              <div style={{ marginBottom: "10px" }}>
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span style={{ margin: "0 15px" }}>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>

              <hr />
            </div>
          ))}

          <h2>Cart Total: ${cartTotal}</h2>

          <br />

          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </section>
  );
}

export default Cart;