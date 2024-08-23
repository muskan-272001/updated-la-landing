// import React from "react";
// import Form from "../Form/Form";
// import BoyCircle from "../../public/assets/BoyCircle.png";
// import Image from "next/image";

// const FormWithText = () => {
//   return (
//     <div>
//       <div class="textLeftContainer">
//         <div class="row">
//           <div class="col">
//             <Image
//               src={BoyCircle}
//               alt="Home Image"
//               height={450}
//               width={300}
//               className="circleBoyImage"
//             />
//           </div>
//           <div class="col">
//             <Form />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormWithText;


import React from "react";
import Form from "../Form/Form";
import BoyCircle from "../../public/assets/BoyCircle.png";
import Image from "next/image";

const FormWithText = () => {
  return (
    <div className="textLeftContainer">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <Image
            src={BoyCircle}
            alt="Home Image"
            height={450}
            width={300}
            className="circleBoyImage"
          />
        </div>
        <div className="col-12 col-md-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormWithText;
