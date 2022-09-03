import React from "react";
import logo from "../../assets/images/logo/logo-W.png";

const Logo = () => {
   return (
      <>
         <a href="#logo" className="logo-container">
            <img src={logo} className="logo" alt="PairGO Logo" />
         </a>
      </>
   );
};

export default Logo;
