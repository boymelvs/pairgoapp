import React, { useEffect, useRef } from "react";
import ImgServices from "../../assets/images/services/ImgServices";

const Rfq = ({ getRfq }) => {
   const rfqSection = useRef("");

   useEffect(() => {
      getRfq(rfqSection.current);
   }, [getRfq]);

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
         <section id="rfq" ref={rfqSection}>
            <div className="offer-container">
               <h2 className="offers-title">SERVICES</h2>
               <h3 className="offers-subtitle">What we offer</h3>

               <div className="offer-services">{result1}</div>

               <div className="offer-services">{result2}</div>

               <div className="service-rates">
                  <a href="./pages/services.html"> Read More... </a>
               </div>
            </div>

            <div className="quote-container">
               <h2 className="quote-title">REQUEST A QUOTE</h2>

               <form action="" id="quotes">
                  <div className="field name-container">
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" id="name" className="form-field" required />
                     <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
                  </div>

                  <div className="field email-container">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" className="form-field" required />
                     <div className="warning">Invalid email. Must not empty.</div>
                  </div>

                  <div className="field select-container">
                     <label htmlFor="select-services">Services</label>

                     <select id="select-services" name="services" className="form-field select-services" required>
                        <option value="" disabled placeholder="Select option">
                           Select Service
                        </option>

                        <option value="packaging">Packaging</option>

                        <option value="Warehousing">Warehousing</option>

                        <option value="cold-storag">Cold Storage</option>

                        <option value="tranport-support">Transport Support</option>

                        <option value="delivery">Delivery</option>
                     </select>
                     <div className="warning">Please select.</div>
                  </div>

                  <div className="field subject-container">
                     <label htmlFor="subject">Subject</label>
                     <input type="text" name="subject" id="subject" className="form-field" required />
                     <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
                  </div>

                  <div className="field message-container">
                     <label htmlFor="message">Message</label>
                     <textarea type="text" name="message" id="message" className="form-field" rows="4" required></textarea>
                     <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
                  </div>

                  <input type="submit" className="quote-btn" value="REQUEST" />
               </form>
            </div>
         </section>
      </>
   );
};

export default Rfq;
