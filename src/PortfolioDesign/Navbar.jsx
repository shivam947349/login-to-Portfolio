/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { useState } from "react";
import logo from "./logo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed t-0 l-0 r-o bg-white z-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={logo} className="h-12 w-12 rounded-full" />
            <h1 className="font-semibold text-lg cursor-pointer">
              Shivam <span className=" text-green-600">Anand</span>
              <p className="text-sm">Frontend Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}

          <div>
            <ul className="hidden md:flex space-x-8">
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="https://newportfoliocv.netlify.app/#home">Home</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="https://newportfoliocv.netlify.app/#experience">Experience</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="https://newportfoliocv.netlify.app/#skills">Skills</a>{" "}
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="https://newportfoliocv.netlify.app/#projects">Projects</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="https://newportfoliocv.netlify.app/#contact">Contact</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <button
                  type="submit"
                  className="bg-green-600 w-24 h-8 justify-center rounded-lg"
                  onClick={handleLogOut}
                >
                  <span className="glyphicon glyphicon-log-in"> Logout</span>
                </button>
              </li>
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {!menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}

        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-auto items-center justify-center space-y-4">
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="http:#home">Home</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="http:#experience">Experience</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="http:#skills">Skills</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="http:#projects">Projects</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <a href="http:#contact">Contact</a>
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                <button
                  type="submit"
                  className="bg-green-600 w-24 h-8 justify-center rounded-lg"
                  onClick={handleLogOut}
                >
                  <span className="glyphicon glyphicon-log-in"> Logout</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
