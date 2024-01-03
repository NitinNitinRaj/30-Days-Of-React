import pic from "../images/asabeneh.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

export default function UserCard() {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "JS",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Flask",
    "Django",
    "NumPy",
  ];

  const renderedSkills = skills.map((skill) => (
    <div className="rounded-md bg-teal-400 text-white px-4 py-1 m-2 font-semibold">
      {skill}
    </div>
  ));
  return (
    <div className="w-11/12 mx-auto p-8 mt-5 rounded-md bg-slate-200 font-sans">
      <img src={pic} alt="Pic" className="w-40 rounded-full" />
      <div className="flex pt-5 pb-4">
        <h3 className=" pr-2 font-semibold ">ASABENEH YETAYEH</h3>
        <FaCheckCircle className="text-teal-400 mt-1 " />
      </div>

      <p className="text-sm text-gray-700">Senior Developer, Finland</p>

      <div className="my-2">
        <p className="font-semibold py-4">SKILLS</p>
        <div className="flex flex-wrap">{renderedSkills}</div>
      </div>
      <div className="flex mt-6">
        <CiClock2 className="mt-1 mr-1" />
        <p className="text-sm">Joined on Aug 30, 2020</p>
      </div>
    </div>
  );
}
