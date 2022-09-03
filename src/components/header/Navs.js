import React, { useRef } from "react";

const Navs = () => {
   const checkboxRef = useRef();

   const onClickMenuItem = () => {
      checkboxRef.current.checked = false;
   };

   return (
      <>
         <input type="checkbox" name="burger-checkbox" id="burger-checkbox" aria-label="burger checkbox" ref={checkboxRef} />

         <nav className="nav-bar ">
            <ul className="menu">
               <li className="menu-item hero active">
                  <a href="#my-home" onClick={onClickMenuItem}>
                     Home
                  </a>
               </li>
               <li className="menu-item services">
                  <a href="#rfq" onClick={onClickMenuItem}>
                     Services
                  </a>
               </li>
               <li className="menu-item clients">
                  <a href="#clients" onClick={onClickMenuItem}>
                     Clients
                  </a>
               </li>
               <li className="menu-item teams">
                  <a href="#teams" onClick={onClickMenuItem}>
                     Our Team
                  </a>
               </li>
               <li className="menu-item about">
                  <a href="./pages/about.html" onClick={onClickMenuItem}>
                     About us
                  </a>
               </li>
               <li className="menu-item contacts">
                  <a href="./pages/contact.html" onClick={onClickMenuItem}>
                     Contact us
                  </a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Navs;
