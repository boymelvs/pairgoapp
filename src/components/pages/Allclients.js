import React, { useEffect, useRef } from "react";
import ImgClients from "../../assets/images/clients/ImgClients";

const Allclients = ({ scrollYValue, getId }) => {
   const allClientSection = useRef("");

   const sendId = (location) => {
      if (scrollYValue >= location.offsetTop - location.clientHeight / 3.3) {
         getId(location.id);
      }
   };

   useEffect(() => {
      sendId(allClientSection.current);
   });

   const result = ImgClients.map((ImgClient) => {
      return <img src={ImgClient.image} key={ImgClient.id} className="clients" alt={ImgClient.title} />;
   });

   return (
      <>
         {/* all clients section */}
         <section id="all-clients" class="clients-page" ref={allClientSection}>
            <h2 id="clients-page-title">VALUED CLIENTS</h2>

            <div class="client-para">
               <span> Our valued partnerships with the top airline </span>
               <span> and cargo companies help make our strides in the </span>
               <span> industry continuously significant, relevant and trail-blazing. </span>
            </div>

            <div class="client-container">{result}</div>
         </section>
      </>
   );
};

export default Allclients;
