// import React from "react";
// import laLogo from "../../public/assets/little-aryans-logo.webp";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="mainNavbar">
//       <nav className="header border-gray-200 px-4 lg:px-6 py-2.5">
//         <div class="row">
//           <div class="col-8">
//             {" "}
//             <h1 className="mainFormText text-white">
//               Growing with values and learning with joy.
//             </h1>
//             <p className="mainFormTextp">
//               We follow a unique curriculum based on our Chinmaya Vision Program
//             </p>
//           </div>
//           <div class="col-4">
//             <div class="circle-logo">
//               <Image
//                 src={laLogo}
//                 height={200}
//                 width={200}
//                 alt="little aryans logo"
//                 class="logo"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="circle-container"></div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React from "react";
import laLogo from "../../public/assets/little-aryans-logo.webp";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mainNavbar">
      <nav className="header border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 className="mainFormText text-white">
              Growing with values and learning with joy.
            </h1>
            <p className="mainFormTextp">
              We follow a unique curriculum based on our Chinmaya Vision Program
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="circle-logo">
              <Image
                src={laLogo}
                height={200}
                width={200}
                alt="little aryans logo"
                className="logo"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;



// import React from "react";
// import laLogo from "../../public/assets/little-aryans-logo.webp";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="mainNavbar">
//       <nav className="header border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="logo-container d-flex justify-content-center">
//           <div className="circle-logo">
//             <Image
//               src={laLogo}
//               height={200}
//               width={200}
//               alt="little aryans logo"
//               className="logo"
//             />
//           </div>
//         </div>
//         <div className="text-container text-center">
//           <h1 className="mainFormText text-white">
//             Growing with values and learning with joy.
//           </h1>
//           <p className="mainFormTextp">
//             We follow a unique curriculum based on our Chinmaya Vision Program
//           </p>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
