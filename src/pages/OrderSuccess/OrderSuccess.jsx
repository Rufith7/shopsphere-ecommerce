import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <section
      style={{
        textAlign: "center",
        marginTop: "60px",
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with ShopSphere.
      </p>

      <br />

      <Link to="/">
        <button>
          Continue Shopping
        </button>
      </Link>
    </section>
  );
}

export default OrderSuccess;