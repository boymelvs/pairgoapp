import React from "react";

const Link = ({ href, children }) => {
   const onClick = (e, href) => {
      e.preventDefault();
      window.history.pushState({}, "", href); // change url manually

      const navEvent = new PopStateEvent("eventName"); //create an event for detecting the url after change
      window.dispatchEvent(navEvent);
   };

   return (
      <a href={href} onClick={(e) => onClick(e, href)}>
         {children}
      </a>
   );
};

export default Link;
