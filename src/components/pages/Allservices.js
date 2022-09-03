import React, { useEffect, useRef } from "react";
import Quoteforms from "../main/Quoteforms";

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
            <h2 className="services-title">WAREHOUSING</h2>

            <div className="services-container">
               <div className="storage-racks-container">
                  <h2>Warehouse Capacity</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th></th>
                        <th>
                           <h3>Pairgo</h3>
                        </th>
                        <th>
                           <h3>Pags</h3>
                        </th>
                        <th>
                           <h3>Other</h3>
                        </th>
                     </tr>

                     <tr>
                        <td>
                           <strong>Storage</strong>
                        </td>
                        <td>
                           11,058 m<sup>2</sup>
                        </td>
                        <td>
                           5,899 m<sup>2</sup>
                        </td>
                        <td>
                           1,280 m<sup>2</sup>
                        </td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Loading</strong>
                        </td>
                        <td>
                           756 m<sup>2</sup>
                        </td>
                        <td>
                           704 m<sup>2</sup>
                        </td>
                        <td>
                           140 m<sup>2</sup>
                        </td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Total</strong>
                        </td>
                        <td>
                           11,814 m<sup>2</sup>
                        </td>
                        <td>
                           6,603 m<sup>2</sup>
                        </td>
                        <td>
                           1,420 m<sup>2</sup>
                        </td>
                     </tr>
                  </table>
               </div>

               <div className="storage-racks-container">
                  <h2>Office Capacity</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th></th>
                        <th>
                           <h3>Pairgo</h3>
                        </th>
                        <th>
                           <h3>Pags</h3>
                        </th>
                        <th>
                           <h3>Other</h3>
                        </th>
                     </tr>

                     <tr>
                        <td>
                           <strong>2nd Floor</strong>
                        </td>
                        <td>
                           3,779 m<sup>2</sup>
                        </td>
                        <td>
                           5,899 m<sup>2</sup>
                        </td>
                        <td>
                           1,280 m<sup>2</sup>
                        </td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Loading</strong>
                        </td>
                        <td>
                           3,779 m<sup>2</sup>
                        </td>
                        <td>
                           704 m<sup>2</sup>
                        </td>
                        <td>
                           140 m<sup>2</sup>
                        </td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Total</strong>
                        </td>
                        <td>
                           7,558 m<sup>2</sup>
                        </td>
                        <td>
                           6,603 m<sup>2</sup>
                        </td>
                        <td>
                           1,420 m<sup>2</sup>
                        </td>
                     </tr>
                  </table>
               </div>

               <div className="storage-racks-container">
                  <h2>Storage Rack Capacity</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th></th>
                        <th>
                           <h3>7 Units, 4 Levels</h3>
                        </th>
                        <th>
                           <h3>32 Units, 4 Levels</h3>
                        </th>
                     </tr>

                     <tr>
                        <td>
                           <strong>Length</strong>
                        </td>
                        <td>24 m</td>
                        <td>24 m</td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Width</strong>
                        </td>
                        <td>27 m</td>
                        <td>27 m</td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Height</strong>
                        </td>
                        <td>45 m</td>
                        <td>60 m</td>
                     </tr>
                  </table>
               </div>

               <h2 className="services-title">COLD STORAGE</h2>
               <div className="storage-racks-container">
                  <h2>Cold Storage Capacity</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th>
                           <h3>Type</h3>
                        </th>
                        <th>
                           <h3>Volume</h3>
                        </th>
                        <th>
                           <h3>Temperature</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Ante Room</strong>
                        </td>
                        <td>
                           216 m<sup>3</sup>
                        </td>
                        <td>10°C to 18°C</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Chiller</strong>
                        </td>
                        <td>
                           216 m<sup>3</sup>
                        </td>
                        <td>2°C to 8°C</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Freezer</strong>
                        </td>
                        <td>
                           216 m<sup>3</sup>
                        </td>
                        <td>0 to -20°C</td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Export Cold Storage</strong>
                        </td>
                        <td>
                           628 m<sup>3</sup>
                        </td>
                        <td>2°C to 8°C</td>
                     </tr>
                  </table>
               </div>

               <div className="storage-racks-container">
                  <h2>Refrigerated Vans</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th>
                           <h3>Type</h3>
                        </th>
                        <th>
                           <h3>Size</h3>
                        </th>
                        <th>
                           <h3>Temperature</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>20 Tons</strong>
                        </td>
                        <td>7 Units</td>
                        <td>10°C to 18°C</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>40 Tons</strong>
                        </td>
                        <td>4 Units</td>
                        <td>15°C to -20°C</td>
                     </tr>
                  </table>
               </div>

               <div className="storage-racks-container">
                  <h2>Special Storage Capacity</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th>
                           <h3>Type</h3>
                        </th>
                        <th>
                           <h3>Size</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Collectors Corral</strong>
                        </td>
                        <td>
                           720 m<sup>3</sup>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Electronic Corral</strong>
                        </td>
                        <td>
                           360 m<sup>3</sup>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Dangerous Goods</strong>
                        </td>
                        <td>
                           1022 m<sup>3</sup>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Valuable Vault</strong>
                        </td>
                        <td>
                           720 m<sup>3</sup>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Returned Cargo</strong>
                        </td>
                        <td>
                           360 m<sup>3</sup>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Livestock Quarantine</strong>
                        </td>
                        <td>
                           48 m<sup>3</sup>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Plant Quarantine</strong>
                        </td>
                        <td>
                           48 m<sup>3</sup>
                        </td>
                     </tr>
                  </table>
               </div>

               <h2 className="services-title">GROUND SUPPORT</h2>
               <div className="storage-racks-container">
                  <h2>Vehicle Areas Capacity</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th>
                           <h3>Landside</h3>
                        </th>
                        <th>
                           <h3>PairGo</h3>
                        </th>
                        <th>
                           <h3>Pags</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Movement / Parking</strong>
                        </td>
                        <td>
                           4,338,89 m<sup>2</sup>
                        </td>
                        <td>
                           2,369.19 m<sup>2</sup>
                        </td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Loading</strong>
                        </td>
                        <td>38 slots</td>
                        <td>24 slots</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Parking</strong>
                        </td>
                        <td>
                           88 slots<sup>2</sup>
                        </td>
                        <td>24 slots</td>
                     </tr>

                     <tr>
                        <td>
                           <strong>Movement Area</strong>
                        </td>
                        <td>
                           3,687.79 m<sup>2</sup>
                        </td>
                        <td>
                           5,779.19 m<sup>2</sup>
                        </td>
                     </tr>
                  </table>
               </div>
            </div>
         </section>

         <section id="rates">
            <h2 className="rates-title">STORAGE FEES</h2>
            <div className="rates-container">
               <div className="basic-rate-container">
                  <h2>BASIC STORAGE RATE</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th>
                           <h3>General Cargo</h3>
                        </th>
                        <th>
                           <h3>From</h3>
                        </th>
                        <th>
                           <h3>To</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Rate</strong>
                        </td>
                        <td>&#8369;2.64/kg/day</td>
                        <td>&#8369;343/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Width</strong>
                        </td>
                        <td>27 m</td>
                        <td>27 m</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Height</strong>
                        </td>
                        <td>45 m</td>
                        <td>60 m</td>
                     </tr>
                  </table>
               </div>
            </div>

            <div className="rates-container">
               <div className="basic-rate-container">
                  <h2>Special Cargo</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th></th>
                        <th>
                           <h3>From</h3>
                        </th>
                        <th>
                           <h3>To</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Minimum Charge</strong>
                        </td>
                        <td>&#8369;363.63/day</td>
                        <td>&#8369;393.42/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Baggage & Personal Effects</strong>
                        </td>
                        <td>&#8369;2.64/kg/day</td>
                        <td>&#8369;3.43/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Perishables</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Dangerous Drugs & Restricted</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Articles</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Live Animals, Fowls, Plants</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Human Remains</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                  </table>
               </div>
            </div>

            <div className="rates-container">
               <div className="basic-rate-container">
                  <h2>Service Charge</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th>
                           <h3>Rate Charge</h3>
                        </th>
                        <th>
                           <h3>From</h3>
                        </th>
                        <th>
                           <h3>To</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>For Shipment weight per AWB less than 100kg</strong>
                        </td>
                        <td>&#8369;1.04/kg/day</td>
                        <td>&#8369;135/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>For shipment weight per AWB is 100kg</strong>
                        </td>
                        <td>&#8369;153/day</td>
                        <td>&#8369;199.48/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Perishables</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Dangerous Drugs & Restricted</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Articles</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Live Animals, Fowls, Plants</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Human Remains</strong>
                        </td>
                        <td>&#8369;5.30/kg/day</td>
                        <td>&#8369;6.89/kg/day</td>
                     </tr>
                  </table>
               </div>
            </div>

            <div className="rates-container">
               <div className="basic-rate-container">
                  <h2>Ancillary Charges</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th>
                           <h3>Backdoor Charges</h3>
                        </th>
                        <th>
                           <h3>From</h3>
                        </th>
                        <th>
                           <h3>To</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Rate</strong>
                        </td>
                        <td>&#8369;8.45/kg/day</td>
                        <td>&#8369;10.99/day</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Minimum Charge</strong>
                        </td>
                        <td>&#8369;505.13/kg</td>
                        <td>&#8369;656.67/kg</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Maximum Charge</strong>
                        </td>
                        <td>&#8369;843.75/AWB</td>
                        <td>&#8369;1,096.88/AWB</td>
                     </tr>
                  </table>
               </div>
            </div>

            <div className="rates-container">
               <div className="basic-rate-container">
                  <h2>Deconsolidation Fee</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th></th>
                        <th>
                           <h3>From</h3>
                        </th>
                        <th>
                           <h3>To</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Fix Rate</strong>
                        </td>
                        <td>&#8369;425/HAWB</td>
                        <td>&#8369;552.83/HAWB</td>
                     </tr>
                  </table>
               </div>
            </div>
            <div className="rates-container">
               <div className="basic-rate-container">
                  <h2>Return Shipment Fee</h2>
                  <table className="roundedCorners">
                     <tr>
                        <th></th>
                        <th>
                           <h3>From</h3>
                        </th>
                        <th>
                           <h3>To</h3>
                        </th>
                     </tr>
                     <tr>
                        <td>
                           <strong>Rate</strong>
                        </td>
                        <td>&#8369;84.41/kg</td>
                        <td>&#8369;109.73/kg</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Minimum Charge</strong>
                        </td>
                        <td>&#8369;506</td>
                        <td>&#8369;657.80</td>
                     </tr>
                     <tr>
                        <td>
                           <strong>Maximum Charge</strong>
                        </td>
                        <td>&#8369;843.75</td>
                        <td>&#8369;1,096.88</td>
                     </tr>
                  </table>
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
