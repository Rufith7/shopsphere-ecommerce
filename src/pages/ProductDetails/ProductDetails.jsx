import { useParams } from "react-router-dom";

import products from "../../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );


  if (!product) {
    return <h2>Product Not Found</h2>;
  }


  return (
    <section className="product-details">

      <img 
        src={product.image} 
        alt={product.title}
      />

      <div>

        <h1>{product.title}</h1>

        <h2>{product.price}</h2>

        <p>
          This is a premium quality product.
          Experience the best performance and design.
        </p>

        <button>
          Add to Cart
        </button>

      </div>

    </section>
  );
}


export default ProductDetails;