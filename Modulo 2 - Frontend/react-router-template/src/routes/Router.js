import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/profile/:name" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
