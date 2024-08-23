import React from "react";
import Image from "next/image";
import BoyCircle from "../../public/assets/BoyCircle.png";
import Form from "../Form/Form";
import DemoClass from "../DemoClass/DemoClass";

const DevelopmentTestList = () => {
  return (
    <div className="developmentClassMain">
      <div className="mainList">
        <h2 className="liDev">
          We focus on all-around development
          <span className="block w-24 h-1 bg-teal-600"></span>
          {/* <Image src={lineGreen} alt="" height={90} width={100}/> */}
        </h2>
        <ul className="space-y-2 text-sm">
          <li>– Fees starting at just Rs 3,750/Month.</li>
          <li>
            – Value-based education that teaches the importance of our culture
            and traditions.
          </li>
          <li>– Spacious classrooms above 500 sq feet.</li>
          <li>
            – Dedicated Student Success Department to monitor student’s overall
            holistic growth and development.
          </li>
        </ul>
      </div>




      <div className="demoClass">
     <DemoClass/>
    </div>
    </div>
  );
};

export default DevelopmentTestList;
