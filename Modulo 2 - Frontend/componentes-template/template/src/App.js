import React from "react";
import "./App.css";
import Garagem from "./Components/Garagem";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>
        <Garagem />
      </h1>
      <Footer />
    </div>
  );
}
