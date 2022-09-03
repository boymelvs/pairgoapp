import React, { useEffect, useRef } from "react";
import Quoteforms from "../main/Quoteforms";

const About = ({ scrollYValue, getId }) => {
   const aboutSection = useRef("");

   const sendId = (location) => {
      if (scrollYValue >= location.offsetTop - location.clientHeight / 3.3) {
         getId(location.id);
      }
   };

   useEffect(() => {
      sendId(aboutSection.current);
   });

   return (
      <div id="about-us" ref={aboutSection}>
         <section className="about-us">
            <h2>ABOUT US</h2>
            <br />

            <div className="sub-para">
               Pairgo is a comprehensive cargo handling and storage service company established in 1987. We have an extensive warehouse space for cargo storage, professionalized
               handling services and a full component of customs personnel assigned exclusively to Pairgo so you can be sure your cargo is well-attended to with highly-competent
               and personalized service. <br />
               <br />
               Pairgo has established itself as a market leader with the values it strongly imbibes within its staff and culture: Dynamism, Discipline and Dedication.
            </div>
         </section>

         <section className="about-detail">
            <div className="about-container">
               <div className="mission">
                  <div className="statement">
                     <h2>Mission and Vision</h2>
                     <hr />
                     <br />
                     <p>
                        To be the preferred and most trusted provider of warehouse and storage company, defined by our quality specialized services that are above standards and
                        beyond expectations.
                     </p>
                  </div>
                  <div className="img1">
                     <img src="https://www.cuinsight.com/wp-content/uploads/2019/11/bigstock-Diverse-team-joining-their-han-289016893.jpg" alt="" />
                  </div>
               </div>
               <div className="capability">
                  <div className="img2">
                     <img
                        src="https://www.atsinc.com/hs-fs/hubfs/Images/Page%20Images/Warehousing%20and%20Yard%20Services/Warehousing-Secondary.jpg?width=1500&name=Warehousing-Secondary.jpg"
                        alt=""
                     />
                  </div>
                  <div className="statement">
                     <h2>Capability Statement</h2>
                     <hr />
                     <br />
                     <p>
                        Beyond its decades of service and experience, Pairgo has exemplified its commitment to its values by continuously being one of the most efficient collection
                        ports of the Bureau of Customs. It has also continued to exceed its collection targets annually, with the highest number of collection per volume of goods
                        arriving at the port.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="rate">
            <div className="rate-container">
               <div className="rate-row">
                  <div className="details">
                     <h2>99%</h2>
                     <p>on-time delivery rate</p>
                  </div>
                  <div className="details">
                     <h2>150+</h2>
                     <p>professional drivers</p>
                  </div>
                  <div className="details">
                     <h2>30+</h2>
                     <p>years of experience</p>
                  </div>
                  <div className="details">
                     <h2>100+</h2>
                     <p>maintenance facilities</p>
                  </div>
                  <div className="details">
                     <h2>Industry</h2>
                     <p>leader in safety and security</p>
                  </div>
                  <div className="details">
                     <h2>Relied</h2>
                     <p>upon by more than 30+ companies</p>
                  </div>
                  <div className="details">
                     <h2>200+</h2>
                     <p>trained technicians</p>
                  </div>
                  <div className="details">
                     <h2>60+</h2>
                     <p>vehicles managed</p>
                  </div>
                  <div className="details">
                     <h2>10M+</h2>
                     <p>sq. ft of warehouse space</p>
                  </div>
               </div>
            </div>
         </section>

         <section className="help">
            <div className="help-container">
               <div className="help-area">
                  <div className="help-message">
                     <h2>HOW CAN WE HELP?</h2>
                     <br />
                     <br />
                     <p>
                        Our warehouse and distribution capabilities include supply chain engineering & optimization, integrated technology & data analytics, and value-added
                        services that provide an efficient operation with continuous improvement.
                     </p>
                     <br />
                     <p>
                        By implementing automation, technology systems, and LEAN continuous improvement practices, we drive efficiency and productivity by leveraging actionable
                        business intelligence and taking waste out of your operation.
                     </p>
                  </div>

                  <div className="quote-container">
                     <h2 className="quote-title">REQUEST A QUOTE</h2>
                     <Quoteforms />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default About;
