import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home";
import NavBar from "./components/navBar";
import { Routes, Route } from "react-router";
import ProductDetailsPage from "./page/productDetails";
import AboutPage from "./page/about/About";
import LoginPage from "./page/Login";
import ProfilePage from "./page/Profile";
import ProtectRoute from "./components/protectRouter";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";

// Done TODO step 6 : create about page to using in route
//  Done TODO step 7 : define Routes , for home page  , about page , product with :id

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/Login" element={<LoginPage />} />

            <Route
              path="/Profile"
              element={
                <div>
                  <ProtectRoute>
                    <ProfilePage />
                  </ProtectRoute>
                </div>
              }
            />

            <Route
              path="/product/:id"
              element={
                <div>
                  {" "}
                  <ProductDetailsPage />{" "}
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
