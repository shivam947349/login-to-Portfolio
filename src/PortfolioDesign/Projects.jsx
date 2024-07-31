/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import project1 from "../Images/project1.jpg";
import project2 from "../Images/project2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import { GoDotFill } from "react-icons/go";
import { FaArrowCircleRight } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      Role: "System Integration And API Testing",
      Client: "WM Morrisons Supermarket LTD",
      Domain: "Retail",
      Description: "Morrisons supermarkets is UK based wholesale retail company, is using a web application forcreating and shipping orders for customers. It has different modules such as creating order for different customers, invoicing order, fetching details of customer through Get request, Post request etc ,Getting details of the order through Database etc. It is an effective web application specifically designed to fulfill various requirements in managing customer order details." ,
      Responsibility: [
        "Requirement gathering and requirement analysis",
        "Generating test reports",
        "Used Postman and Putty for Front-end Testing.",
        "Validating DB details with API details.",
        "Used AWS for getting the details from invoice  file and by running AWS tasks.",
        "Used GCP and PostgreSQL for getting data from DB.",
      ],
    },
    {
      Role: "Frontend Developer",
      Client: "WM Morrisons Supermarket LTD",
      Domain: "Retail",
      Responsibility: [
        "Working  with the developer team for designing of the test environment where tester can perfom all the test scenarios before going live",
        "Changing the complete User Interface from javascript to React js.",
        "Fetching API data which contains customer's orders details, items details as well as inventory details in webpage in row and columns format.",
        "Managing the rows and columns such that we can able to edit those columns.",
        "Work on pagination page creation in order to get clean interface.",
        "Bootstrap Table is mainly used to manage all the rows and columns, and downloading the table in .CSV format.",
        "Working on defect management and Bug tracking using Jira tool.",
        "Working on creation of Low Level Design and High Level Design of client's requirements.",
      ],
    },
  ];

  const [show, setShow] = useState(false);

  const projectInfo = () => {
    setShow(!show);
  };

  return (
    <div id="projects">
      <div className="mt-10 flex justify-center md:text-4xl text-2xl font-bold cursor-pointer">
        Projects <span className="ml-4 text-lg mt-4 text-green-500">  <FaArrowCircleRight /></span>
      </div>

      <div className="hover:cursor-pointer md:mb-8 mb-4">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="flex justify-center items-center mt-10 rounded-md md:w-3/4"
        >
          <div >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="md:mb-6 mb-6">
                    {!show ? (
                      <div onClick={projectInfo} className="  flex flex-col justify-center items-center p-4 border border-green-600 md:w-1/2 md:ml-56">
                        <h1 ><span className="font-semibold">Role:- </span>{project.Role}</h1>
                        <h2><span className="font-semibold">Client:- </span>{project.Client}</h2>
                        <h2><span className="font-semibold">Domain:- </span>{project.Domain}</h2>
                        {project.Description && <h2 className="text-justify"><span className="font-semibold">Description:- </span>{project.Description}</h2>}
                        
                      </div>
                    ) : (
                      <div onClick={projectInfo} className="flex items-center">
                        <ul className="md:w-5/6 border border-green-500 p-1  mx-auto font-medium ">
                          {Array.isArray(project.Responsibility) &&
                            project.Responsibility.map((item, i) => (
                              <li
                                key={i}
                                className="flex mx-6 md:w-5/6 text-[13px] text-justify "
                              >
                                <span>
                                  <GoDotFill className="mt-1" />
                                </span>{" "}
                                {item}
                              </li>
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

export default Projects;
