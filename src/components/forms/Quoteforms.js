import React from "react";

const Quoteforms = () => {
   return (
      <>
         <form action="" id="quotes">
            <div className="field name-container">
               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name" className="form-field" minLength="5" maxLength="31" required />
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <div className="field email-container">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="email" className="form-field" maxLength="31" required />
               <div className="warning">Invalid email. Must not empty.</div>
            </div>

            <div className="field select-container">
               <label htmlFor="select-services">Services</label>

               <select id="select-services" name="services" className="form-field select-services" required>
                  <option value="" disabled placeholder="Select option">
                     Select Service
                  </option>

                  <option value="packaging">Packaging</option>

                  <option value="Warehousing">Warehousing</option>

                  <option value="cold-storag">Cold Storage</option>

                  <option value="tranport-support">Transport Support</option>

                  <option value="delivery">Delivery</option>
               </select>
               <div className="warning">Please select.</div>
            </div>

            <div className="field subject-container">
               <label htmlFor="subject">Subject</label>
               <input type="text" name="subject" id="subject" className="form-field" minLength="5" maxLength="31" required />
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <div className="field message-container">
               <label htmlFor="message">Message</label>
               <textarea type="text" name="message" id="message" className="form-field" rows="4" minLength="5" maxLength="251" required></textarea>
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <input type="submit" className="quote-btn" value="REQUEST" />
         </form>
      </>
   );
};

export default Quoteforms;
