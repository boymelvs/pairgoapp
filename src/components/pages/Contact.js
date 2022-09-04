import React, { useEffect, useRef } from "react";
import Contactform from "../forms/Contactform";

const Contact = ({ scrollYValue, getId }) => {
   const contactSection = useRef("");

   const sendId = (location) => {
      if (scrollYValue >= location.offsetTop - location.clientHeight / 3.3) {
         getId(location.id);
      }
   };

   useEffect(() => {
      sendId(contactSection.current);
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         {/* contactform section  */}
         <section id="contact-us" ref={contactSection}>
            <h2 className="contact-title">Contact Us</h2>
            <Contactform />
         </section>
      </>
   );
};

export default Contact;
