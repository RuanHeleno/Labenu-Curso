import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Details, Error, Home, PokedexPage, SignUp, Login } from "../pages";

import CapturedOrRemoved from "../components/CapturedOrRemoved";

const AppRoutes = () => {
  const Private = ({ children }) => {
    return !localStorage.getItem("token") ? <Navigate to="/login" /> : children;
  };

  return (
    <>
      <CapturedOrRemoved />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="pokedex"
            element={
              <PokedexPage />
              /* <Private>
                <PokedexPage />
              </Private> */
            }
          />
          <Route path="pokemon/:id" element={<Details />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
