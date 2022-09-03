import React from "react";
import Logo from "./Logo";
import Navs from "./Navs";
import Burger from "./Burger";

const Header = ({ scrollYValue }) => {
   return (
      <>
         <header id="my-header" className={`test ${scrollYValue > 50 && "active"}`}>
            <Logo />
            <Navs />
            <Burger />
         </header>
      </>
   );
};

export default Header;
