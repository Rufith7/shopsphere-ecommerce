import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function OrderSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const savedOrder = localStorage.getItem("lastOrder");

  const order =
    savedOrder ? JSON.parse(savedOrder) : null;

  const orderId =
    location.state?.orderId ||
    order?.orderId ||
    "SS-ORDER";

  const total =
    location.state?.total ||
    order?.total ||
    0;

  useEffect(() => {
    toast.success("Order Placed Successfully!", {
      toastId: "order-success",
    });
  }, []);

  return (
    <section className="order-success-page">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <span className="success-label">
          ORDER CONFIRMED
        </span>

        <h1>
          Order Placed Successfully!
        </h1>

        <p className="success-message">
          Thank you for shopping with ShopSphere.
          Your order has been received and is being
          prepared.
        </p>

        <div className="order-info">

          <div>
            <span>Order ID</span>

            <strong>
              #{orderId}
            </strong>
          </div>

          <div>
            <span>Total Paid</span>

            <strong>
              ${Number(total).toFixed(2)}
            </strong>
          </div>

          <div>
            <span>Payment</span>

            <strong>
              {order?.customer?.paymentMethod ||
                "Cash on Delivery"}
            </strong>
          </div>

        </div>

        <div className="success-actions">

          <button
            className="primary-success-button"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>

          <button
            className="secondary-success-button"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

        <p className="success-note">
          📦 Your order details have been saved
          locally for this demo application.
        </p>

      </div>

    </section>
  );
}

export default OrderSuccess;