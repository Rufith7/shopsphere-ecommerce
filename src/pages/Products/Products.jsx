import { useState } from "react";

import products from "../../data/products";
import ProductGrid from "../../components/products/ProductGrid";


function Products() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sortBy, setSortBy] = useState("default");



  let filteredProducts = products.filter((product) => {


    const matchesSearch =
      product.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      );


    const matchesCategory =
      category === "All" ||
      product.category === category;



    return (
      matchesSearch &&
      matchesCategory
    );

  });



  filteredProducts = [...filteredProducts].sort(
    (a,b)=>{


      const priceA =
        Number(
          a.price.replace("$","")
        );


      const priceB =
        Number(
          b.price.replace("$","")
        );


      switch(sortBy){


        case "low-high":

          return priceA - priceB;



        case "high-low":

          return priceB - priceA;



        case "a-z":

          return a.title.localeCompare(
            b.title
          );



        case "z-a":

          return b.title.localeCompare(
            a.title
          );



        default:

          return 0;

      }

    }
  );



  const categories = [
    "All",
    "Phones",
    "Laptops",
    "Audio",
    "Shoes",
    "Watches",
    "Accessories",
  ];



  return (

    <section className="products-page">


      <h1>
        All Products
      </h1>



      <div className="category-buttons">


        {
          categories.map((cat)=>(

            <button

              key={cat}

              className={
                category === cat
                ? "active-category"
                : ""
              }


              onClick={()=>
                setCategory(cat)
              }

            >

              {cat}

            </button>

          ))
        }


      </div>




      <div className="product-controls">


        <input

          type="text"

          placeholder="Search products..."

          value={search}

          onChange={(e)=>
            setSearch(
              e.target.value
            )
          }

        />



        <select

          value={sortBy}

          onChange={(e)=>
            setSortBy(
              e.target.value
            )
          }

        >

          <option value="default">
            Default
          </option>


          <option value="low-high">
            Price Low to High
          </option>


          <option value="high-low">
            Price High to Low
          </option>


          <option value="a-z">
            Name A-Z
          </option>


          <option value="z-a">
            Name Z-A
          </option>


        </select>


      </div>




      {
        filteredProducts.length === 0 ? (

          <h2>
            No Products Found
          </h2>

        ) : (

          <ProductGrid
            products={filteredProducts}
          />

        )
      }



    </section>

  );

}


export default Products;