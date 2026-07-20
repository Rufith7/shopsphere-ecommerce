import { Link } from "react-router-dom";


function ProductCard({ id, title, price, image }) {

  return (

    <div className="product-card">

      <img 
        src={image} 
        alt={title}
      />

      <h3>{title}</h3>

      <p className="price">
        {price}
      </p>


      <Link to={`/products/${id}`}>
        <button>
          View Details
        </button>
      </Link>


    </div>

  );
}


export default ProductCard;