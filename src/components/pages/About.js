import React, { useEffect, useRef } from "react";
import ImgAbouts from "../../assets/images/about/ImgAbout";
import AboutRates from "../../assets/images/about/AboutRate";
import Quoteforms from "../forms/Quoteforms";

const About = ({ scrollYValue, getId }) => {
   const aboutSection = useRef("");

   const sendId = (location) => {
      if (scrollYValue >= location.offsetTop - location.clientHeight / 3.3) {
         getId(location.id);
      }
   };

   useEffect(() => {
      sendId(aboutSection.current);
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const missionResult = ImgAbouts.map((ImgAbout) => {
      const capability = ImgAbout.title === "Capability" ? "capability" : "mission";

      return (
         <div className={capability} key={ImgAbout.id}>
            <div className="statement">
               <h2>{ImgAbout.title}</h2>

               <p>{ImgAbout.statement}</p>
            </div>

            <div className="image-container">
               <img src={ImgAbout.image} alt={ImgAbout.alt} />
            </div>
         </div>
      );
   });

   const rateResult = AboutRates.map((AboutRate) => {
      return (
         <div className="details" key={AboutRate.id}>
            <h2>{AboutRate.stat}</h2>
            <p>{AboutRate.detail}</p>
         </div>
      );
   });

   return (
      <div id="about-us" ref={aboutSection}>
         <section className="about-hero">
            <h2>ABOUT US</h2>

            <div className="sub-para">
               Pairgo is a comprehensive cargo handling and storage service company established in 1987. We have an extensive warehouse space for cargo storage, professionalized
               handling services and a full component of customs personnel assigned exclusively to Pairgo so you can be sure your cargo is well-attended to with highly-competent
               and personalized service. <br />
               <br />
               Pairgo has established itself as a market leader with the values it strongly imbibes within its staff and culture: Dynamism, Discipline and Dedication.
            </div>
         </section>

         <section className="about-detail">{missionResult}</section>

         <section className="rate">
            <div className="rate-container">{rateResult}</div>
         </section>

         <section className="help-container">
            <div className="help-message">
               <h2>HOW CAN WE HELP?</h2>

               <p>
                  Our warehouse and distribution capabilities include supply chain engineering & optimization, integrated technology & data analytics, and value-added services that
                  provide an efficient operation with continuous improvement.
               </p>
               <br />
               <p>
                  By implementing automation, technology systems, and LEAN continuous improvement practices, we drive efficiency and productivity by leveraging actionable business
                  intelligence and taking waste out of your operation.
               </p>
            </div>

            <div className="quote-container">
               <h2 className="quote-title">REQUEST A QUOTE</h2>
               <Quoteforms />
            </div>
         </section>
      </div>
   );
};

export default About;
