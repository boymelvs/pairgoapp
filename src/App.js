import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Allservices from "./components/pages/Allservices";
import Allclients from "./components/pages/Allclients";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Route from "./components/Routes/Route";

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
         <main id="my-main">
            <Route path="/">
               <Main scrollYValue={scrollYValue} getId={getId} />
            </Route>

            <Route path="/services">
               <Allservices scrollYValue={scrollYValue} getId={getId} />
            </Route>

            <Route path="/clients">
               <Allclients scrollYValue={scrollYValue} getId={getId} />
            </Route>

            <Route path="/about">
               <About scrollYValue={scrollYValue} getId={getId} />
            </Route>

            <Route path="/contact">
               <Contact scrollYValue={scrollYValue} getId={getId} />
            </Route>
         </main>
         <Footer />
      </div>
   );
}

export default App;
