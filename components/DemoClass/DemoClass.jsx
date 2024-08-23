"use client"

import React, { useRef } from "react";
import Image from "next/image";
import BoyCircle from "../../public/assets/BoyCircle.png";
import Form from "../Form/Form";
import circleBoyImage from "../../public/assets/CircleImage.png";
import { useInView } from "react-intersection-observer";
// import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const DemoClass = () => {
    const videoRefs = useRef([]);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleMouseEnter = (index) => {
    const iframe = videoRefs.current[index];
    if (iframe) {
      iframe.src += "&autoplay=1"; // Add autoplay when hovered
    }
  };

  const handleMouseLeave = (index) => {
    const iframe = videoRefs.current[index];
    if (iframe) {
      iframe.src = iframe.src.replace("&autoplay=1", ""); // Remove autoplay when not hovered
    }
  };

  return (
    <div className="row">
        <div className="circleKidImage col-12 col-md-6 d-flex justify-content-center align-items-center">
        <div className="circleImage">
      <Image src={circleBoyImage} alt="" />
    </div>
        </div>
        <div className="col-12 col-md-6">
        <div className="mainClassDemo">
      <div className="classHead">
        <h2 className="liDev bg-purple-300 rounded-full text-center">JOIN OUR DEMO CLASS</h2>
      </div>
      <div className="classText">
        Experience the unique learning environment at our institution.
        Enroll in a demo class today and discover the joy of learning with us!
      </div>
      <div className="classButton">
        <button className="applyFreeBtn">Apply Free</button>
      </div>
    </div>

      <div className="demoClassVideo">
      <div className="rightColumn">
          <iframe
          ref={(el) => (videoRefs.current[0] = el)}
          className="w-full h-full aspect-video rounded-lg shadow-md"
          src="https://www.youtube.com/embed/1FLYZdxsteo?controls=0"
          title="Product Overview Video"
          aria-hidden="true"
          loading="lazy"
          allow="autoplay"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}    
        />
           
      </div>
      </div>
        </div>

      </div>
  )
}

export default DemoClass