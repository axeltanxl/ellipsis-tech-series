import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

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
        <div className="flex justify-center flex-row">
          <div className="flex items-center font-bold text-2xl">Good health starts with what you eat.</div>
          <div className="flex justify-center items-center">
            <img
              src="https://media.istockphoto.com/id/1090509610/photo/asian-woman-in-joyful-postures-with-salad-bowl-on-the-side.jpg?s=612x612&w=0&k=20&c=kNNkd2WAYrM10CBE_1iqKCiiLO2XVuhlKiliza3mceQ="
              alt="Woman eating healthy food"
              className="object-cover w-2/3 rounded-2xl"
            ></img>
          </div>
        </div>
      </Layout>
    </React.StrictMode>
  );
}

export default App;
