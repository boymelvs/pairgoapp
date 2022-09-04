import React, { useEffect, useRef } from "react";
import Quoteforms from "../forms/Quoteforms";

const Allservices = ({ scrollYValue, getId }) => {
   const allServicesSection = useRef("");

   const sendId = (location) => {
      if (scrollYValue >= location.offsetTop - location.clientHeight / 3.3) {
         getId(location.id);
      }
   };

   useEffect(() => {
      sendId(allServicesSection.current);
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div id="all-services" ref={allServicesSection}>
         {/* services section  */}
         <section id="service-offers">
            <h2 className="services-title">STORAGE CAPACITY</h2>

            <div className="services-container">
               {/* warehouse */}
               <div className="warehouse-container">
                  <h2>WAREHOUSE CAPACITY</h2>

                  <div className="warehouse">
                     <div className="cols-1">
                        <div className="border round-left"></div>
                        <div className="border">STORAGE</div>
                        <div className="border">LOADING</div>
                        <div className="border">TOTAL</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">PAIRGO</h3>
                        <div className="border">
                           11,058 m<sup>2</sup>
                        </div>
                        <div className="border">
                           756 m<sup>2</sup>
                        </div>
                        <div className="border">
                           11,814 m<sup>2</sup>
                        </div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border">PAGS</h3>
                        <div className="border">
                           5,899 m<sup>2</sup>
                        </div>
                        <div className="border">
                           704 m<sup>2</sup>
                        </div>
                        <div className="border">
                           6,603 m<sup>2</sup>
                        </div>
                     </div>

                     <div className="cols-4">
                        <h3 className="border">OTHER</h3>
                        <div className="border">
                           1,280 m<sup>2</sup>
                        </div>
                        <div className="border">
                           140 m<sup>2</sup>
                        </div>
                        <div className="border">
                           1,420 m<sup>2</sup>
                        </div>
                     </div>

                     <div className="cols-5">
                        <h3 className="border round-right">TOTAL</h3>
                        <div className="border">
                           1,280 m<sup>2</sup>
                        </div>
                        <div className="border">
                           140 m<sup>2</sup>
                        </div>
                        <div className="border">
                           1,420 m<sup>2</sup>
                        </div>
                     </div>
                  </div>
               </div>

               {/*office */}
               <div className="office-container">
                  <h2>OFFICE CAPACITY</h2>

                  <div className="office">
                     <div className="cols-1">
                        <div className="border round-left"></div>
                        <div className="border">2nd FLOOR</div>
                        <div className="border">3rd FLOOR</div>
                        <div className="border">TOTAL</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">PAIRGO</h3>
                        <div className="border">
                           3,779 m<sup>2</sup>
                        </div>
                        <div className="border">
                           3,779 m<sup>2</sup>
                        </div>
                        <div className="border">
                           7,558 m<sup>2</sup>
                        </div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border">PAGS</h3>
                        <div className="border">
                           5,899 m<sup>2</sup>
                        </div>
                        <div className="border">
                           704 m<sup>2</sup>
                        </div>
                        <div className="border">
                           6,603 m<sup>2</sup>
                        </div>
                     </div>

                     <div className="cols-4">
                        <h3 className="border">OTHER</h3>
                        <div className="border">
                           1,280 m<sup>2</sup>
                        </div>
                        <div className="border">
                           140 m<sup>2</sup>
                        </div>
                        <div className="border">
                           1,420 m<sup>2</sup>
                        </div>
                     </div>

                     <div className="cols-5">
                        <h3 className="border round-right">TOTAL</h3>
                        <div className="border">
                           1,280 m<sup>2</sup>
                        </div>
                        <div className="border">
                           140 m<sup>2</sup>
                        </div>
                        <div className="border">
                           1,420 m<sup>2</sup>
                        </div>
                     </div>
                  </div>
               </div>

               {/*racks */}
               <div className="storage-racks-container">
                  <h2>STORAGE RACKS CAPACITY</h2>

                  <div className="storage-racks">
                     <div className="cols-1">
                        <div className="border round-left"></div>
                        <div className="border">LENGTH</div>
                        <div className="border">WIDTH</div>
                        <div className="border">HEIGHT</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">7 UNITS, 4 LEVELS</h3>
                        <div className="border">24 m</div>
                        <div className="border">27 m</div>
                        <div className="border">45 m</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">32 UNITS. 5 LEVELS</h3>
                        <div className="border">24 m</div>
                        <div className="border">27 m</div>
                        <div className="border">60 m</div>
                     </div>
                  </div>
               </div>

               {/*cold storage */}
               <div className="cold-storage-container">
                  <h2>COLD STORAGE CAPACITY</h2>

                  <div className="cold-storage">
                     <div className="cols-1">
                        <h3 className="border round-left">TYPE</h3>
                        <div className="border">ANTE ROOM</div>
                        <div className="border">CHILLER</div>
                        <div className="border">FREEZER</div>
                        <div className="border">REFRIGERATED VANS 2Oth</div>
                        <div className="border">REFRIGERATED VANS 40th</div>
                        <div className="border">EXPORT COLD STORAGE</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">SIZE</h3>
                        <div className="border">
                           432 m<sup>3</sup>
                        </div>
                        <div className="border">
                           216 m<sup>3</sup>
                        </div>
                        <div className="border">
                           216 m<sup>3</sup>
                        </div>
                        <div className="border">7 units</div>
                        <div className="border">4 units</div>
                        <div className="border">
                           628 m<sup>3</sup>
                        </div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">TEMP</h3>
                        <div className="border">10&#8451; to 18&#8451;</div>
                        <div className="border">2&#8451; to 8&#8451;</div>
                        <div className="border">0&#8451; to -20&#8451;</div>
                        <div className="border">15&#8451; to -10&#8451;</div>
                        <div className="border">15&#8451; to -20&#8451;</div>
                        <div className="border">2&#8451; to 8&#8451;</div>
                     </div>
                  </div>
               </div>

               {/*special storage */}
               <div className="special-storage-container">
                  <h2>SPECIAL STORAGE CAPACITY</h2>

                  <div className="special-storage-fee">
                     <div className="cols-1">
                        <h3 className="border round-left">TYPE</h3>
                        <div className="border">COLLECTORS CORRAL</div>
                        <div className="border">ELECTRONIC CORRAL</div>
                        <div className="border">DANGEROUS GOODS</div>
                        <div className="border">VAUABLE VAULT</div>
                        <div className="border">RETURNED CARGO</div>
                        <div className="border">LIVESTOCK QUARANTINE</div>
                        <div className="border">PLANT QUARANTINE</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border round-right">SIZE</h3>
                        <div className="border">
                           720 m<sup>3</sup>
                        </div>
                        <div className="border">
                           360 m<sup>3</sup>
                        </div>
                        <div className="border">
                           1022 m<sup>3</sup>
                        </div>
                        <div className="border">
                           720 m<sup>3</sup>
                        </div>
                        <div className="border">
                           360 m<sup>3</sup>
                        </div>
                        <div className="border">
                           48 m<sup>3</sup>
                        </div>
                        <div className="border">
                           48 m<sup>3</sup>
                        </div>
                     </div>
                  </div>
               </div>

               {/*vehicle areas */}
               <div className="vehicle-area-container">
                  <h2>VEHICLE AREAS CAPACITY</h2>

                  <div className="vehicle-area">
                     <div className="cols-1">
                        <h3 className="border round-left">LANDSIDE</h3>
                        <div className="border">Movement/ Parking</div>
                        <div className="border">Loading</div>
                        <div className="border">Parking</div>
                        <div className="border">Airside</div>
                        <div className="border">Movement Area</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">PAIRGO</h3>
                        <div className="border">
                           4,338.89 m<sup>2</sup>
                        </div>
                        <div className="border">38 slots</div>
                        <div className="border">88 slots</div>
                        <div className="border">-</div>
                        <div className="border">3,687.79</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">PAGS</h3>
                        <div className="border">
                           2,36.19 m<sup>2</sup>
                        </div>
                        <div className="border">24 slots</div>
                        <div className="border">34 slots</div>
                        <div className="border">-</div>
                        <div className="border">
                           5,779.19 m<sup>2</sup>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="rates">
            <h2 className="rates-title">STORAGE FEES</h2>

            <div className="rates-container">
               {/*basic rate */}
               <div className="basic-rate-container">
                  <h2>BASIC STORAGE RATE</h2>

                  <div className="basic-rate">
                     <div className="cols-1">
                        <h3 className="border round-left">GENERAL CARGO</h3>
                        <div className="border">Rate</div>
                        <div className="border">Minimum Cargo</div>
                        <div className="border">Documents & Diplomatic Pouches</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">FROM</h3>
                        <div className="border">Php 2.64/kg/day</div>
                        <div className="border">Php 151.91/day</div>
                        <div className="border">Php 101.25/day</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">TO</h3>
                        <div className="border">Php 343/kg/day</div>
                        <div className="border">Php 197.48/day</div>
                        <div className="border">Php 131.63/day</div>
                     </div>
                  </div>
               </div>

               {/*special cargo */}
               <div className="special-cargo-container">
                  <h2>SPECIAL CARGO</h2>

                  <div className="special-cargo">
                     <div className="cols-1">
                        <div className="border round-left"></div>
                        <div className="border">Minimum Charge</div>
                        <div className="border">Baggage & Pesonal Effects</div>
                        <div className="border">Perishables</div>
                        <div className="border">Dangerous Drugs & Restricted Articles</div>
                        <div className="border">Live Animals, Fowls, Plants</div>
                        <div className="border">Human Remains</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">FROM</h3>
                        <div className="border">Php 363.63/day</div>
                        <div className="border">Php 2.64/kg/day</div>
                        <div className="border">Php 5.30/kg/day</div>
                        <div className="border">Php 5.30/kg/day</div>
                        <div className="border">Php 5.30/kg/day</div>
                        <div className="border">Php 5.30/kg/day</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">TO</h3>
                        <div className="border">Php 393.42/day</div>
                        <div className="border">Php 3.43/kg/day</div>
                        <div className="border">Php 6.89/kg/day</div>
                        <div className="border">Php 6.89/kg/day</div>
                        <div className="border">Php 6.89/kg/day</div>
                        <div className="border">Php 6.89/kg/day</div>
                     </div>
                  </div>
               </div>

               {/*service charges  */}
               <div className="service-charge-container">
                  <h2>SERVICE CHARGES</h2>

                  <div className="service-charge">
                     <div className="cols-1">
                        <h3 className="border round-left">RATE CHARGE</h3>
                        <div className="border size">For shipment weight per AWB less than 1ookg</div>
                        <div className="border size">For shipemtn weight per AWB is 100kg</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">FROM</h3>
                        <div className="border">Php 1.04/kg/day</div>
                        <div className="border">Php 153/day</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">TO</h3>
                        <div className="border">Php 135/kg/day</div>
                        <div className="border">Php 199.48/day</div>
                     </div>
                  </div>
               </div>

               {/*ancillary charges  */}
               <div className="service-charge-container">
                  <h2>ANCILLARY CHARGES</h2>

                  <div className="service-charge">
                     <div className="cols-1">
                        <h3 className="border round-left">BACKDOOR CHARGE</h3>
                        <div className="border">Rate</div>
                        <div className="border">Minimum Charge</div>
                        <div className="border">Maximum Charge</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">FROM</h3>
                        <div className="border">Php 8.45/kg/day</div>
                        <div className="border">Php 505.13/kg</div>
                        <div className="border">Php 843.75/AWB</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">TO</h3>
                        <div className="border">Php 10.99/day</div>
                        <div className="border">Php 656.67/kg</div>
                        <div className="border">Php 1,096.88/AWB</div>
                     </div>
                  </div>
               </div>

               {/*deconsolidation fee  */}
               <div className="deconsolidation-fee-container">
                  <h2>DECONSOLIDATION FEES</h2>

                  <div className="deconsolidation-fee">
                     <div className="cols-1">
                        <div className="border round-left"></div>
                        <div className="border">Fix Rate</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">FROM</h3>
                        <div className="border">Php 425.25/HAWB</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">TO</h3>
                        <div className="border">Php 552.83/HAWB</div>
                     </div>
                  </div>
               </div>

               {/* return shipment fee */}
               <div className="return-fee-container">
                  <h2>RETURN SHIPMENT FEES</h2>

                  <div className="return-fee">
                     <div className="cols-1">
                        <div className="border round-left"></div>
                        <div className="border">Rate</div>
                        <div className="border">Minimum Charge</div>
                        <div className="border">Maximum Charge</div>
                     </div>

                     <div className="cols-2">
                        <h3 className="border">FROM</h3>
                        <div className="border">Php 84.41/kg</div>
                        <div className="border">Php 506</div>
                        <div className="border">Php 843.75</div>
                     </div>

                     <div className="cols-3">
                        <h3 className="border round-right">TO</h3>
                        <div className="border">Php 109.73/kg</div>
                        <div className="border">Php 657.80</div>
                        <div className="border">Php 1,096.88</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="quote-container">
            <h2 className="quote-title">REQUEST A QUOTE</h2>
            <Quoteforms />
         </div>
      </div>
   );
};

export default Allservices;
