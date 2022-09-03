import React from "react";
import Logo from "./Logo";
import Navs from "./Navs";
import Burger from "./Burger";

const Header = ({ scrollYValue, id }) => {
   return (
      <>
         <header id="my-header" className={`test ${scrollYValue > 50 && "active"}`}>
            <Logo />
            <Navs id={id} />
            <Burger />
         </header>
      </>
   );
};

export default Header;
