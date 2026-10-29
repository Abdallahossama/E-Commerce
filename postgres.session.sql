

-- INSERT INTO users (name, email, password_hash, role) 
-- VALUES ('ahmed', 'ahmed@example.com', 'hashed_password_here', 'admin');
SELECT * FROM products where
 price >= 100 AND 
 stock_quantity > 50 AND created_at > '2026-10-27'::timestamp
  ORDER BY created_at ASC;



