import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import IconHeading from "../assets/images/icon-sub-heading.svg";
import Team1 from "../assets/images/team-1.jpg";
import Team2 from "../assets/images/team-2.jpg";
import Team3 from "../assets/images/team-3.jpg";
import Team4 from "../assets/images/team-4.jpg";

const teamMembers = [
  { img: Team1, name: "Dr. Rohini Joe", role: "Senior Chauffeur" },
  { img: Team2, name: "Taylor Smith", role: "City Tour Guide" },
  { img: Team3, name: "Jordan Brown", role: "Distance Driver" },
  { img: Team4, name: "Jacob Jones", role: "Dentist" },
];

const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <div className="w-full my-10 lg:my-20">
        <div
          className="container mx-auto text-center text-[#1e84b5] font-medium text-sm"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center justify-center space-x-3">
            <img src={IconHeading} alt="" />
            <p className="font-semibold">Our Team</p>
          </div>
        </div>

        <h1
          className="text-center font-bold text-[#0e384c] text-3xl sm:text-4xl my-2 lg:my-5"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Experienced and caring dental team
        </h1>

        <div className="max-w-7xl mx-auto">
          <p
            className="sm:w-2/3 mx-auto px-4 font-medium text-center text-[#537383] leading-7"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            The goal of our clinic is to provide friendly, caring dentistry and
            the highest level of general, cosmetic, and specialist dental
            treatments. With dental practices throughout the world.
          </p>
        </div>

        <div className="w-full container py-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden text-center"
                data-aos="fade-up"
                data-aos-delay={500 + index * 100}
              >
                <div className="relative group">
                  <img
                    className="mx-auto w-full h-full object-cover rounded-3xl"
                    src={member.img}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                    <div className="absolute bottom-0 left-0 right-0 bg-[#9fb0b1db] py-3 mx-10 my-4 rounded-3xl flex items-center justify-center space-x-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href="#"
                        className="text-white hover:text-[#1e84b5] text-2xl"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#1e84b5] text-2xl"
                      >
                        <FaXTwitter />
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#1e84b5] text-2xl"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#1e84b5] text-2xl"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
                <h1 className="font-semibold text-xl mt-4 text-[#0e384c]">
                  {member.name}
                </h1>
                <p className="text-[#5a7988]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
