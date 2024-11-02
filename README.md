# PRIMEFIT SPORTS
# Sporting Goods E-Commerce Website

This project builds a comprehensive e-commerce website for a sporting goods business, offering a wide range of equipment and accessories for various sports. It provides a user-friendly shopping experience with both customer and admin functionalities.

# Getting Started
## Clone the Repository:
Bash
git clone <https://github.com/Masud-Rahman22/PrimeFit-Sports-Client.git>
Use code with caution.

## Install Dependencies:
Bash
cd <PrimeFit-Sports-Client>
# npm install   

Use code with caution.

# Prerequisites
Node.js and npm (or yarn)
A code editor of your choice (e.g., VS Code, WebStorm)
A basic understanding of React, JavaScript, HTML, and CSS
Project Structure
src/
├── components/  // Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   // ... other components
├── pages/  // Main application pages
│   ├── Home.jsx
│   ├── AboutUs.jsx
│   ├── Products.jsx
│   ├── SingleProduct.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── ManageProducts.jsx
├── utils/  // Utility functions and helpers
│   ├── api.js  // API calls for backend interaction
│   // ... other utils
├── styles/  // Global styles and component styles
│   ├── global.css
│   └── components/  // Component-specific styles
│       ├── Navbar.css
│       // ... other styles
└── App.jsx  // Main application entry point
# Features
## User Interface:
Responsive design for optimal viewing across devices (desktop, tablet, mobile)
Consistent color scheme and branding reflective of sporting goods
User-friendly navigation through navbar and footer
## Product Management:
Manage products (add, update, delete) using RTK Query
Pre-populated product data for easier editing
Informative modal/toast messages for delete, update, and create actions
Real-time UI updates reflecting changes
## Customer Experience:
## Homepage:
Hero section featuring a carousel with discount information
Featured products section showcasing the latest offerings
Category display for filtering products
Contact us form
## Product Listing:
Search functionality for specific products (by name)
Filter products by various criteria (sport, price, brand, rating)
Sorting options (price ascending/descending)
Clear filter button to reset all filters
Visually appealing and informative product cards
## Single Product:
Detailed view with name, description, category, brand, stock, rating, image, and price
Add to cart functionality
## Cart:
View all added products with quantity options
Increase/decrease product quantity and remove items
Total price calculation with 15% VAT
## Checkout:
User details collection (name, email, phone, delivery address)
Payment methods:
Cash on delivery

## Backend Integration
Integrate the backend using (TypeScript, node.js, mongoose)
Start the development server:
### Bash
### npm start
### Use code with caution.

# Access the website: http://localhost:3000 (default port, may differ)
Contribution
## Feel free to contribute to this project by:

### Forking the repository
### Creating feature branches for your changes
### Submitting pull requests for code review and merging