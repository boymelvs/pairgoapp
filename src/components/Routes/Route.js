import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
   const [pathName, setPathName] = useState("/");

   useEffect(() => {
      const onLocationChange = () => {
         setPathName(window.location.pathname);
      };

      window.addEventListener("eventName", onLocationChange); // eventame is type of event like click, change

      return () => window.removeEventListener("popstate", onLocationChange);
   }, []);

   return pathName === path && children;
};

export default Route;
