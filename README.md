Sporting Goods E-Commerce Platform
Project Overview
This project is a comprehensive e-commerce website for a sporting goods business, offering a range of equipment and accessories for various sports. The platform combines customer and admin roles into a single user role, allowing users to manage both shopping and product administration tasks.

Features
1. Core Pages
Homepage: Features a carousel hero section with discount information, a featured products section, categories, and a contact form.
About Us: Information about the company, mission and vision, contact info, team members, and store location.
All Products: Displays all products with search, filter (by category, price, brand, rating), and sort (by price) functionalities.
Single Product Page: Detailed view of a product, including adding the item to the cart with stock management.
Cart Page: Shows all items in the cart with options to increase/decrease quantity, remove items, and proceed to checkout.
Checkout Page: Collects user details and offers "Cash on Delivery" and optional Stripe payment methods.
Manage Products: Admins can add, delete, and update products with RTK Query, using prefilled forms for easy editing.
2. Main Components
Navbar & Footer: Contains links to key pages and social media icons.
Featured Products: Displays the latest products using cards with details such as category, brand, price, and a rating system.
Contact Us Section: A form for customer inquiries, with optional integration using EmailJS or NodeMailer.
3. Functional Requirements
Cart Management: Ensures duplicate products cannot be added, with quantity controls up to available stock.
Stock Management: Updates product stock upon checkout.
Product Management (Admin): Allows adding, updating, and deleting products, with UI updates on all actions.
Responsive Design: Consistent branding, compatible with desktop, tablet, and mobile screens.
4. Bonus & Optional Features
RTK Query Polling: Refreshes the latest products every 30 seconds.
Animations: Adds dynamic effects on the homepage for a smoother user experience.
Stripe Integration: Optional payment processing via Stripe.
Pagination: Optional pagination on the All Products page.
Tech Stack
Frontend: React, Redux Toolkit Query, Tailwind CSS, React-Rating, React-Photo-View
Backend: Node.js, Express, MongoDB, Mongoose
Authentication: JWT, Redux Persist
Payment Processing: Cash on Delivery, Stripe (optional)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/sporting-goods.git
Install dependencies:
bash
Copy code
npm install
Set up environment variables:
Create a .env file with variables like MONGO_URI, JWT_SECRET, etc.
Start the development server:
bash
Copy code
npm run dev
Usage
Navigate through the homepage, view products, manage items in the cart, and checkout using preferred payment methods.

Project Structure
plaintext
Copy code
src/
├── components/      # Reusable UI components
├── pages/           # Main pages for the app
├── services/        # API services using RTK Query
├── utils/           # Utility functions
└── App.tsx          # Main application component
Future Enhancements
Add user reviews and ratings for products.
Implement an admin dashboard for more granular site control.
License
This project is licensed under the MIT License.

Commit Guidelines
Use Descriptive Messages: Each commit message should summarize the purpose and changes, such as Add category filter on All Products page.
Break Down Changes: Make frequent, small commits to help track individual changes.
Follow Conventional Commit Format:
feat: New features (e.g., feat: add contact form validation)
fix: Bug fixes (e.g., fix: resolve cart quantity limit issue)
style: Code formatting changes










