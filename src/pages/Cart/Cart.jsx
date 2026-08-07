import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const total = items.reduce((sum, item) => {
    const price = Number(
      item.price.replace("$", "")
    );

    return sum + price * item.quantity;
  }, 0);

  const itemCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));

    toast.info("Item removed from cart");
  };

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">
            🛒
          </div>

          <h1>Your cart is empty</h1>

          <p>
            Add something you love and it will
            appear here.
          </p>

          <Link
            to="/products"
            className="primary-action"
          >
            Start Shopping →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-header">
        <div>
          <span className="eyebrow">
            YOUR SHOPPING BAG
          </span>

          <h1>Shopping Cart</h1>

          <p>
            {itemCount}{" "}
            {itemCount === 1
              ? "item"
              : "items"}{" "}
            in your cart
          </p>
        </div>

        <button
          className="clear-cart-btn"
          onClick={() => {
            dispatch(clearCart());

            toast.info("Cart cleared");
          }}
        >
          Clear Cart
        </button>
      </section>

      <section className="cart-layout">
        <div className="cart-items">
          {items.map((item) => {
            const price = Number(
              item.price.replace("$", "")
            );

            return (
              <article
                className="cart-item"
                key={item.id}
              >
                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="cart-item-info">
                  <span>
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.brand}</p>

                  <strong>
                    {item.price}
                  </strong>
                </div>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity(item.id)
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity(item.id)
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  $
                  {(
                    price * item.quantity
                  ).toFixed(2)}
                </div>

                <button
                  className="remove-cart-btn"
                  onClick={() =>
                    handleRemove(item.id)
                  }
                >
                  ×
                </button>
              </article>
            );
          })}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div>
            <span>Subtotal</span>
            <strong>
              ${total.toFixed(2)}
            </strong>
          </div>

          <div>
            <span>Shipping</span>
            <strong className="free">
              FREE
            </strong>
          </div>

          <div>
            <span>Tax</span>
            <strong>
              ${(
                total * 0.08
              ).toFixed(2)}
            </strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>

            <strong>
              ${(
                total +
                total * 0.08
              ).toFixed(2)}
            </strong>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout →
          </Link>

          <Link
            to="/products"
            className="continue-shopping"
          >
            ← Continue Shopping
          </Link>
        </aside>
      </section>
    </main>
  );
}

export default Cart;