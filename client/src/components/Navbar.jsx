import React, { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { toast } from "react-hot-toast";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate({ duration: 100 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const checkLoginStatus = () => {
    setIsLoggedIn(localStorage.getItem("jwt"));
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <nav className="mx-auto rounded-lg border border-gray-200 bg-gray-50 py-3 px-5 shadow">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-x-5 md:flex-nowrap">
        <div className="w-full flex-grow justify-between gap-x-2 md:flex">
          <div className="flex justify-between">
            <div className="flex gap-x-3">
              <Link
                to="/"
                onClick={() => {
                  toast.success("Home page");
                }}
                className="block self-center whitespace-nowrap text-xl font-semibold text-blue-700 hover:cursor-alias"
              >
                NADIUM
              </Link>
            </div>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-1 py-1 text-xl leading-none text-gray-700 outline-none hover:bg-gray-100 focus:outline-none md:hidden"
              type="button"
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
            >
              {navbarOpen ? (
                <HiXMark className="h-7 w-7" />
              ) : (
                <HiBars3 className="h-7 w-7" />
              )}
            </button>
          </div>
          <div ref={parent}>
            {(windowSize[0] > 768 || navbarOpen) && isLoggedIn ? (
              <ul className="ml-auto mt-2 flex list-none flex-col gap-y-1 md:mt-0 md:flex-row md:gap-x-5">
                <li className="">
                  <Link
                    to="/food"
                    onClick={() => {
                      toast.success("Food tracking page");
                    }}
                    className="flex h-full w-full cursor-alias items-center justify-end rounded py-2 px-3 text-gray-700 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                  >
                    Food
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/nearby"
                    onClick={() => {
                      toast.success("Nearby page");
                    }}
                    className="flex h-full w-full cursor-alias items-center justify-end rounded py-2 pl-3 pr-4 text-gray-700 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                  >
                    Nearby
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    onClick={() => {
                      toast.success("Profile Page");
                    }}
                    className="flex h-full w-full cursor-alias items-center justify-end rounded py-2 pl-3 pr-4 text-gray-700 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="ml-auto mt-2 flex list-none flex-col gap-y-1 md:mt-0 md:flex-row md:gap-x-5">
                <li className="">
                  <Link
                    to="/login"
                    onClick={() => {
                      toast.success("Login Page");
                    }}
                    className="flex h-full w-full cursor-alias items-center justify-end rounded py-2 pl-3 pr-4 text-gray-700 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
