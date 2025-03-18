import { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, seteducationData] = useState(true);
  const [skillData, setskillData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      {" "}
      <div className="flex justify-center items-center text-center"></div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => seteducationData(true) & setskillData(false)}
            className={`${
              educationData
                ? " border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => seteducationData(false) & setskillData(true)}
            className={`${
              skillData
                ? " border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {/* {experienceData && <Experience />}
      {achievementsData && <Achievements />} */}
    </section>
  );
};

export default Resume;
