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
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const result = ImgClients.map((ImgClient) => {
      return <img src={ImgClient.image} key={ImgClient.id} className="clients" alt={ImgClient.title} />;
   });

   return (
      <>
         {/* all clients section */}
         <section id="all-clients" className="clients-page" ref={allClientSection}>
            <h2 id="clients-page-title">VALUED CLIENTS</h2>

            <div className="client-para">
               <span> Our valued partnerships with the top airline </span>
               <span> and cargo companies help make our strides in the </span>
               <span> industry continuously significant, relevant and trail-blazing. </span>
            </div>

            <div className="client-container">{result}</div>
         </section>
      </>
   );
};

export default Allclients;
