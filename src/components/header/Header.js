import React from "react";
import Logo from "./Logo";
import Navs from "./Navs";
import Burger from "./Burger";

const Header = ({ scrollYValue, id }) => {
   const headerBg = () => {
      if (scrollYValue > 50 || id === "all-services" || id === "all-clients" || id === "about-us" || id === "contact-us") {
         return "active";
      }
   };

   return (
      <>
         <header id="my-header" className={headerBg()}>
            <Logo />
            <Navs sectionId={id} />
            <Burger />
         </header>
      </>
   );
};

export default Header;
