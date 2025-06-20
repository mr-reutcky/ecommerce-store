# Remu - E-Commerce Store

**Remu** is a fully functional e-commerce frontend built with React. It simulates a modern online store experience by integrating the [Fake Store API](https://fakestoreapi.com) and showcases smooth page transitions with **Framer Motion**.

## Features

- Product listing with dynamic details
- Add to cart and cart drawer functionality
- Cart page with quantity and total pricing
- Smooth page transitions using Framer Motion
- Responsive layout and clean UI design
- Scroll-to-section navigation
- 404 page for unknown routes

## Tech Stack

- **React**
- **React Router DOM**
- **Framer Motion**
- **Fake Store API**
- **CSS Modules / Custom CSS**

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mr-reutcky/ecommerce-store.git
   cd ecommerce-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open your browser and go to:  
   `http://localhost:3000`

## Project Structure

```
src/
├── components/       # Reusable UI components (Header, Footer, CartDrawer, etc.)
├── pages/            # Route pages (Home, About, Product, CartPage, 404)
├── css/              # Stylesheets
├── utils/            # Reusable utility functions (e.g., animations)
└── App.js            # Main application with routes and layout
```

## Page Transitions

Framer Motion is used to animate between pages:

```js
<motion.div
  variants={pageTransition}
  initial="initial"
  animate="animate"
  exit="exit"
/>
```

Routes are wrapped in `<AnimatePresence>` for exit animations to work.

## Fake Store API

All product data is fetched from the open Fake Store API:
- Products: `https://fakestoreapi.com/products`
- Product by ID: `https://fakestoreapi.com/products/:id`

No authentication or backend required.

## Future Improvements

- Checkout functionality
- Filtering by category
- Authentication
- Persistent cart (localStorage or context)

## Credits

- [Fake Store API](https://fakestoreapi.com) for free product data
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations

---

**Developed by [Samuel Reutcky](https://github.com/mr-reutcky)**  
MITT Software Development Student  
