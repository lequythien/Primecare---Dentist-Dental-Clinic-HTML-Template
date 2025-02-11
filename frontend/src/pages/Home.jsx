import React from "react";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import OurServices from "../components/OurServices";
import OurProcess from "../components/OurProcess";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ProvideSection from "../components/ProvideSection";
import OurTeam from "../components/OurTeam";
import BlogArticles from "../components/BlogArticles";
import ContactUsSection from "../components/ContactUsSection";

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
