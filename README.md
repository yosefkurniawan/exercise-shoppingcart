# E-Commerce Shopping Cart Exam Task

## Objective

Build a simple e-commerce shopping cart application using JavaScript, React, and Redux. The application should allow users to browse a list of products, add products to their cart, and manage the cart's contents.

## Requirements

### 1. Product List Page
- Display a list of products with the following information:
  - Product Name
  - Product Price
  - Add to Cart Button

- Fetch the list of products from a mock API (you can use a static JSON file or a service like `jsonplaceholder.typicode.com`).

- Implement pagination if there are more than 10 products.

### 2. Shopping Cart
- Create a shopping cart component that:
  - Displays all products added to the cart.
  - Shows the quantity of each product in the cart.
  - Allows users to increase or decrease the quantity of each product.
  - Allows users to remove a product from the cart.
  - Displays the total price of all items in the cart.
  - Persists the cart's state between page reloads (use `localStorage` for this).

### 3. Redux State Management
- Implement the following actions in Redux:
  - `ADD_TO_CART(product)`: Adds a product to the cart.
  - `REMOVE_FROM_CART(productId)`: Removes a product from the cart.
  - `INCREASE_QUANTITY(productId)`: Increases the quantity of a product in the cart.
  - `DECREASE_QUANTITY(productId)`: Decreases the quantity of a product in the cart.
  - `CLEAR_CART()`: Empties the cart.

- Create reducers to handle the above actions and manage the cart's state.
- Use selectors to compute derived data, like the total price of items in the cart.

### 4. UI/UX Considerations
- The application should be responsive and mobile-friendly.
- Provide visual feedback when products are added to or removed from the cart.
- Implement a confirmation dialog when removing items from the cart.

### 5. Bonus Tasks (Optional)
- Implement search functionality to filter products by name.
- Add a product details page accessible by clicking on a product in the list.
- Implement a checkout page that summarizes the cart's contents and asks for user information (no need to process payments).

## Evaluation Criteria
- **Code Quality:** Clean, readable, and well-documented code.
- **Component Structure:** Proper use of React components and hooks.
- **State Management:** Effective use of Redux for managing the application state.
- **User Experience:** Intuitive and responsive user interface.
- **Functionality:** The application meets the requirements and handles edge cases (e.g., adding the same product multiple times, managing cart state on page reload).

## Submission Instructions
- Provide a link to a GitHub repository containing your code.
- Include a `README.md` file with instructions on how to set up and run your application.
- Mention any additional libraries or tools you used and explain your reasoning.

## Result
![image](https://github.com/user-attachments/assets/1b7f0f65-ab23-4acf-9de0-85c2d2fde229)
