const images = import.meta.glob(
  "../assets/images/**/*",
  {
    eager: true,
    import: "default",
  }
);


const getImage = (path) => {
  return images[`../assets/images/${path}`];
};


const products = [

  // ======================
  // PHONES
  // ======================

  {
    id: 1,
    title: "iPhone 16 Pro",
    price: "$999",
    image: getImage("phones/Iphone16 Pro.webp"),
    category: "Phones",
    brand: "Apple",
    rating: 4.9,
    stock: 15,
    description:
      "Premium Apple smartphone with powerful performance and advanced camera system.",
  },


  {
    id: 2,
    title: "Samsung Galaxy S25 Ultra",
    price: "$1199",
    image: getImage("phones/Samsung Galaxy s25 Ultra.jpg"),
    category: "Phones",
    brand: "Samsung",
    rating: 4.8,
    stock: 12,
    description:
      "Flagship Samsung smartphone with AI features and professional camera.",
  },


  {
    id: 3,
    title: "Google Pixel 9 Pro",
    price: "$899",
    image: getImage("phones/google pixel 9 pro.jpg"),
    category: "Phones",
    brand: "Google",
    rating: 4.7,
    stock: 20,
    description:
      "Google smartphone with excellent photography and clean Android experience.",
  },


  {
    id: 4,
    title: "OnePlus 15",
    price: "$799",
    image: getImage("phones/OnePlus 15.jpeg"),
    category: "Phones",
    brand: "OnePlus",
    rating: 4.6,
    stock: 18,
    description:
      "High-performance smartphone with fast charging and smooth display.",
  },


  {
    id: 5,
    title: "Nothing Phone 3",
    price: "$699",
    image: getImage("phones/Nothing Phone 3.webp"),
    category: "Phones",
    brand: "Nothing",
    rating: 4.5,
    stock: 10,
    description:
      "Unique transparent design smartphone with modern features.",
  },


  // ======================
  // LAPTOPS
  // ======================

  {
    id: 6,
    title: "MacBook Pro 14",
    price: "$1999",
    image: getImage("laptops/macbook pro 14 Laptop.png"),
    category: "Laptops",
    brand: "Apple",
    rating: 4.9,
    stock: 8,
    description:
      "Professional laptop designed for developers and creators.",
  },


  {
    id: 7,
    title: "Dell Laptop",
    price: "$1099",
    image: getImage("laptops/Dell Laptop.avif"),
    category: "Laptops",
    brand: "Dell",
    rating: 4.5,
    stock: 14,
    description:
      "Reliable laptop with excellent productivity performance.",
  },


  {
    id: 8,
    title: "HP Laptop",
    price: "$899",
    image: getImage("laptops/HP Laptop.avif"),
    category: "Laptops",
    brand: "HP",
    rating: 4.4,
    stock: 16,
    description:
      "Affordable laptop suitable for work and everyday tasks.",
  },


  {
    id: 9,
    title: "Lenovo Laptop",
    price: "$999",
    image: getImage("laptops/Lenovo Laptop.avif"),
    category: "Laptops",
    brand: "Lenovo",
    rating: 4.5,
    stock: 11,
    description:
      "Business laptop with strong performance and durability.",
  },


  // ======================
  // AUDIO
  // ======================

  {
    id: 10,
    title: "Apple AirPods Pro",
    price: "$249",
    image: getImage("audio/Apple Buds.jpeg"),
    category: "Audio",
    brand: "Apple",
    rating: 4.8,
    stock: 25,
    description:
      "Wireless earbuds with noise cancellation and premium sound.",
  },


  {
    id: 11,
    title: "CMF Buds",
    price: "$59",
    image: getImage("audio/CMF buds.webp"),
    category: "Audio",
    brand: "CMF",
    rating: 4.3,
    stock: 30,
    description:
      "Affordable wireless earbuds with impressive audio quality.",
  },


  {
    id: 12,
    title: "Samsung Galaxy Buds",
    price: "$149",
    image: getImage("audio/Samsung galaxy buds.avif"),
    category: "Audio",
    brand: "Samsung",
    rating: 4.6,
    stock: 22,
    description:
      "Premium Samsung earbuds with immersive sound.",
  },


  // ======================
  // SHOES
  // ======================

  {
    id: 13,
    title: "Nike Running Shoes",
    price: "$149",
    image: getImage("shoes/Nike Shoes.avif"),
    category: "Shoes",
    brand: "Nike",
    rating: 4.7,
    stock: 40,
    description:
      "Comfortable running shoes built for daily performance.",
  },


  {
    id: 14,
    title: "Puma Sports Shoes",
    price: "$129",
    image: getImage("shoes/Puma Shoes.avif"),
    category: "Shoes",
    brand: "Puma",
    rating: 4.5,
    stock: 35,
    description:
      "Sport shoes with lightweight design and comfort.",
  },


  // ======================
  // WATCHES
  // ======================

  {
    id: 15,
    title: "Apple Watch Ultra",
    price: "$799",
    image: getImage("watches/Apple Watch Ultra.webp"),
    category: "Watches",
    brand: "Apple",
    rating: 4.9,
    stock: 10,
    description:
      "Premium smartwatch built for fitness and adventure.",
  },


  {
    id: 16,
    title: "Samsung Galaxy Watch 9",
    price: "$399",
    image: getImage("watches/Samsung Galaxy Watch9.jpg"),
    category: "Watches",
    brand: "Samsung",
    rating: 4.6,
    stock: 15,
    description:
      "Smartwatch with health tracking and modern features.",
  },


  // ======================
  // ACCESSORIES
  // ======================

  {
    id: 17,
    title: "SanDisk Storage Drive",
    price: "$79",
    image: getImage("accessories/San Disk Drive.png"),
    category: "Accessories",
    brand: "SanDisk",
    rating: 4.5,
    stock: 50,
    description:
      "Portable storage solution for your important files.",
  },


  {
    id: 18,
    title: "Power Bank",
    price: "$49",
    image: getImage("accessories/Power Bank.jpeg"),
    category: "Accessories",
    brand: "Portronics",
    rating: 4.4,
    stock: 45,
    description:
      "Fast charging portable power bank.",
  },

];


export default products;