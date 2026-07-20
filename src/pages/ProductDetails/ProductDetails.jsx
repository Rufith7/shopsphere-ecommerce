import { useParams } from "react-router-dom";

import products from "../../data/products";

import ProductInfo from "../../components/products/details/ProductInfo";


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

      <div className="product-image">

        <img
          src={product.image}
          alt={product.title}
        />

      </div>


      <ProductInfo product={product} />


    </section>

  );
}


export default ProductDetails;