import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../style/App.css";
import Navbar from "../component/navbar.jsx"
import Section1 from "../component/section1.jsx";
import Section2 from "../component/section2.jsx";
import Section4 from "../component/section4.jsx";
import Section5 from "../component/section5.jsx";
import Section3 from "../component/section3.jsx";
import Section6 from "../component/section6.jsx";
import Section7 from "../component/section7.jsx";
import Section8 from "../component/section8.jsx";
import Section9 from "../component/section9.jsx";
import Section10 from "../component/section10.jsx";
import Section11 from "../component/section11.jsx";
import Section12 from "../component/section12.jsx";
import Section13 from "../component/section13.jsx";
import Section14 from "../component/section14.jsx";
import Footer from "../component/footer.jsx";

import logo from "../assets/img/logo.png";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="">
      <Navbar />
      <Section1 h1={" Наши услуги"} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />

      <Section6 />
 <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      


      <Footer/>
    </div>
  </StrictMode>
);
