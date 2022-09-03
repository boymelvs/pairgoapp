import React from "react";
import ImgMedia from "../../assets/images/social-media/ImgMedia";
import logo from "../../assets/images/logo/logo-W.png";
import ImgContact from "../../assets/images/contact/ImgContact";

const Footer = () => {
   return (
      <>
         <footer id="my-footer">
            <div className="about-contact">
               <div className="about-footer">
                  <img src={logo} className="footer-logo" alt="PairGO footer logo" />

                  <p className="about-para">Pairgo is a comprehensive cargo handling and storage service company established in 1987</p>

                  <div className="social-media">
                     <img src={ImgMedia[1]} className="facebook" alt="facebook icon" />

                     <img src={ImgMedia[2]} className="twitter" alt="twitter icon" />

                     <img src={ImgMedia[4]} className="youtube" alt="youtube icon" />

                     <img src={ImgMedia[3]} className="instagram" alt="instagram icon" />
                  </div>
               </div>

               <div className="contact-footer">
                  <h2 className="contact-text-footer">Contacts</h2>
                  <div className="contact-text-icon">
                     <div className="contact-icon address">
                        <img src={ImgContact[1]} alt="location icon" />
                        <span>Nampicuan, Nueva Ecija</span>
                     </div>

                     <div className="contact-icon phone">
                        <img src={ImgContact[2]} alt="phone icon" />
                        <span>12456789</span>
                     </div>

                     <div className="contact-icon mail">
                        <img src={ImgContact[0]} alt="email icon" />
                        <span>melvin@pairgo.com</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="copyright-privacy">
               <div className="copyright">
                  <img src={ImgMedia[0]} alt="copyright" />
                  <span>Pairgo</span>
               </div>

               <div className="privacy">
                  <a href="#privacy" target="_blank" rel="noopener noreferrer">
                     Privacy Policy
                  </a>{" "}
                  |
                  <a href="#terms" target="_blank" rel="noopener noreferrer">
                     Terms & Conditions
                  </a>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
