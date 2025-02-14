import React from "react";
import Team1 from "../assets/images/team-1.jpg";
import Team2 from "../assets/images/team-2.jpg";
import Team3 from "../assets/images/team-3.jpg";
import Team4 from "../assets/images/team-4.jpg";

const OurTeam = () => {
  return (
    <div className="my-10 lg:my-20">
      <div>
        <div
          className="container mx-auto text-center text-[#1e84b5] font-medium text-base"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className="fa-solid fa-tooth mr-2"></i>
          Our Team
        </div>

        <h1
          className="text-center font-bold text-[#0e384c] text-3xl sm:text-4xl my-2 lg:my-5"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Experienced and caring dental team
        </h1>
        <p
          className="sm:w-1/2 mx-auto px-4 font-medium text-center text-[#537383] leading-7"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and specialist dental
          treatments. With dental practices throughout the world.
        </p>
      </div>

      <div className="w-full container p-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-0 sm:mx-32">
          {/* Team Member 1 */}
          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="relative group">
              <img
                className="mx-auto w-full h-full object-cover rounded-3xl"
                src={Team1}
                alt="Dr. Rohini Joe"
              />
              <div className="absolute inset-0 flex items-center justify-center space-x-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <div className="absolute bottom-0 left-0 right-0 bg-[#9fb0b1db] py-3 mx-10 my-4 rounded-3xl flex items-center justify-center space-x-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="">
                    <i className="fa-brands fa-facebook-f text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-x-twitter text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4 text-[#0e384c]">Dr. Rohini Joe</h1>
            <p className="text-[#5a7988]">Senior Chauffeur</p>
          </div>

          {/* Team Member 2 */}
          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="relative group">
              <img
                className="mx-auto w-full h-full object-cover rounded-3xl"
                src={Team2}
                alt="Taylor Smith"
              />
              <div className="absolute inset-0 flex items-center justify-center space-x-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <div className="absolute bottom-0 left-0 right-0 bg-[#9fb0b1db] py-3 mx-10 my-4 rounded-3xl flex items-center justify-center space-x-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="">
                    <i className="fa-brands fa-facebook-f text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-x-twitter text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4 text-[#0e384c]">Taylor Smith</h1>
            <p className="text-[#5a7988]">City Tour Guide</p>
          </div>

          {/* Team Member 3 */}
          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="relative group">
              <img
                className="mx-auto w-full h-full object-cover rounded-3xl"
                src={Team3}
                alt="Jordan Brown"
              />
              <div className="absolute inset-0 flex items-center justify-center space-x-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <div className="absolute bottom-0 left-0 right-0 bg-[#9fb0b1db] py-3 mx-10 my-4 rounded-3xl flex items-center justify-center space-x-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="">
                    <i className="fa-brands fa-facebook-f text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-x-twitter text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4 text-[#0e384c]">Jordan Brown</h1>
            <p className="text-[#5a7988]">Distance Driver</p>
          </div>

          {/* Team Member 4 */}
          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="relative group">
              <img
                className="mx-auto w-full h-full object-cover rounded-3xl"
                src={Team4}
                alt="Jacob Jones"
              />
              <div className="absolute inset-0 flex items-center justify-center space-x-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                <div className="absolute bottom-0 left-0 right-0 bg-[#9fb0b1db] py-3 mx-10 my-4 rounded-3xl flex items-center justify-center space-x-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a href="">
                    <i className="fa-brands fa-facebook-f text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-x-twitter text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin-in text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram text-2xl text-white hover:text-[#1e84b5]"></i>
                  </a>
                </div>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4 text-[#0e384c]">Jacob Jones</h1>
            <p className="text-[#5a7988]">Dentist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
