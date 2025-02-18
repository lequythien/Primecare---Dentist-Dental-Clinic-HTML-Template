import React from "react";
import Header from "../components/Header";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";
import OurServices from "./OurServices";
import OurProcess from "./OurProcess";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import ProvideSection from "./ProvideSection";
import OurTeam from "./OurTeam";
import BlogArticles from "./BlogArticles";
import ContactUsSection from "./ContactUsSection";

const Home = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <AboutSection />
      <OurServices />
      <OurProcess />
      <WhyChooseUs />
      <Testimonials />
      <ProvideSection />
      <OurTeam />
      <BlogArticles />
      <ContactUsSection />
    </div>
  );
};

export default Home;
