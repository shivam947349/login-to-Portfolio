/* eslint-disable react/jsx-key */
// import React from 'react'
import Navbar from "../PortfolioDesign/Navbar"
import Home from "../PortfolioDesign/Home"
import Experience from "../PortfolioDesign/Experience"
import Skills from "../PortfolioDesign/Skills"
import Contact from "../PortfolioDesign/Contact"
import HandsOnProject from "../PortfolioDesign/HandsOnProject"
import Projects from "../PortfolioDesign/Projects"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";


const Portfolio = () => {

  const projectSection = [
    <Projects/>,
    <HandsOnProject/>
  ]

  return (
    <>
      <Navbar/>
      <br/>
      <Home/>
      <Experience/>
      <Skills/>
      {/* <Projects/>
      <HandsOnProject/> */}

      <div className="h-1/2 shadow-md shadow-green-700">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <div className="">
              {projectSection.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-3/4">
                      {project}
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>

      </div>


      <Contact/>
    
    </>
    
  )
}

export default Portfolio