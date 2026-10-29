import db from "../config/db";

const products = [
  {
    name: 'MacBook Pro 16"',
    image: "https://example.com/macbook.jpg",
    price: 2499.99,
    description: "High-performance laptop for professionals",
    stock_quantity: 25,
  },
  {
    name: "Dell XPS 13",
    image: "https://example.com/dell-xps.jpg",
    price: 1299.99,
    description: "Ultra-portable Windows laptop",
    stock_quantity: 40,
  },
  {
    name: 'iPad Pro 12.9"',
    image: "https://example.com/ipad.jpg",
    price: 1099.99,
    description: "Powerful tablet with M2 chip",
    stock_quantity: 30,
  },
  {
    name: "Samsung Galaxy S24",
    image: "https://example.com/galaxy.jpg",
    price: 999.99,
    description: "Latest Android flagship phone",
    stock_quantity: 50,
  },
  {
    name: "iPhone 16 Pro",
    image: "https://example.com/iphone.jpg",
    price: 1299.99,
    description: "Latest Apple flagship phone",
    stock_quantity: 60,
  },
  {
    name: "AirPods Pro",
    image: "https://example.com/airpods.jpg",
    price: 249.99,
    description: "Wireless noise-cancelling earbuds",
    stock_quantity: 100,
  },
  {
    name: "Sony WH-1000XM5",
    image: "https://example.com/sony-headphones.jpg",
    price: 399.99,
    description: "Premium wireless headphones",
    stock_quantity: 35,
  },
  {
    name: "Samsung 4K Monitor",
    image: "https://example.com/monitor.jpg",
    price: 599.99,
    description: "32-inch 4K display",
    stock_quantity: 15,
  },
  {
    name: "Mechanical Keyboard",
    image: "https://example.com/keyboard.jpg",
    price: 149.99,
    description: "RGB mechanical gaming keyboard",
    stock_quantity: 80,
  },
  {
    name: "Logitech MX Mouse",
    image: "https://example.com/mouse.jpg",
    price: 99.99,
    description: "Advanced wireless mouse",
    stock_quantity: 70,
  },
  {
    name: "USB-C Cable",
    image: "https://example.com/cable.jpg",
    price: 19.99,
    description: "2-meter USB-C charging cable",
    stock_quantity: 200,
  },
  {
    name: "Phone Case",
    image: "https://example.com/case.jpg",
    price: 29.99,
    description: "Protective iPhone case",
    stock_quantity: 150,
  },
  {
    name: "Laptop Stand",
    image: "https://example.com/stand.jpg",
    price: 49.99,
    description: "Adjustable aluminum laptop stand",
    stock_quantity: 45,
  },
  {
    name: "Desk Lamp",
    image: "https://example.com/lamp.jpg",
    price: 79.99,
    description: "LED desk lamp with USB charging",
    stock_quantity: 55,
  },
  {
    name: "Webcam 4K",
    image: "https://example.com/webcam.jpg",
    price: 129.99,
    description: "4K resolution webcam",
    stock_quantity: 40,
  },
  {
    name: "Microphone",
    image: "https://example.com/mic.jpg",
    price: 199.99,
    description: "USB condenser microphone",
    stock_quantity: 30,
  },
  {
    name: "External SSD 2TB",
    image: "https://example.com/ssd.jpg",
    price: 249.99,
    description: "Portable 2TB SSD storage",
    stock_quantity: 60,
  },
  {
    name: "USB Hub",
    image: "https://example.com/hub.jpg",
    price: 49.99,
    description: "7-port USB 3.0 hub",
    stock_quantity: 90,
  },
  {
    name: "Power Bank",
    image: "https://example.com/powerbank.jpg",
    price: 59.99,
    description: "20000mAh portable charger",
    stock_quantity: 120,
  },
  {
    name: "Wireless Charger",
    image: "https://example.com/charger.jpg",
    price: 39.99,
    description: "Fast wireless charging pad",
    stock_quantity: 100,
  },
];

export const seedProducts = async () => {
  try {
    console.log("🌱 Starting product seed...");

    for (const product of products) {
      await db.query(
        `INSERT INTO products (name, image, price, description, stock_quantity, created_at)
         VALUES ($1, $2, $3, $4, $5, NOW())`,
        [
          product.name,
          product.image,
          product.price,
          product.description,
          product.stock_quantity,
        ]
      );
    }

    const result = await db.query("SELECT COUNT(*) as count FROM products");
    console.log(`✅ Seeding complete! Total products: ${result.rows[0].count}`);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    throw error;
  }
};
