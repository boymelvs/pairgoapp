import React from "react";
import Logo from "./Logo";
import Navs from "./Navs";
import Burger from "./Burger";

const Header = ({ scrollYValue, sendId, setGoToTeams }) => {
   const headerBg = () => {
      if (scrollYValue > 50 || sendId === "all-services" || sendId === "all-clients" || sendId === "contact-us") {
         return "active";
      }
   };

   return (
      <>
         <header id="my-header" className={headerBg()}>
            <Logo />
            <Navs sectionId={sendId} setGoToTeams={setGoToTeams} />
            <Burger />
         </header>
      </>
   );
};

export default Header;
