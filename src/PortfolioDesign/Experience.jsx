/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { GoDotFill } from "react-icons/go";

const Experience = () => {
  return (
    <>
      <div className="shadow-md">
        <div className="mt-10 flex justify-center font-bold text-4xl" id="experience">
          Experience
        </div>
        <div>
          <h1 className=" mx-10 md:w-1/2  md:mx-auto mt-10 text-md md:text-2xl mb-10">
            I have total <span className="text-green-600">3 years</span> of
            Experience as IT Professional
          </h1>

          <div className="md:flex md:justify-center md:space-x-10">
            <div className="mb-5 md:w-1/3 w-5/6 mx-auto md:mx-0 border-[2px] border-green-600 rounded-md">
              <h1 className="md:flex  mx-10 justify-between underline font-bold text-[14px] mt-5">
                Tata Consultancy Services Limited{" "}
                <span className="text-green-700">[2021-2023]</span>
              </h1>
              <ul>
                <li className=" flex mx-10 md:w-5/6 mt-3 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  2 years of professional experience in IT – Manual Testing and
                  API Testing
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Done API Testing Manually using Postman.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Worked on Postman, PostgreSQL and GCP.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Defect Management, Bug Tracking, Raising Bugs in JIRA.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Experience of executing test cases and analyzing results.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Exposure and good knowledge on Test Plan.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px] mb-4">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Participated in Daily Stand up meetings.{" "}
                </li>
              </ul>
            </div>
            <div className="mb-5 md:w-1/3 w-5/6 mx-auto md:mx-0 border-[2px] border-green-600 rounded-md">
              <h1 className="md:flex  mx-10 justify-between underline font-bold text-[14px] mt-5">
                Tata Consultancy Services Limited{" "}
                <span className="text-green-700">[2023-Present]</span>
              </h1>
              <ul>
                <li className=" flex mx-10 md:w-5/6 mt-3 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  1 years of professional experience in IT as a Frontend Web
                  Developer
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Changing Javascript code to Reactjs{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Work on pagination page creation{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Defect Management, Bug Tracking in JIRA.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Experience in Fetching API data in Webpage in row & Column
                  format.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px]">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Exposure and good knowledge on Web design.{" "}
                </li>
                <li className=" flex mx-10 md:w-5/6 text-[13px] mb-4">
                  <span>
                    <GoDotFill className="mt-1" />
                  </span>{" "}
                  Participated in Daily Stand up meetings to meet client's
                  requirements.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
