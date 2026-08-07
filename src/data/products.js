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
  // =========================
  // PHONES
  // =========================

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
      "Premium Apple smartphone with a modern design and powerful performance.",
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
      "Samsung flagship smartphone designed for premium everyday performance.",
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
      "Google Pixel smartphone with a clean design and photography-focused experience.",
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
      "High-performance OnePlus smartphone with a smooth and modern experience.",
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
      "Distinctive Nothing smartphone featuring a unique minimalist design.",
  },
  {
    id: 6,
    title: "OnePlus 15R",
    price: "$649",
    image: getImage("phones/OnePlus 15r.webp"),
    category: "Phones",
    brand: "OnePlus",
    rating: 4.5,
    stock: 22,
    description:
      "Modern OnePlus smartphone focused on everyday performance and value.",
  },
  {
    id: 7,
    title: "Samsung Galaxy Z Fold8",
    price: "$1799",
    image: getImage("phones/Samsung Galaxy Z Fold8.png"),
    category: "Phones",
    brand: "Samsung",
    rating: 4.8,
    stock: 7,
    description:
      "Premium foldable smartphone with an innovative large-screen design.",
  },
  {
    id: 8,
    title: "Nothing Phone 3a",
    price: "$499",
    image: getImage("phones/Nothing-Phone-3a.webp"),
    category: "Phones",
    brand: "Nothing",
    rating: 4.4,
    stock: 19,
    description:
      "Stylish Nothing smartphone designed for everyday users.",
  },
  {
    id: 9,
    title: "Google Pixel 7 Pro",
    price: "$599",
    image: getImage("phones/google pixel 7 pro.webp"),
    category: "Phones",
    brand: "Google",
    rating: 4.5,
    stock: 14,
    description:
      "Google smartphone with a premium design and photography-focused experience.",
  },
  {
    id: 10,
    title: "iPhone 14 Pro",
    price: "$749",
    image: getImage("phones/iphone 14 Pro.webp"),
    category: "Phones",
    brand: "Apple",
    rating: 4.7,
    stock: 11,
    description:
      "Apple smartphone offering a premium design and reliable performance.",
  },
  {
    id: 11,
    title: "Google Pixel 9 Pro",
    price: "$899",
    image: getImage("phones/google pixel 9 pro.jpg"),
    category: "Phones",
    brand: "Google",
    rating: 4.7,
    stock: 20,
    description:
      "Premium Google smartphone with a modern design.",
  },
  {
    id: 12,
    title: "iPhone 15 Pro",
    price: "$899",
    image: getImage("phones/iphone 15 Pro.jpg"),
    category: "Phones",
    brand: "Apple",
    rating: 4.8,
    stock: 13,
    description:
      "Premium Apple smartphone with a refined design and strong performance.",
  },
  {
    id: 13,
    title: "Samsung Galaxy S25",
    price: "$899",
    image: getImage("phones/Samsung Galaxy s25.png"),
    category: "Phones",
    brand: "Samsung",
    rating: 4.7,
    stock: 16,
    description:
      "Samsung smartphone combining modern design and everyday performance.",
  },
  {
    id: 14,
    title: "OnePlus 13",
    price: "$699",
    image: getImage("phones/OnePlus 13.jpg"),
    category: "Phones",
    brand: "OnePlus",
    rating: 4.6,
    stock: 17,
    description:
      "Powerful OnePlus smartphone designed for smooth daily use.",
  },
  {
    id: 15,
    title: "Google Pixel 8 Pro",
    price: "$799",
    image: getImage("phones/Google Pixel 8 Pro.jpg"),
    category: "Phones",
    brand: "Google",
    rating: 4.6,
    stock: 12,
    description:
      "Premium Pixel smartphone with a clean design and excellent usability.",
  },
  {
    id: 16,
    title: "OnePlus 14",
    price: "$749",
    image: getImage("phones/OnePlus 14.jpeg"),
    category: "Phones",
    brand: "OnePlus",
    rating: 4.5,
    stock: 21,
    description:
      "Modern OnePlus smartphone built for everyday performance.",
  },

  // =========================
  // LAPTOPS
  // =========================

  {
    id: 17,
    title: "MacBook Pro 14",
    price: "$1999",
    image: getImage("laptops/macbook pro 14 Laptop.png"),
    category: "Laptops",
    brand: "Apple",
    rating: 4.9,
    stock: 8,
    description:
      "Professional Apple laptop designed for developers, creators and demanding workloads.",
  },
  {
    id: 18,
    title: "Dell Laptop",
    price: "$1099",
    image: getImage("laptops/Dell Laptop.avif"),
    category: "Laptops",
    brand: "Dell",
    rating: 4.5,
    stock: 14,
    description:
      "Reliable Dell laptop designed for productivity and everyday computing.",
  },
  {
    id: 19,
    title: "HP Laptop",
    price: "$899",
    image: getImage("laptops/HP Laptop.avif"),
    category: "Laptops",
    brand: "HP",
    rating: 4.4,
    stock: 16,
    description:
      "Practical HP laptop for work, study and everyday tasks.",
  },
  {
    id: 20,
    title: "Lenovo Laptop",
    price: "$999",
    image: getImage("laptops/Lenovo Laptop.avif"),
    category: "Laptops",
    brand: "Lenovo",
    rating: 4.5,
    stock: 11,
    description:
      "Lenovo laptop designed for productivity and professional use.",
  },
  {
    id: 21,
    title: "Motorola Laptop",
    price: "$799",
    image: getImage("laptops/Motorola Laptop .webp"),
    category: "Laptops",
    brand: "Motorola",
    rating: 4.3,
    stock: 13,
    description:
      "Modern laptop suitable for everyday productivity and entertainment.",
  },
  {
    id: 22,
    title: "Samsung Galaxy Laptop",
    price: "$1199",
    image: getImage("laptops/Samsung Galaxy Laptop.webp"),
    category: "Laptops",
    brand: "Samsung",
    rating: 4.6,
    stock: 10,
    description:
      "Samsung laptop with a modern design for work and everyday computing.",
  },
  {
    id: 23,
    title: "Realme Laptop",
    price: "$699",
    image: getImage("laptops/Realme Laptop.avif"),
    category: "Laptops",
    brand: "Realme",
    rating: 4.2,
    stock: 18,
    description:
      "Affordable Realme laptop designed for everyday computing.",
  },

  // =========================
  // AUDIO
  // =========================

  {
    id: 24,
    title: "Apple AirPods Pro",
    price: "$249",
    image: getImage("audio/Apple Buds.jpeg"),
    category: "Audio",
    brand: "Apple",
    rating: 4.8,
    stock: 25,
    description:
      "Premium Apple wireless earbuds designed for an immersive listening experience.",
  },
  {
    id: 25,
    title: "CMF Buds",
    price: "$59",
    image: getImage("audio/CMF buds.webp"),
    category: "Audio",
    brand: "CMF",
    rating: 4.3,
    stock: 30,
    description:
      "Affordable wireless earbuds with a compact and stylish design.",
  },
  {
    id: 26,
    title: "Samsung Galaxy Buds",
    price: "$149",
    image: getImage("audio/Samsung galaxy buds.avif"),
    category: "Audio",
    brand: "Samsung",
    rating: 4.6,
    stock: 22,
    description:
      "Samsung wireless earbuds designed for everyday listening.",
  },
  {
    id: 27,
    title: "OnePlus Buds",
    price: "$79",
    image: getImage("audio/Oneplus Buds.avif"),
    category: "Audio",
    brand: "OnePlus",
    rating: 4.4,
    stock: 28,
    description:
      "Wireless earbuds designed for convenient everyday listening.",
  },
  {
    id: 28,
    title: "Boat Buds",
    price: "$39",
    image: getImage("audio/Boat buds.avif"),
    category: "Audio",
    brand: "Boat",
    rating: 4.2,
    stock: 35,
    description:
      "Budget-friendly wireless earbuds for everyday entertainment.",
  },
  {
    id: 29,
    title: "Noise Buds",
    price: "$49",
    image: getImage("audio/Noise buds .avif"),
    category: "Audio",
    brand: "Noise",
    rating: 4.3,
    stock: 31,
    description:
      "Compact wireless earbuds designed for everyday use.",
  },
  {
    id: 30,
    title: "Moto Buds Plus",
    price: "$89",
    image: getImage("audio/Moto Buds Plus.webp"),
    category: "Audio",
    brand: "Motorola",
    rating: 4.4,
    stock: 20,
    description:
      "Wireless earbuds with a modern design for daily listening.",
  },
  {
    id: 31,
    title: "Realme Buds",
    price: "$45",
    image: getImage("audio/Realme Buds.webp"),
    category: "Audio",
    brand: "Realme",
    rating: 4.2,
    stock: 29,
    description:
      "Affordable wireless earbuds designed for everyday entertainment.",
  },

  // =========================
  // SHOES
  // =========================

  {
    id: 32,
    title: "Nike Running Shoes",
    price: "$149",
    image: getImage("shoes/Nike Shoes.avif"),
    category: "Shoes",
    brand: "Nike",
    rating: 4.7,
    stock: 40,
    description:
      "Sport-inspired footwear designed for comfort and everyday movement.",
  },
  {
    id: 33,
    title: "Puma Sports Shoes",
    price: "$129",
    image: getImage("shoes/Puma Shoes.avif"),
    category: "Shoes",
    brand: "Puma",
    rating: 4.5,
    stock: 35,
    description:
      "Lightweight sports footwear designed for active everyday use.",
  },
  {
    id: 34,
    title: "Red Tape Shoes",
    price: "$99",
    image: getImage("shoes/Red Tape Shoes.jpg"),
    category: "Shoes",
    brand: "Red Tape",
    rating: 4.4,
    stock: 27,
    description:
      "Modern footwear combining casual style and everyday comfort.",
  },
  {
    id: 35,
    title: "U.S. Polo Shoes",
    price: "$109",
    image: getImage("shoes/U.s Polo .webp"),
    category: "Shoes",
    brand: "U.S. Polo",
    rating: 4.3,
    stock: 24,
    description:
      "Casual footwear designed for everyday style and comfort.",
  },
  {
    id: 36,
    title: "Lumer Shoes",
    price: "$89",
    image: getImage("shoes/Lumer Shoes.webp"),
    category: "Shoes",
    brand: "Lumer",
    rating: 4.2,
    stock: 22,
    description:
      "Comfortable casual footwear for everyday use.",
  },

  // =========================
  // WATCHES
  // =========================

  {
    id: 37,
    title: "Apple Watch Ultra",
    price: "$799",
    image: getImage("watches/Apple Watch Ultra.webp"),
    category: "Watches",
    brand: "Apple",
    rating: 4.9,
    stock: 10,
    description:
      "Premium Apple smartwatch with a rugged modern design.",
  },
  {
    id: 38,
    title: "Apple Watch",
    price: "$399",
    image: getImage("watches/Apple Watch .jpeg"),
    category: "Watches",
    brand: "Apple",
    rating: 4.7,
    stock: 18,
    description:
      "Apple smartwatch designed for everyday connectivity and convenience.",
  },
  {
    id: 39,
    title: "Samsung Galaxy Watch 9",
    price: "$399",
    image: getImage("watches/Samsung Galaxy Watch9.jpg"),
    category: "Watches",
    brand: "Samsung",
    rating: 4.6,
    stock: 15,
    description:
      "Samsung smartwatch with a modern design for everyday use.",
  },
  {
    id: 40,
    title: "Noise Watch",
    price: "$99",
    image: getImage("watches/Noise Watch.jpg"),
    category: "Watches",
    brand: "Noise",
    rating: 4.3,
    stock: 26,
    description:
      "Affordable smartwatch designed for everyday users.",
  },
  {
    id: 41,
    title: "Titan Watch",
    price: "$199",
    image: getImage("watches/Titan Watch.webp"),
    category: "Watches",
    brand: "Titan",
    rating: 4.5,
    stock: 17,
    description:
      "Stylish watch designed for everyday wear.",
  },
  {
    id: 42,
    title: "Google Pixel Watch",
    price: "$349",
    image: getImage("watches/Google-Pixel-Watch.jpg"),
    category: "Watches",
    brand: "Google",
    rating: 4.5,
    stock: 13,
    description:
      "Modern Google smartwatch with a clean and premium appearance.",
  },

  // =========================
  // ACCESSORIES
  // =========================

  {
    id: 43,
    title: "SanDisk Storage Drive",
    price: "$79",
    image: getImage("accessories/San Disk Drive.png"),
    category: "Accessories",
    brand: "SanDisk",
    rating: 4.5,
    stock: 50,
    description:
      "Portable storage accessory for keeping important files available.",
  },
  {
    id: 44,
    title: "Travel Umbrella",
    price: "$25",
    image: getImage("accessories/Umbrella .webp"),
    category: "Accessories",
    brand: "ShopSphere",
    rating: 4.2,
    stock: 35,
    description:
      "Compact everyday accessory designed for convenient travel.",
  },
  {
    id: 45,
    title: "iPhone Adapter",
    price: "$39",
    image: getImage("accessories/Iphone Adpoter.webp"),
    category: "Accessories",
    brand: "Apple",
    rating: 4.4,
    stock: 40,
    description:
      "Compact charging accessory designed for compatible Apple devices.",
  },
  {
    id: 46,
    title: "Portronics Adapter",
    price: "$50",
    image: getImage("accessories/Portronics Adaptor .webp"),
    category: "Accessories",
    brand: "Portronics",
    rating: 4.4,
    stock: 45,
    description:
      "Compact adapter designed for convenient everyday charging.",
  },
  {
    id: 47,
    title: "Type-C Cable",
    price: "$19",
    image: getImage("accessories/Type C Cable.webp"),
    category: "Accessories",
    brand: "ShopSphere",
    rating: 4.3,
    stock: 60,
    description:
      "Everyday Type-C cable for compatible charging and connectivity.",
  },
  {
    id: 48,
    title: "Power Bank",
    price: "$49",
    image: getImage("accessories/Power Bank.jpeg"),
    category: "Accessories",
    brand: "Portronics",
    rating: 4.4,
    stock: 45,
    description:
      "Portable charging accessory designed for everyday convenience.",
  },
];

export default products;