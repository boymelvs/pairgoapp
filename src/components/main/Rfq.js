import React, { useEffect, useRef } from "react";
import Link from "../Routes/Link";
import Quoteforms from "../forms/Quoteforms";
import ImgServices from "../../assets/images/services/ImgServices";

const Rfq = ({ getRfq }) => {
   const servicesSection = useRef("");

   useEffect(() => {
      getRfq(servicesSection.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const result1 = ImgServices[0].map((service) => {
      return (
         <div className="card packaging" key={service.id}>
            <img src={service.image} className="card-img" alt={service.alt} />
            <div className="card-title">{service.title}</div>
            <div className="card-description">{service.description}</div>
         </div>
      );
   });

   const result2 = ImgServices[1].map((service) => {
      return (
         <div className="card packaging" key={service.id}>
            <img src={service.image} className="card-img" alt={service.alt} />
            <div className="card-title">{service.title}</div>
            <div className="card-description">{service.description}</div>
         </div>
      );
   });

   return (
      <>
         {/* 2nd section  */}
         <section id="services" ref={servicesSection}>
            <div className="offer-container">
               <h2 className="offers-title">SERVICES</h2>
               <h3 className="offers-subtitle">What we offer</h3>

               <div className="offer-services">{result1}</div>

               <div className="offer-services">{result2}</div>

               <div className="service-rates">
                  <Link href="/services"> Read More... </Link>
               </div>
            </div>

            <div className="quote-container">
               <h2 className="quote-title">REQUEST A QUOTE</h2>
               <Quoteforms />
            </div>
         </section>
      </>
   );
};

export default Rfq;
