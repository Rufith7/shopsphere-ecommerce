import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              width="120"
            />

            <h3>{item.title}</h3>

            <p>{item.price}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default Cart;