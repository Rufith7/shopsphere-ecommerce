import iphone from "../assets/images/iphone.png";
import macbook from "../assets/images/macbook.webp";
import airpods from "../assets/images/airpods.jpg";
import shoes from "../assets/images/shoes.png";

const products = [
  {
    id: 1,
    title: "iPhone 16 Pro",
    price: "$999",
    image: iphone,
    category: "Phones",
    brand: "Apple",
    rating: 4.9,
    stock: 15,
    description:
      "Experience the latest Apple A18 Pro chip, stunning OLED display, advanced camera system, and all-day battery life.",
  },
  {
    id: 2,
    title: "MacBook Pro",
    price: "$1999",
    image: macbook,
    category: "Laptops",
    brand: "Apple",
    rating: 4.8,
    stock: 8,
    description:
      "Powerful laptop designed for developers, creators, and professionals with exceptional performance and battery life.",
  },
  {
    id: 3,
    title: "AirPods Pro",
    price: "$249",
    image: airpods,
    category: "Audio",
    brand: "Apple",
    rating: 4.7,
    stock: 25,
    description:
      "Premium wireless earbuds with Active Noise Cancellation, Transparency Mode, and immersive spatial audio.",
  },
  {
    id: 4,
    title: "Nike Shoes",
    price: "$149",
    image: shoes,
    category: "Shoes",
    brand: "Nike",
    rating: 4.6,
    stock: 30,
    description:
      "Comfortable running shoes featuring lightweight cushioning and breathable materials for everyday performance.",
  },
];

export default products;