import React, { useEffect, useRef } from "react";
import Link from "../Routes/Link";
import ImgClients from "../../assets/images/clients/ImgClients";

const Clients = ({ getClients }) => {
   const clientSection = useRef("");

   useEffect(() => {
      getClients(clientSection.current);
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   let result = [];
   for (let i = 0; i < 21; i++) {
      result.push(<img src={ImgClients[i].image} key={ImgClients[i].id} className="clients" alt={ImgClients[i].title} />);
   }

   return (
      <>
         {/* 3rd section  */}
         <section id="clients" ref={clientSection}>
            <div className="max-capacity">
               <div className="client-title">Certified as the largest with maximum capacity</div>

               <div className="capacity">
                  <strong>
                     <em> 40,000 square meters </em>
                  </strong>
                  — roughly the total area of storage, shipment and service. Pairgo is designated as Public Customs Bonded Warehouse number 83 by virtue of Customs memorandum order
                  #6-87 operating the largest International Cargo Complex at Ninoy Aquino International Airport (NAIA) with a an exact total land area of 38,952.85 m2.
               </div>
            </div>

            <h2>VALUED CLIENTS</h2>

            <div className="client-para">
               <span> Our valued partnerships with the top airline </span>
               <span> and cargo companies help make our strides in the </span>
               <span> industry continuously significant, relevant and trail-blazing. </span>
            </div>

            <div className="client-container">{result}</div>

            <div className="see-all">
               <Link href="/clients"> See All... </Link>
            </div>
         </section>
      </>
   );
};

export default Clients;
