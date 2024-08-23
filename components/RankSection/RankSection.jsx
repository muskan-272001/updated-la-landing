"use client";

import React, { useRef } from "react";
import Form from "../Form/Form";
import BoyCircle from "../../public/assets/BoyCircle.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import RankImages from "../RankImages/RankImages";

export const RankSection = () => {
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
    <>
      <div className="rankVideo">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="rankVideoIframe">
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
              <div className="rankText">
                <p>
                  The AryaGlobal Group has been catering to the Pre-K to 12
                  educational requirement of students since the last 40 years.
                  With 3 Preschool centres, an SSC school and 2 CBSE board
                  schools under its aegis, the school has been providing quality
                  and affordable education to over 5000 students each year.
                  Today the students passing out from this group have been doing
                  wonders in various sectors across the globe. With the Chinmaya
                  Vision Program at its base, it balances international
                  mindedness and technological advancement with traditional
                  values and cultural sensitivity.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <RankImages />
          </div>
        </div>
      </div>
    </>
  );
};
