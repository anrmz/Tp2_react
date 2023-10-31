import React from "react";
import leftArrow from "./Slider/icons/left-arrow.svg";
import rightArrow from "./Slider/icons/right-arrow.svg";

export default function BtnSlider(props) {
  return (
    <>
      <button
        onClick={props.moveSlide}
        className={
          props.direction === "next" ? "btn-slide next" : "btn-slide prev"
        }
      >
        <img
          src={props.direction === "next" ? rightArrow : leftArrow}
          alt="icone flèche"
        />
      </button>
    </>
  );
}
