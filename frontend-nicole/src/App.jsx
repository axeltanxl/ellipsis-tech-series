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
        <div className="flex justify-center xs:flex-col sm:flex-row xs:my-8 md:my-10 xs:mx-8 sm:mx-10 md:mx-16">
          <div className="xs:hidden sm:flex items-center mx-4 sm:w-1/2 lg:w-1/4 font-bold sm:text-2xl lg:text-4xl xl:text-5xl">
            Good health starts with what you eat.
          </div>
          <div className="flex justify-center items-center ml-10 sm:mt-10">
            <div className="flex justify-start xs:w-3/4 sm:w-1/2 h-full mt-10 xs:pb-10 sm:pb-0 bg-yellow-500 rounded-2xl">
              <img
                src="https://media.istockphoto.com/id/1090509610/photo/asian-woman-in-joyful-postures-with-salad-bowl-on-the-side.jpg?s=612x612&w=0&k=20&c=kNNkd2WAYrM10CBE_1iqKCiiLO2XVuhlKiliza3mceQ="
                alt="Woman eating healthy food"
                className="object-cover object-left-top w-full h-full -mt-10 -ml-10 rounded-2xl z-10"
              ></img>
            </div>
          </div>
          <div className="sm:hidden flex justify-center text-center m-4 ml-14 w-3/4 font-bold text-2xl">
            Good health starts with what you eat.
          </div>
        </div>
      </Layout>
    </React.StrictMode>
  );
}

export default App;
