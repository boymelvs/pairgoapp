import React, { useEffect, useRef } from "react";
import ImgTeams from "../../assets/images/teams/ImgTeams";

const Teams = ({ getTeams, gotoTeams }) => {
   const teamSection = useRef("");

   useEffect(() => {
      getTeams(teamSection.current);
      gotoTeams && window.scrollTo(0, teamSection.current.offsetTop);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const result = ImgTeams.map((team) => {
      return (
         <div className="team-card" key={team.id}>
            <img src={team.image} alt={team.name} />

            <a href={team.portfolio} target="_blank" rel="noopener noreferrer" className="name">
               <span> {team.name} </span>
            </a>

            <div className="team-port">{team.position}</div>
         </div>
      );
   });

   return (
      <>
         {/* 5th section  */}
         <section id="teams" ref={teamSection}>
            <h2 className="team-title">MEET OUR DEDICATED TEAM</h2>
            <div className="team-container">{result}</div>
         </section>
      </>
   );
};

export default Teams;
