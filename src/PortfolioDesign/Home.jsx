/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { PiFileSql } from "react-icons/pi";
import { SiJira } from "react-icons/si";

import { ReactTyped } from "react-typed";
import logo from "./logo.jpg";
import Resume from "./Shivam_Anand_CV.pdf";

const Home = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
        id="home"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mt-24 mt-12 space-y-1 order-2 md:order-1">
            <span>
              Hi{" "}
              <span className="text-green-600 font-semibold">
                {userName.name} !
              </span>{" "}
              Welcome to my Portfolio
            </span>
            <div className="flex  space-x-1 text-2xl md:text-3xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-600 font-bold"> Developer</span> */}
              <ReactTyped
                className="text-red-600 font-semibold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, My name is Shivam Anand. I'm a Frontend Web Developer and I'm
              very passionate and dedicated to my work. With 3 years of
              experience as IT professional where I have spent 2 years in Manual
              Testing for API and UI design, and 1 years as a Frontend
              Developer. I have acquired the necessary skills and knowledge
              which helps in the success of your projects. As well as I am keen
              learner, such that I can able to learn the new skills and
              technology in a short time.{" "}
            </p>
            <br />
            {/* Social media icons */}

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h1 className="font-semibold">Available On</h1>
                <ul className="flex space-x-5 mt-2">
                  <li>
                    <FaFacebook className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
              <div className="mt-4 md:mt-0 ">
                <h1 className="font-semibold">Currently Working On</h1>
                <ul className="flex space-x-5 mt-2">
                  <li>
                    <FaHtml5 className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaCss3Alt className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaReact className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <PiFileSql className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <SiJira className="text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
              <a href={Resume} download>
                <button className="bg-green-600 p-2 rounded-md shadow-green-500 hover:bg-green-400 md:mt-0 mt-5 ">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">
            <img
              src={logo}
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
