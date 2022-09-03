import React from "react";

const Contactform = () => {
   return (
      <>
         <form action="" id="contact-form">
            <h3>For any questions, please fill up the form below.</h3>

            <div className="field name-container">
               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name" className="form-field" />
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <div className="field email-container">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="email" className="form-field" required />
               <div className="warning">Invalid email. Must not empty.</div>
            </div>

            <div className="field subject-container">
               <label htmlFor="subject">Subject</label>
               <input type="text" name="subject" id="subject" className="form-field" required />
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <div className="field message-container">
               <label htmlFor="message">Message</label>
               <textarea type="text" name="message" id="message" className="form-field" rows="4" required></textarea>
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <input type="submit" className="contact-btn" value="SEND" />
         </form>
      </>
   );
};

export default Contactform;
