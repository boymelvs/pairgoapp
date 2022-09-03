import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Rfq from "./Rfq";
import Clients from "./Clients";
import Testimonial from "./Testimonial";
import Teams from "./Teams";

const Main = ({ scrollYValue, getId }) => {
   const [heroLocation, setHeroLocation] = useState(0);
   const [rfqLocation, setRfqLocation] = useState(0);
   const [clientLocation, setClientLocation] = useState(0);
   const [testiLocation, setTestiLocation] = useState(0);
   const [teamsLocation, setTeamsLocation] = useState(0);

   const sendId = (location) => {
      if (scrollYValue >= location.offsetTop - location.clientHeight / 3.3) {
         getId(location.id);
      }
   };

   useEffect(() => {
      sendId(heroLocation);
      sendId(rfqLocation);
      sendId(clientLocation);
      sendId(testiLocation);
      sendId(teamsLocation);
   });

   return (
      <main id="my-main">
         <Hero getHero={setHeroLocation} />
         <Rfq getRfq={setRfqLocation} />
         <Clients getClients={setClientLocation} />
         <Testimonial getTesti={setTestiLocation} />
         <Teams getTeams={setTeamsLocation} />
      </main>
   );
};

export default Main;
