import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { clearCart } from "../../features/cart/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    paymentMethod: "Cash on Delivery",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(
      String(item.price).replace("$", "")
    );

    return total + price * item.quantity;
  }, 0);

  const shipping = subtotal >= 100 ? 0 : 10;

  const tax = subtotal * 0.08;

  const total = subtotal + shipping + tax;

  const formatPrice = (value) => {
    return `$${value.toFixed(2)}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      navigate("/cart");
      return;
    }

    setIsSubmitting(true);

    const orderId = `SS-${Date.now()
      .toString()
      .slice(-8)}`;

    const order = {
      orderId,
      customer: formData,
      items: cartItems,
      subtotal,
      shipping,
      tax,
      total,
      placedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "lastOrder",
      JSON.stringify(order)
    );

    dispatch(clearCart());

    toast.success("Order placed successfully!");

    setTimeout(() => {
      navigate("/order-success", {
        state: {
          orderId,
          total,
        },
      });
    }, 800);
  };

  if (cartItems.length === 0) {
    return (
      <section className="checkout-page">
        <div className="checkout-empty">
          <div className="empty-icon">🛒</div>

          <h1>Your Cart Is Empty</h1>

          <p>
            Add some products to your cart before
            proceeding to checkout.
          </p>

          <button
            className="checkout-primary-button"
            onClick={() => navigate("/products")}
          >
            Browse Products
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-container">

        <div className="checkout-header">
          <span>SECURE CHECKOUT</span>

          <h1>Complete Your Order</h1>

          <p>
            Enter your delivery details and choose
            your preferred payment method.
          </p>
        </div>

        <div className="checkout-layout">

          {/* LEFT SIDE */}
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >

            <div className="checkout-card">
              <div className="checkout-card-header">
                <span className="step-number">
                  1
                </span>

                <div>
                  <h2>Contact Information</h2>

                  <p>
                    We'll use this information to
                    contact you about your order.
                  </p>
                </div>
              </div>

              <div className="checkout-grid">

                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Rufith"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Shaik"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>
            </div>

            <div className="checkout-card">

              <div className="checkout-card-header">
                <span className="step-number">
                  2
                </span>

                <div>
                  <h2>Delivery Address</h2>

                  <p>
                    Where should we deliver your
                    order?
                  </p>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="address">
                  Street Address
                </label>

                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </div>

              <div className="checkout-grid">

                <div className="form-group">
                  <label htmlFor="city">
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Tirupati"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">
                    State
                  </label>

                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Andhra Pradesh"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="zipCode">
                    ZIP / PIN Code
                  </label>

                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder="517501"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>
            </div>

            <div className="checkout-card">

              <div className="checkout-card-header">
                <span className="step-number">
                  3
                </span>

                <div>
                  <h2>Payment Method</h2>

                  <p>
                    Choose how you'd like to pay.
                  </p>
                </div>
              </div>

              <div className="payment-options">

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={
                      formData.paymentMethod ===
                      "Cash on Delivery"
                    }
                    onChange={handleChange}
                  />

                  <span className="payment-icon">
                    💵
                  </span>

                  <span>
                    <strong>
                      Cash on Delivery
                    </strong>

                    <small>
                      Pay when your order arrives
                    </small>
                  </span>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Card"
                    checked={
                      formData.paymentMethod ===
                      "Card"
                    }
                    onChange={handleChange}
                  />

                  <span className="payment-icon">
                    💳
                  </span>

                  <span>
                    <strong>
                      Credit / Debit Card
                    </strong>

                    <small>
                      Demo payment for this project
                    </small>
                  </span>
                </label>

              </div>
            </div>

            <button
              type="submit"
              className="place-order-button"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Placing Order..."
                : "Place Order →"}
            </button>

          </form>

          {/* RIGHT SIDE */}
          <aside className="checkout-summary">

            <div className="summary-header">
              <h2>Order Summary</h2>

              <span>
                {cartItems.length}{" "}
                {cartItems.length === 1
                  ? "item"
                  : "items"}
              </span>
            </div>

            <div className="checkout-items">

              {cartItems.map((item) => (
                <div
                  className="checkout-item"
                  key={item.id}
                >
                  <div className="checkout-item-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="checkout-item-info">
                    <h3>{item.title}</h3>

                    <p>
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <strong>
                    {formatPrice(
                      parseFloat(
                        String(item.price).replace(
                          "$",
                          ""
                        )
                      ) * item.quantity
                    )}
                  </strong>
                </div>
              ))}

            </div>

            <div className="summary-divider" />

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                {formatPrice(subtotal)}
              </strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <strong className="free-shipping">
                {shipping === 0
                  ? "FREE"
                  : formatPrice(shipping)}
              </strong>
            </div>

            <div className="summary-row">
              <span>Tax</span>

              <strong>
                {formatPrice(tax)}
              </strong>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>

              <strong>
                {formatPrice(total)}
              </strong>
            </div>

            <div className="secure-note">
              🔒 Secure checkout
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}

export default Checkout;