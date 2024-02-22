import React from "react";
import HomeSection from "../components/Home/Intro";
import AdvanceServices from "../components/AdvancedServices/Combined/AdvanceServices";
import FooterSection from "../components/Footer/FooterSection";
import OurWork from "../components/ourWork";
import Idea from "../components/OurServices";
import SepnotyQuerySection from "../components/ContactUs/SepnotyQuerySection";
import DevelopingProcess from "../components/Testimonials/DevelopingProcessSection";
import Testimonials from "../components/Testimonials/TestimonialsAndSuccess";
// import Navbar from "../components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <HomeSection />
      <AdvanceServices />
      <Idea />
      <OurWork />
      <DevelopingProcess />
      <Testimonials />
      <SepnotyQuerySection />
      <FooterSection />
    </>
  );
};

export default AboutUs;
