/* validation if empty */
const isRequired = (value) => {
   return value ? true : false;
};

/* showWarning if invalid/valid */
const showWarning = (element, isAdded) => {
   isAdded === "remove" ? element.classList.remove("active") : element.classList.add("active");
   isAdded === "remove" ? element.classList.add("green-border") : element.classList.remove("green-border");
};

/* validation for name */
const checkName = (item) => {
   let name = item.name.value.trim();
   let maxLength = name.length;
   let element = item.name;

   if (isRequired(name) && maxLength >= 5 && maxLength < 51) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

/* validation for email */
const checkEmail = (item) => {
   let email = item.email.value.trim();
   let maxLength = email.length;
   let element = item.email;

   const emailFormat = /[^@ \t\r\n]+@[^@ \t\r\n]+\.(\w{2,3})+$/;
   const isEmailCorrect = emailFormat.test(email);

   if (isRequired(email) && maxLength < 51 && isEmailCorrect) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

/* validation for subject */
const checkPhone = (item) => {
   let name = item.phone.value.trim();
   let maxLength = name.length;
   let element = item.phone;

   if (isRequired(name) && maxLength >= 9 && maxLength < 26) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

/* validation for subject */
const checkSubject = (item) => {
   let name = item.subject.value.trim();
   let maxLength = name.length;
   let element = item.subject;

   if (isRequired(name) && maxLength >= 5 && maxLength < 51) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

/* validation for message */
const checkMessage = (item) => {
   let message = item.message.value.trim();
   let maxLength = message.length;
   let element = item.message;

   if (isRequired(message) && maxLength >= 5 && maxLength < 251) {
      return true;
   }

   showWarning(element.nextElementSibling, "add");
   showWarning(element, "add");
   return false;
};

/* remove warning once input is valid */
const removeWarning = (element) => {
   showWarning(element, "remove");
   showWarning(element.nextElementSibling, "remove");
};

/* ================= REAL TIME FORM VALIDATION ================= */
let timeOut;

const realTimeChecking = (contactForm, value) => {
   let getId = value;

   if (timeOut) {
      clearTimeout(timeOut);
   }

   timeOut = setTimeout(() => {
      switch (getId) {
         case "name":
            if (checkName(contactForm)) {
               let element = contactForm.name;
               removeWarning(element);
            }
            break;

         case "email":
            if (checkEmail(contactForm)) {
               let element = contactForm.email;
               removeWarning(element);
            }
            break;

         case "phone":
            if (checkPhone(contactForm)) {
               let element = contactForm.phone;
               removeWarning(element);
            }
            break;

         case "subject":
            if (checkSubject(contactForm)) {
               let element = contactForm.subject;
               removeWarning(element);
            }
            break;

         case "message":
            if (checkMessage(contactForm)) {
               let element = contactForm.message;
               removeWarning(element);
            }
            break;

         default:
            return "ERROR";
      }
   }, 500);
};

const FormValidation = (contactForm, value) => {
   /* ================= FORMS SUBMISSION ================= */

   if (value === "contact-form") {
      if (checkName(contactForm) && checkEmail(contactForm) && checkPhone(contactForm) && checkSubject(contactForm) && checkMessage(contactForm)) {
         return true;
      }
   } else {
      realTimeChecking(contactForm, value);
   }
};

export default FormValidation;
