import React, { useState, useEffect, useRef } from "react";
import ImgHeros from "../../assets/images/hero/ImgHero";
import Link from "../Routes/Link";

const Hero = ({ getHero }) => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [isActive, setIsActive] = useState(true);
   const heroSection = useRef("");

   useEffect(() => {
      const runSlide = () => {
         if (currentSlide === ImgHeros.length - 2) {
            setIsActive(!isActive);
         }

         if (isActive) {
            setCurrentSlide(currentSlide + 1);
         } else {
            setCurrentSlide(currentSlide - 1);
         }
      };

      let timer = setTimeout(() => {
         runSlide();
      }, 5000);

      getHero(heroSection.current);

      return () => {
         clearTimeout(timer);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [currentSlide, isActive]);

   const result = ImgHeros.map((imgHero, index) => {
      let styles = { transform: `translateX(${(index - currentSlide) * 100}%)` };

      return (
         <div className="slide" key={index} style={styles}>
            <img src={imgHero} alt="Inside Warehouse" key={index} />
         </div>
      );
   });

   return (
      <>
         {/* first section  */}
         <section id="hero" ref={heroSection}>
            <h2 className="hero-title">
               <span> A LEADER IN THE </span>
               <span> INDUSTRY </span>
            </h2>

            <div id="sliders">{result}</div>

            <div className="hero-contact">
               <div className="query-text" id="query-text">
                  <span> FOR ANY </span>
                  <span> QUESTIONS </span>
               </div>

               <div className="call-text">Call: 123456789</div>

               <div className="hero-btn-container">
                  <Link href="/contact">
                     <input type="button" id="hero-btn" value="Contact Us" />
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
};

export default Hero;
