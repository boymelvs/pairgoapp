import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
   const [scrollYValue, setScrollYValue] = useState(0);

   useEffect(() => {
      const onBodyScroll = () => {
         setScrollYValue(window.scrollY);
      };

      window.addEventListener("scroll", onBodyScroll, { capture: true });

      return () => {
         window.removeEventListener("scroll", onBodyScroll, { capture: true });
      };
   }, []);

   return (
      <>
         <Header scrollYValue={scrollYValue} />
         <Main />
         <Footer />
      </>
   );
}

export default App;
