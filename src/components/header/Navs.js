import React, { useRef } from "react";
import Link from "../Routes/Link";

const Navs = ({ sectionId, setGoToTeams }) => {
   const checkboxRef = useRef();

   const onClickMenuItem = (whoClick) => {
      checkboxRef.current.checked = false;

      if (whoClick === "teams") {
         setGoToTeams(true);
         return;
      }

      setGoToTeams(false);
   };

   const myHome = () => {
      if (sectionId === "all-services" || sectionId === "all-clients" || sectionId === "contact-us" || sectionId === "about-us") {
         return <Link href="/">Home</Link>;
      } else {
         return <a href="#my-home">Home</a>;
      }
   };

   const myServices = () => {
      if (sectionId === "all-clients" || sectionId === "contact-us" || sectionId === "about-us") {
         return <Link href="/services">Services</Link>;
      } else {
         return <a href="#services">Services</a>;
      }
   };

   const myClients = () => {
      if (sectionId === "all-services" || sectionId === "contact-us" || sectionId === "about-us") {
         return <Link href="/clients">Clients</Link>;
      } else {
         return <a href="#clients">Clients</a>;
      }
   };

   const myTeams = () => {
      if (sectionId === "all-services" || sectionId === "all-clients" || sectionId === "contact-us" || sectionId === "about-us") {
         return <Link href="/#teams">Our Team</Link>;
      } else {
         return <a href="#teams">Our Team</a>;
      }
   };

   return (
      <>
         <input type="checkbox" name="burger-checkbox" id="burger-checkbox" aria-label="burger checkbox" ref={checkboxRef} />

         <nav className="nav-bar ">
            <ul className="menu">
               <li className={`menu-item hero ${sectionId === "hero" && "active"}`} onClick={onClickMenuItem}>
                  {myHome()}
               </li>
               <li className={`menu-item services ${(sectionId === "all-services" || sectionId === "services") && "active"}`} onClick={onClickMenuItem}>
                  {myServices()}
               </li>
               <li className={`menu-item clients ${(sectionId === "all-clients" || sectionId === "clients") && "active"}`} onClick={onClickMenuItem}>
                  {myClients()}
               </li>
               <li className={`menu-item teams ${sectionId === "teams" && "active"}`} onClick={() => onClickMenuItem("teams")}>
                  {/* <a href="#teams" onClick={onClickMenuItem}>
                     Our Team
                  </a> */}
                  {myTeams()}
               </li>
               <li className={`menu-item about ${sectionId === "about-us" && "active"}`} onClick={onClickMenuItem}>
                  <Link href="/about">About us</Link>
               </li>
               <li className={`menu-item contacts ${sectionId === "contact-us" && "active"}`} onClick={onClickMenuItem}>
                  <Link href="/contact">Contact us</Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navs;
