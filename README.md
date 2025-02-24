deploy link- https://gift-shoppp.onrender.com/
---------------------------------------------------------
Gift Shop Web Application

Overview

The Gift Shop web application is an e-commerce platform for purchasing unique and thoughtful gifts. This project is built using React.js and incorporates essential functionalities such as navigation, authentication, shopping cart management, form handling, and an image slider.

Features

Home Page: Displays a welcoming message and an image slider showcasing gift items.

About Page: Describes the mission, offerings, and uniqueness of the gift shop.

Shopping Cart: Allows users to add/remove items and proceed to checkout.

Checkout Form: Captures user details for delivery and payment.

Login System: Provides authentication and redirects users based on login status.

Folder Structure

/src
  ├── components
  │   ├── About.js
  │   ├── Cart.js
  │   ├── DetailsPage.js
  │   ├── Home.js
  │   ├── Login.js
  ├── styles
  │   ├── About.css
  │   ├── Cart.css
  │   ├── DetailsPage.css
  │   ├── Home.css
  │   ├── Login.css
  ├── App.js
  ├── index.js

  Component Details

Home.js

Functionality:

Displays a heading and a subheading.

Implements an image slider showcasing different gift products.

Methods Used:

Uses an array of image URLs.

Uses .map() to dynamically generate image elements.

About.js

Functionality:

Provides an introduction to the store.

Highlights mission, offerings, and reasons to choose the shop.

Uses images and styled components to enhance UI.

Methods Used:

Uses <div> elements to structure content.

Uses <img> components to display images dynamically.

Cart.js

Functionality:

Displays items in the cart along with their quantity and price.

Allows users to increase/decrease the quantity of an item.

Computes total cart value dynamically.

Handles checkout and authentication.

Methods Used:

Uses useNavigate() from react-router-dom for redirection.

Uses .reduce() to calculate total cart value.

Uses .map() to render cart items dynamically.

Uses localStorage.setItem() to store checkout intent.

DetailsPage.js

Functionality:

Collects user details such as name, address, and payment method.

Handles form submission and displays user-entered data in the console.

Methods Used:

Uses useState() to manage form inputs.

Uses the handleChange() function to update form fields dynamically.

Uses handleSubmit() to process form data.

Login.js

Functionality:

Implements a login system with a toggle for registration.

Authenticates users and updates authentication state.

Redirects users upon successful login.

Methods Used:

Uses useState() to track login mode.

Uses useNavigate() to handle redirection.

Uses setIsAuthenticated(true) to manage authentication state.

Technologies Used

React.js: For component-based UI development.

React Router: For navigation and authentication-based redirections.

CSS: For styling different components.


--------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
