import React from "react";
import Img from "../assets/images/why-choose-bg-img.jpg";
import Icon from "../assets/images/icon-sub-heading.svg";
import Icon1 from "../assets/images/icon-why-choose-1.svg";
import Icon2 from "../assets/images/icon-why-choose-2.svg";
import Icon3 from "../assets/images/icon-why-choose-3.svg";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  return (
    <div className="relative w-full bg-[#f9fcff] text-white">
      {/* Content Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 mx-auto mt-0">
        {/* Left Column */}
        <div
          className="flex justify-center items-center w-full order-2 lg:order-1 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Img})` }}
        >
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col items-center justify-center bg-[#819698ee] py-16 px-6 rounded-3xl lg:max-w-md max-w-xl gap-8 w-full min-h-[450px]">
              {[
                {
                  icon: Icon1,
                  title: "Personalized Care For Patient",
                  text: "We understand that each patient is unique, and listen to concerns.",
                },
                {
                  icon: Icon2,
                  title: "Cutting Edge Technology",
                  text: "We invest in the latest dental technology to give you.",
                },
                {
                  icon: Icon3,
                  title: "Family Friendly",
                  text: "No matter your age or dental needs, we are here to help.",
                },
              ].map((item, index) => (
                <div key={index} className="w-full space-y-6">
                  <div
                    className="flex items-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay={`${300 + index * 100}`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-16 h-16 bg-[#9aabade7] p-4 rounded-3xl hover:bg-[#0e384c]"
                    />
                    <div>
                      <h1 className="font-semibold text-xl text-white">
                        {item.title}
                      </h1>
                      <p className="text-base">{item.text}</p>
                    </div>
                  </div>
                  {index < 2 && (
                    <hr
                      className="border-gray-400 w-full"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="whychoose-right flex flex-col justify-center my-32 lg:px-8 order-1 lg:order-2">
          <div
            className="flex items-center space-x-3 text-[#1e84b5] mb-4 text-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={Icon} alt="" />
            <h2 className="why-choose-h2 font-semibold">Why Choose Us</h2>
          </div>
          <h1
            className="text-h1-whychoose font-bold my-4 leading-tight text-[#0e384c]"
            data-aos="zoom-in-right"
            data-aos-delay="300"
          >
            Exceptional dental care tailored to your needs
          </h1>
          <p
            className="text-p1-whychoose text-[#527282] font-bold mb-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We take the time to understand your individual needs and goals,
            creating customized treatment plans to help you achieve optimal oral
            health.
          </p>
          <p
            className="text-p2-whychoose text-gray-600"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            We believe that your dental experience should be more than just a
            routine visit. Our goal is to provide comprehensive, personalized
            care in a welcoming environment, where your comfort and well-being
            come first.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {[
              { num: 20, text: "Years Of Experience" },
              { num: 5, text: "Happy Patients" },
              { num: 986, text: "Treatment Completed" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start space-y-2 lg:border-r lg:border-gray-400 last:border-none"
              >
                <p className="text-sm font-semibold text-gray-500 lg:mb-4">
                  0{index + 1}
                </p>
                <span className="span-whychoose font-bold text-[#0e384c]">
                  <CountUp
                    start={0}
                    end={item.num}
                    duration={2.5}
                    separator=","
                  />
                  +
                </span>
                <p className="text-p3-whychoose text-[#0e384c] font-semibold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
