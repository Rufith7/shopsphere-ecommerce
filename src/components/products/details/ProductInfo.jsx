import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../../../features/cart/cartSlice";

import {
  addToWishlist,
  removeFromWishlist,
} from "../../../features/wishlist/wishlistSlice";


function ProductInfo({ product }) {

  const dispatch = useDispatch();


  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );


  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );


  const handleCart = () => {

    dispatch(addToCart(product));

    toast.success(
      `${product.title} added to cart`
    );

  };


  const handleWishlist = () => {

    if (isWishlisted) {

      dispatch(
        removeFromWishlist(product.id)
      );

      toast.info(
        `${product.title} removed from wishlist`
      );

    } else {

      dispatch(
        addToWishlist(product)
      );

      toast.success(
        `${product.title} added to wishlist`
      );

    }

  };


  return (

    <div className="product-info">


      <h1>
        {product.title}
      </h1>


      <h2>
        {product.price}
      </h2>


      <div className="rating">

        ⭐ {product.rating}/5

      </div>



      <p>
        {product.description}
      </p>



      <p>
        <strong>
          Brand:
        </strong>{" "}
        {product.brand}
      </p>



      <p>
        <strong>
          Category:
        </strong>{" "}
        {product.category}
      </p>



      <p>
        <strong>
          Available Stock:
        </strong>{" "}
        {product.stock}
      </p>



      <button
        onClick={handleCart}
      >
        🛒 Add to Cart
      </button>



      <button
        onClick={handleWishlist}
      >
        {
          isWishlisted
            ? "❤️ Remove Wishlist"
            : "🤍 Add Wishlist"
        }

      </button>


    </div>

  );

}


export default ProductInfo;
