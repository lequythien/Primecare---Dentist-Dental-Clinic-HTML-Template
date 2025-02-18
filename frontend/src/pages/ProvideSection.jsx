import React, { useState } from "react";
import ImgVideo from "../assets/images/we-provide-image.jpg";
import IconHeading from "../assets/images/icon-sub-heading.svg";

const ProvideSection = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <div className="bg-[#0e384c]">
      <div className="max-w-7xl mx-auto">
        <div className="w-full text-white py-10 lg:py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="pr-0 md:pr-16">
                <div
                  className="flex items-center text-white font-medium text-sm mb-2"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center space-x-3">
                    <img src={IconHeading} alt="" />
                    <p className="font-semibold">What We Provide</p>
                  </div>
                </div>
                <h1
                  className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
                  data-aos="zoom-in-right"
                  data-aos-delay="400"
                >
                  Experience comfort, technology, and care at our advanced
                  dental facility
                </h1>
                <p
                  className="font-normal leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  We believe that a welcoming, state-of-the-art facility is key
                  to delivering exceptional dental care. Our practice is
                  designed not only to provide cutting-edge treatments but also
                  to create an environment where patients feel relaxed and
                  confident in their care.
                </p>
              </div>

              <div
                className="relative"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                {!isVideoVisible ? (
                  <div className="relative rounded-3xl overflow-hidden">
                    <img
                      src={ImgVideo}
                      alt="Dental Facility"
                      className="w-full cursor-pointer transition-transform transform hover:scale-105"
                      onClick={() => setIsVideoVisible(true)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-colors duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setIsVideoVisible(true)}
                        className="bg-[#9fb0b1db] rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
                      >
                        <i className="fas fa-play text-xl h-9 w-10 flex items-center justify-center text-gray-800"></i>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-64 sm:h-80 md:h-[350px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/Y-x0efG1seA?si=bHksv-sATVMbfAhk&autoplay=1"
                      title="Dental Video"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>

          {isVideoVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
              <div className="relative w-full max-w-4xl">
                <button
                  onClick={() => setIsVideoVisible(false)}
                  className="absolute -top-10 right-2 text-white rounded-full p-2 hover:text-gray-300 transition-colors"
                >
                  X
                </button>

                <iframe
                  className="w-full h-[80vh] rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/Y-x0efG1seA?si=bHksv-sATVMbfAhk&autoplay=1"
                  title="Dental Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div className="bg-[#0e384c] py-20">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  className="flex items-start space-x-2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <figure className="relative group">
                    <p className="bg-[#1e84b5] text-white rounded-xl py-2 px-4 flex items-center justify-center text-lg font-bold mr-4">
                      1
                    </p>
                  </figure>
                  <div>
                    <h1 className="font-semibold text-xl mb-2">
                      Comfort & Care
                    </h1>
                    <p className="text-base">
                      We understand that visiting the dentist can sometimes feel
                      intimidating, which is why we've created a space.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-2"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <figure className="relative group">
                    <p className="bg-[#1e84b5] text-white rounded-xl py-2 px-4 flex items-center justify-center text-lg font-bold mr-4">
                      2
                    </p>
                  </figure>
                  <div>
                    <h1 className="font-semibold text-xl mb-2">
                      Advanced Technology
                    </h1>
                    <p className="text-base">
                      We understand that visiting the dentist can sometimes feel
                      intimidating, which is why we've created a space.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start space-x-2"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <figure className="relative group">
                    <p className="bg-[#1e84b5] text-white rounded-xl py-2 px-4 flex items-center justify-center text-lg font-bold mr-4">
                      3
                    </p>
                  </figure>
                  <div>
                    <h1 className="font-semibold text-xl mb-2">
                      Sterilization & Safety
                    </h1>
                    <p className="text-base">
                      We understand that visiting the dentist can sometimes feel
                      intimidating, which is why we've created a space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvideSection;
