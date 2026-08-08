# ShopSphere is a modern, responsive e-commerce web application built with React.js and Redux Toolkit.

The application provides a complete shopping experience including product browsing, search, category filtering, wishlist management, shopping cart functionality, checkout, and order confirmation.

---

## Live Features

### Home Page
- Modern e-commerce landing page
- Hero section with call-to-action buttons
- Featured products
- Category navigation
- Responsive layout

### Product Browsing
- Browse products across multiple categories
- Product cards with:
  - Product image
  - Product name
  - Price
  - Rating
  - Wishlist option
  - Add to Cart
  - View Details

### Product Search
- Search products by name
- Dynamic filtering based on search input
- Displays a useful empty state when no products match

### Category Filtering
Products can be filtered by:

- All
- Phones
- Laptops
- Audio
- Shoes
- Watches
- Accessories

### Product Details
- Individual product detail page
- Product image
- Product information
- Category
- Brand
- Rating
- Stock information
- Description
- Add to Cart
- Add/Remove from Wishlist

### Wishlist
- Add products to wishlist
- Remove products from wishlist
- Move products from wishlist to cart
- View product details
- Wishlist state persisted using localStorage

### Shopping Cart
- Add products to cart
- Increase quantity
- Decrease quantity
- Remove products
- Clear entire cart
- Automatic subtotal calculation
- Tax calculation
- Shipping calculation
- Final order total
- Cart state persisted using localStorage

### Checkout
- Checkout form
- Customer information
- Shipping information
- Order summary
- Order placement

### Order Confirmation
After successfully placing an order:

- Displays successful order confirmation
- Shows order details
- Clears the shopping cart
- Redirects user to the order success page

### Toast Notifications
React Toastify is used for user feedback such as:

- Product added to cart
- Product added to wishlist
- Product removed from wishlist
- Product removed from cart
- Order successfully placed

---

# Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## State Management

- Redux Toolkit
- React Redux

## Routing

- React Router DOM

## UI / Notifications

- React Toastify
- React Icons

## Build Tool

- Vite

## Data Persistence

- Browser LocalStorage

## Version Control

- Git
- GitHub

---

# Project Structure

```text
shopsphere-ecommerce/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │       ├── accessories/
│   │       ├── audio/
│   │       ├── laptops/
│   │       ├── phones/
│   │       ├── shoes/
│   │       └── watches/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── products/
│   │       ├── ProductCard.jsx
│   │       ├── ProductGrid.jsx
│   │       └── details/
│   │           └── ProductInfo.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── features/
│   │   ├── cart/
│   │   │   └── cartSlice.js
│   │   │
│   │   └── wishlist/
│   │       └── wishlistSlice.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── ProductDetails/
│   │   ├── Wishlist/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   └── OrderSuccess/
│   │
│   ├── store/
│   │   └── store.js
│   │
│   ├── styles/
│   │   ├── navbar.css
│   │   ├── home.css
│   │   ├── product.css
│   │   ├── product-details.css
│   │   ├── cart.css
│   │   ├── wishlist.css
│   │   ├── checkout.css
│   │   └── footer.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js