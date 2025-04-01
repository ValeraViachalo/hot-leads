"use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Parallax,
  Virtual,
  HashNavigation,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/a11y";
import "swiper/css/effect-coverflow";
import { DataContext } from "@/lib/providers/DataProvider/context";
import { Card } from "../Card";

import "./ResultsNew.scss";

const CustomSwiper = ({ customStyles = {} }) => {
  const { data } = useContext(DataContext);
  const { results } = data;

  // Main parameters from screenshots
  const swiperParams = {
    // Parameters from Image 2
    direction: "horizontal",
    slidesPerView: "auto", // Changed to auto for better control
    centeredSlides: true,
    initialSlide: 2,
    autoHeight: false,
    grabCursor: true,
    slideToClickedSlide: true,
    loop: true,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 6,

    // Effect settings
    effect: "coverflow", // Change to coverflow effect
    coverflowEffect: {
      rotate: 0, // No rotation
      stretch: 0, // No stretch
      depth: 200, // Increased depth for better effect
      modifier: 1,
      slideShadows: false, // Disable shadows
      scale: 0.85, // Scale for non-active slides
    },
    speed: 600,

    // Parameters from Image 1
    autoplay: false,
    parallax: true, // Enable parallax
    lazy: false,
    zoom: false,
    virtual: false,
    hashNavigation: false,
    watchSlidesProgress: true, // Important for parallax and coverflow to work properly
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    simulateTouch: true,
    cssMode: false,

    // Accessibility
    a11y: {
      enabled: true,
    },

    // Modules
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      Autoplay,
      Parallax,
      Virtual,
      HashNavigation,
      A11y,
      EffectCoverflow, // Add EffectCoverflow module
    ],

    // Disabled features
    navigation: false,
    pagination: false,
    scrollbar: false,
    keyboard: {
      enabled: false,
    },
    mousewheel: {
      enabled: false,
    },

    // breakpoints
    breakpoints: {
      //aspect ratio breakpoints

      "@0": {
        slidesPerView: 3,
      },
      "@0.67": {
        slidesPerView: "auto",
      },
    },

    ...customStyles,
  };

  return (
    <section className="results">
            <span className="results__title uppercase">{results?.title}</span>

      <div className="swiper-container">
        <Swiper {...swiperParams}>
          {[...results.list, ...results.list, ...results.list].map(
            (item, index) => (
              <SwiperSlide key={index} className="results-slide">
                <div
                  className="results-slide__bg"
                  style={{
                    backgroundColor: item.type === "buy" ? "green" : "red",
                  }}
                />
                <Card data={item} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomSwiper;
