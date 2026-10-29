-- ============================================
-- SEED PRODUCTS TABLE
-- ============================================

INSERT INTO products (name, image, price, description, stock_quantity, created_at)
VALUES
  ('MacBook Pro 16"', 'https://example.com/macbook.jpg', 2499.99, 'High-performance laptop for professionals', 25, NOW()),
  ('Dell XPS 13', 'https://example.com/dell-xps.jpg', 1299.99, 'Ultra-portable Windows laptop', 40, NOW()),
  ('iPad Pro 12.9"', 'https://example.com/ipad.jpg', 1099.99, 'Powerful tablet with M2 chip', 30, NOW()),
  ('Samsung Galaxy S24', 'https://example.com/galaxy.jpg', 999.99, 'Latest Android flagship phone', 50, NOW()),
  ('iPhone 16 Pro', 'https://example.com/iphone.jpg', 1299.99, 'Latest Apple flagship phone', 60, NOW()),
  ('AirPods Pro', 'https://example.com/airpods.jpg', 249.99, 'Wireless noise-cancelling earbuds', 100, NOW()),
  ('Sony WH-1000XM5', 'https://example.com/sony-headphones.jpg', 399.99, 'Premium wireless headphones', 35, NOW()),
  ('Samsung 4K Monitor', 'https://example.com/monitor.jpg', 599.99, '32-inch 4K display', 15, NOW()),
  ('Mechanical Keyboard', 'https://example.com/keyboard.jpg', 149.99, 'RGB mechanical gaming keyboard', 80, NOW()),
  ('Logitech MX Mouse', 'https://example.com/mouse.jpg', 99.99, 'Advanced wireless mouse', 70, NOW()),
  ('USB-C Cable', 'https://example.com/cable.jpg', 19.99, '2-meter USB-C charging cable', 200, NOW()),
  ('Phone Case', 'https://example.com/case.jpg', 29.99, 'Protective iPhone case', 150, NOW()),
  ('Laptop Stand', 'https://example.com/stand.jpg', 49.99, 'Adjustable aluminum laptop stand', 45, NOW()),
  ('Desk Lamp', 'https://example.com/lamp.jpg', 79.99, 'LED desk lamp with USB charging', 55, NOW()),
  ('Webcam 4K', 'https://example.com/webcam.jpg', 129.99, '4K resolution webcam', 40, NOW()),
  ('Microphone', 'https://example.com/mic.jpg', 199.99, 'USB condenser microphone', 30, NOW()),
  ('External SSD 2TB', 'https://example.com/ssd.jpg', 249.99, 'Portable 2TB SSD storage', 60, NOW()),
  ('USB Hub', 'https://example.com/hub.jpg', 49.99, '7-port USB 3.0 hub', 90, NOW()),
  ('Power Bank', 'https://example.com/powerbank.jpg', 59.99, '20000mAh portable charger', 120, NOW()),
  ('Wireless Charger', 'https://example.com/charger.jpg', 39.99, 'Fast wireless charging pad', 100, NOW());

-- Verify
SELECT COUNT(*) as total_products FROM products;
SELECT * FROM products ORDER BY id DESC LIMIT 5;
