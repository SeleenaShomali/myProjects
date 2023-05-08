import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//Done TODO step 4 : install react-router-dom from npm

// Done TODO step 5: using React Router's BrowserRouter component to wrap around the main App component in a React application.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
