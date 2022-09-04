import React, { useState, useEffect, useRef } from "react";
import FormValidation from "./FormValidation";

const Contactform = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");

   const contactForm = useRef();

   const onInputChange = (e) => {
      let getId = e.target.id;
      let value = e.target.value;

      getId === "name" && setName(value);
      getId === "email" && setEmail(value);
      getId === "phone" && setPhone(value);
      getId === "subject" && setSubject(value);
      getId === "message" && setMessage(value);

      if (value) {
         FormValidation(contactForm.current, getId);
      }
   };

   const onFormSubmit = async (e) => {
      e.preventDefault();
      let getId = e.target.id;

      if (FormValidation(contactForm.current, getId)) {
         alert("Successfully Sent!");
         resetForm();
      }
   };

   const resetForm = () => {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
   };

   return (
      <>
         <form action="" id="contact-form" onSubmit={onFormSubmit} ref={contactForm}>
            <h3>For any questions, please fill up the form below.</h3>

            <div className="field name-container">
               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name" className="form-field" value={name} onChange={onInputChange} minLength="5" maxLength="31" required />
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <div className="field email-container">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="email" className="form-field" value={email} onChange={onInputChange} required />
               <div className="warning">Invalid email. Must not empty.</div>
            </div>

            <div className="field phone-container">
               <label htmlFor="phone">Phone</label>
               <input type="text" name="phone" id="phone" className="form-field" value={phone} onChange={onInputChange} minLength="9" maxLength="26" required />
               <div className="warning">Its look like not a phone number. Must not empty.</div>
            </div>

            <div className="field subject-container">
               <label htmlFor="subject">Subject</label>
               <input type="text" name="subject" id="subject" className="form-field" value={subject} onChange={onInputChange} minLength="5" maxLength="31" required />
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <div className="field message-container">
               <label htmlFor="message">Message</label>
               <textarea
                  type="text"
                  name="message"
                  id="message"
                  className="form-field"
                  rows="4"
                  value={message}
                  onChange={onInputChange}
                  minLength="5"
                  maxLength="251"
                  required
               ></textarea>
               <div className="warning">Must not empty. At least min 5 & max 30 characters.</div>
            </div>

            <input type="submit" className="contact-btn" value="SEND" />
         </form>
      </>
   );
};

export default Contactform;
