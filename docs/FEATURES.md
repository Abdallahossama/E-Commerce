# Features

## Product Catalog
- [x] Browse all products
- [x] View a single product's details
- [x] Add a new product
- [x] Edit an existing product
- [x] Delete a product

## User Accounts
- [x] Register a new account
- [x] Log in / log out
- [ ] Stay signed in across visits
- [ ] View / edit own profile

## Authentication & Authorization
- [x] Authentication — confirm who a user is before allowing protected actions
- [x] Roles — distinguish a regular user from an admin
- [ ] Restrict product management (add/edit/delete) to admins only
- [ ] Require login for checkout and viewing orders
- [x] Session handling via JWT access tokens with Bearer token support
- [ ] Refresh tokens (separate endpoint)
- [ ] Logout revokes the current session; support revoking all sessions (e.g. on password change)

## Shopping Cart
- [ ] Add a product to the cart
- [ ] Remove a product from the cart
- [ ] Update quantity in the cart
- [ ] Cart persists across visits (per account, or per guest session)

## Checkout & Orders
- [ ] Checkout flow — review cart, confirm, place order
- [ ] Order created on checkout
- [ ] Order history for a user
- [ ] View a single order's details / status

## UI/UX
- [ ] Theme switcher (light/dark)
- [ ] Feedback on actions (success/error notifications)
- [ ] Loading, empty, and error states handled gracefully

## Nice-to-have (later)
- [ ] Search products
- [ ] Filter/sort products (price, category)
- [ ] Pagination
- [ ] Product reviews/ratings
- [ ] Admin dashboard (orders, users overview)
