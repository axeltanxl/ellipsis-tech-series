import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    setIsLoggedIn(localStorage.getItem("token"));
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <React.StrictMode>
      <Layout>
        <Home />
      </Layout>
    </React.StrictMode>
  );
}

export default App;
