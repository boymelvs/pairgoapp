import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
   const [scrollYValue, setScrollYValue] = useState(0);
   const [id, setId] = useState("");

   useEffect(() => {
      const onBodyScroll = () => {
         setScrollYValue(window.scrollY);
      };

      window.addEventListener("scroll", onBodyScroll, { capture: true });

      return () => {
         window.removeEventListener("scroll", onBodyScroll, { capture: true });
      };
   }, []);

   const getId = (value) => {
      setId(value);
   };

   return (
      <div id="my-home" className="container">
         <Header scrollYValue={scrollYValue} id={id} />
         <Main scrollYValue={scrollYValue} getId={getId} />
         <Footer />
      </div>
   );
}

export default App;
