import React from "react";

// team
import imgtester from "../assets/Images/team/imgtester.png";
import chandra from "../assets/Images/team/chandra.png";
import suprayoga from "../assets/Images/team/suprayoga.png";
import dwi from "../assets/Images/team/dwi.png";
import dion from "../assets/Images/team/dion.png";
import retian from "../assets/Images/team/retian.png";
import resha from "../assets/Images/team/resha.png";

const teamMember = [
  {
    name: "Chandra Salim ",
    role: "Direktur Utama",
    image: chandra,
  },
  {
    name: "Suprayoga ",
    role: "Komisaris Utama",
    image: suprayoga,
  },
  {
    name: "Didik Pramuji ",
    role: "Engineering Manager",
    image: imgtester,
  },
  {
    name: "Irfan Septian ",
    role: "Finance Manager",
    image: imgtester,
  },
  {
    name: "Teguh Jumadi ",
    role: "General Affair Manager",
    image: imgtester,
  },
  {
    name: "Yola Novia Marshanda ",
    role: "Technical Assistant",
    image: imgtester,
  },
  {
    name: "Abraham Dionisius A",
    role: "Reliability Engineer - Mech",
    image: dion,
  },
  {
    name: "A Thariq Suherman",
    role: "Reliability Engineer - Elec",
    image: imgtester,
  },
  {
    name: "M Gilang Dewantara",
    role: "Reliability Engineer - Mech",
    image: imgtester,
  },
  {
    name: "M Dwi Rosyidi",
    role: "Reliability Engineer - Mech",
    image: dwi,
  },
  {
    name: "Mochammad Resha",
    role: "Process Safety Engineer - Mech",
    image: resha,
  },
  {
    name: "Muslim Haqqon",
    role: "Mechanical engineer",
    image: imgtester,
  },
  {
    name: "Panji Ramajaya",
    role: "Mechanical Engineer",
    image: imgtester,
  },
  {
    name: "Farhan Hafiz",
    role: "Mechanical Engineer",
    image: imgtester,
  },
  {
    name: "Habil Tria Sakti",
    role: "IT Leader",
    image: imgtester,
  },
  {
    name: "Mochammad Nasir",
    role: "Backend Developer",
    image: imgtester,
  },
  {
    name: "Nadya Friska",
    role: "Backend Developer",
    image: imgtester,
  },
  {
    name: "Naufal Ariful A",
    role: "Frontend Developer",
    image: imgtester,
  },
  {
    name: "M Retian Faali",
    role: "Frontend Developer",
    image: retian,
  },
  {
    name: "M Hadi Nasution",
    role: "UI/UX",
    image: imgtester,
  },
  {
    name: "Fuadi Aiman",
    role: "UI/UX",
    image: imgtester,
  },

  {
    name: "A Kholiq Maulana",
    role: "OB",
    image: imgtester,
  },
];

function TeamComponent() {
  return (
    <div>
      {/* CRI LEADERSHIP */}
      <div className="my-10 py-6 grid justify-center gap-y-5 ">
        <div className="px-4">
          <h1 className="text-3xl font-semibold text-left py-6">CRI Team</h1>
        </div>
        <div className="grid grid-cols-4 gap-y-6 max-w-[1080px] max-md:grid-cols-2 max-md:gap-4 max-md:px-2">
          {teamMember.map((member, index) => (
            <div key={index} className="team-item">
              <div className="grid justify-center">
                <img className="" src={member.image} alt="" />
              </div>
              <div className="text-start px-6">
                <h1 className="font-semibold text-[#003478]">{member.name}</h1>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-4 gap-y-6 max-w-[1080px]">
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-item">
            <div className="grid justify-center">
              <img className="" src={imgtester} alt="" />
            </div>
            <div className="text-start px-6">
              <h1 className="font-semibold text-[#003478]">
                Ir. Chandra Salim, M.Sc., IPM, CMRP.
              </h1>
              <p>CEO</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TeamComponent;
