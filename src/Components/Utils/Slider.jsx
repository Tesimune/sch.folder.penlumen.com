import React, { Component } from 'react'
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

export default class Slider extends Component {
  render() {
    return (
      <div>
        
        <div id="default-carousel" className="bg-slate-800 relative" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden md:h-96">
                {/* <!-- Item 1 --> */}
                <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
                    <img src="../../Images/oaa8.jpg" className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                    <img src="../../Images/oaa8.jpg" className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 3 --> */}
                <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                    <img src="../../Images/oaa8.jpg" className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <HiOutlineArrowCircleLeft className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"/>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <HiOutlineArrowCircleRight className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"/>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

      </div>
    )
  }
}
