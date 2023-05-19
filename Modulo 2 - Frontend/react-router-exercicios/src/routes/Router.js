import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";

import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile/:name" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
