# GSG Shop
In this example, we are building an e-commerce store using React. We will be working with the following concepts:
* useState
* useEffect
* Props
* get Data from API `https://fakestoreapi.com/`
* Router and Params:

> Params in React Router allow you to define dynamic segments in a URL that can be used to retrieve data from a server or database. For example, if you have a route for a product page like /products/:id, you can use the :id parameter to fetch data for the specific product.

* Context for Login:
Context is a feature in React that allows you to pass data down the component tree without having to pass props down through each level. You can create a context for login to store user authentication information and protect certain routes that require authentication.


# Todo List
1. in Home Page do step 1 and 2
2. in ProductCard Component do step 3
3. in index.js do step 4 and 5 , use Terminal to install react-router-dom from npm.
4. in App.js do step 6 and 7
5. in navBar do step 8 
6. in ProductCard Component do step 9
7. in ProductDetails do step 10 , 11 , 12


# steps
   * Step 1 : get all product from `https://fakestoreapi.com/`
   * Step 2 : using ProductCard to display all products by using map
   * step 3 : using props to  get product data
   * step 4 : install react-router-dom from npm
   * step 5: using React Router's `BrowserRouter` component to wrap around the main App component in a React application.
   * step 6 : create `AboutPage` in page folder to using in route
   * step 7 : define Routes , for home page  , about page , product with `:id`
   * step 8 : cerate  Link for pages
   * step 9 : cerate  Link for product details Pages with id of product
   * step 10 : using useParams to get id for product
   * step 11 : get  product by id `Get a single product` from `https://fakestoreapi.com/`
   * step 12 : build Product Details Page
