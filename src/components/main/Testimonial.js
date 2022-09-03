import React from "react";
import ImgTesti from "../../assets/images/testomonial/ImgTesti";

const Testimonial = () => {
   const result = ImgTesti.map((profile) => {
      return (
         <div className="card-testi first-testi" key={profile.id}>
            <p className="testi-para">{profile.testimonial}</p>

            <div className="profile">
               <img src={profile.image} alt={profile.name} />

               <div className="name-position" id="name-position">
                  <div className="name">{profile.name}</div>
                  <div className="position">{profile.position}</div>
               </div>
            </div>
         </div>
      );
   });

   return (
      <>
         {/* 4th section  */}
         <section id="testimonial">
            <h2 className="testi-title">TESTIMONIALS</h2>

            <div className="testi-container">{result}</div>
         </section>
      </>
   );
};

export default Testimonial;
