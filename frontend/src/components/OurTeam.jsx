import React from "react";
import Team1 from "../assets/images/team-1.jpg";
import Team2 from "../assets/images/team-2.jpg";
import Team3 from "../assets/images/team-3.jpg";
import Team4 from "../assets/images/team-4.jpg";

const OurTeam = () => {
  return (
    <div className="my-20">
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
          className="text-center font-bold text-4xl my-5"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Experienced and caring dental team
        </h1>
        <p
          className="w-1/2 mx-auto font-medium text-center text-[#537383] leading-7"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          The goal of our clinic is to provide friendly, caring dentistry and
          the highest level of general, cosmetic, and specialist dental
          treatments. With dental practices throughout the world.
        </p>
      </div>

      <div className="w-full container p-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-32">
          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <img className="mx-auto" src={Team1} alt="Dr. Rohini Joe" />
              <div className="flex items-center justify-center bg-[#9fb0b1db] space-x-4">
                <a href="">
                  <i className="fa-brands fa-facebook-f text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin-in text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram text-2xl hover:text-[#1e84b5]"></i>
                </a>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4">Dr. Rohini Joe</h1>
            <p className="text-[#5a7988]">Senior Chauffeur</p>
          </div>

          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <img className="mx-auto" src={Team2} alt="Taylor Smith" />
              <div className="flex items-center justify-center bg-[#9fb0b1db] space-x-4">
                <a href="">
                  <i className="fa-brands fa-facebook-f text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin-in text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram text-2xl hover:text-[#1e84b5]"></i>
                </a>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4">Taylor Smith</h1>
            <p className="text-[#5a7988]">City Tour Guide</p>
          </div>

          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div>
              <img className="mx-auto" src={Team3} alt="Jordan Brown" />
              <div className="flex items-center justify-center bg-[#9fb0b1db] space-x-4">
                <a href="">
                  <i className="fa-brands fa-facebook-f text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin-in text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram text-2xl hover:text-[#1e84b5]"></i>
                </a>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4">Jordan Brown</h1>
            <p className="text-[#5a7988]">Distance Driver</p>
          </div>

          <div
            className="rounded-3xl overflow-hidden text-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div>
              <img className="mx-auto" src={Team4} alt="Jacob Jones" />
              <div className="flex items-center justify-center bg-[#9fb0b1db] space-x-4">
                <a href="">
                  <i className="fa-brands fa-facebook-f text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-x-twitter text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin-in text-2xl hover:text-[#1e84b5]"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram text-2xl hover:text-[#1e84b5]"></i>
                </a>
              </div>
            </div>
            <h1 className="font-semibold text-xl mt-4">Jacob Jones</h1>
            <p className="text-[#5a7988]">Dentist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
