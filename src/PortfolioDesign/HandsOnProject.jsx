/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import project1 from "../Images/project1.jpg";
import project2 from "../Images/project2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import { GoDotFill } from "react-icons/go";
import { FaArrowCircleLeft } from "react-icons/fa";

const HandsOnProject = () => {
  const projects = [
    {
      img: project1,
      review: [
        "A portfolio has been created using React Js which contains my all details.",
        "Before navigating to Portfolio, first we have to register with our Name, Email and password.",
        "All the details will be stored in our local storage.",
        "Then after login with the correct details, we can only navigate to the Portfolio page, otherwise it will alert us as Invalid details.",
        "For collecting the details of the user in array form, useState functions has been used.",
        "All the stylings are applied using Tailwind CSS.",
        "Inside the portfolio page, there is a skill section, which has been designed using React-Circular-Progressbar.",
        "There is also one Download CV button available in the Home Div, after clicking on the that button, CV will be downloaded in pdf format.",
        "In the last of the portfolio page, Contact Section is available, where anyone can send the messages and that message will be reached to me.",
        "This functionality, I have been created using Email js.",
        "And also one Logout button is present in Navbar section. So after clicking on logout, we will again navigate to Login Page.",
        "With the help of ProtectedRoute, I restricted direct access to the Portfolio page without login.",
      ],
      link: ""
    },
    {
      img: project2,
      review: [
        "An ECommerce website has been designed using ReactJs using different dependencies such as react-redux, reduxjs/toolkit, Email js, react-router-dom, Tailwind-CSS.",
        "This website collect the product details from an API to display the data.",
        "Hooks method such as useState and useEffect has been used to store the details and fetch API respectively.",
        "There is a seperate category section which helps to categorise products in different sections.",
        "Redux method has been used to add/remove the product inside the cart."
      ],
      link: "https://ecommappbyshivam.netlify.app" ,
      
    },
  ];

  const [show, setShow] = useState(false);

  const projectInfo = () => {
    setShow(!show);
  };

  return (
    <div id="projects">
      <div className="mt-10 flex justify-center md:text-4xl text-2xl font-bold cursor-pointer">
      <span className="mr-4 text-lg mt-4 text-green-500"><FaArrowCircleLeft /></span>HandsOn Projects 
      </div>

      <div className="hover:cursor-pointer md:mb-8 mb-4">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="flex justify-center items-center mt-10 rounded-md md:w-3/4 "
        >
          <div className="">
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="md:mb-6 mb-6">
                    {!show ? (
                        <div className="space-y-2 ">
                            <a href="https://ecommappbyshivam.netlify.app" className="md:ml-52 ml-8 text-blue-600 font-medium hover:text-green-600">{project.link}</a>
                            <img
                              src={project.img}
                              alt=""
                              onClick={projectInfo}
                              className=" border border-green-800 rounded-md p-2 mx-auto md:w-3/5"
                            />
                            
                        </div>
                    ) : (
                      <div onClick={projectInfo} className="flex items-center">
                        <ul className="md:w-5/6 border border-green-500 p-1  mx-auto font-medium ">
                          {Array.isArray(project.review) && project.review.map((item, i) => (
                            <li key={i} className="flex mx-6 md:w-5/6 text-[13px]"><span>
                            <GoDotFill className="mt-1 md:mb-0 mb-6" />
                          </span>{" "}{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HandsOnProject;

