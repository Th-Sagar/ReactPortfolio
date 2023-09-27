import { useState } from "react";
import Title from "../layouts/Title";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {

  const [educationData, seteducationData] = useState(true)
  const [skillData, setskillData] = useState(false);
  const [experienceData, setexperienceData] = useState(false);
  const [achievementsData, setachievementsData] = useState(false);


  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      {" "}
      <div className="flex justify-center items-center text-center">
        <Title
          title="3+ YEARS OF EXPERIENCE IN WEB DEVELOPMENT"
          des="My Resume"
        />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              seteducationData(true) &
              setskillData(false) &
              setexperienceData(false) &
              setachievementsData(false)
            }
            className={`${
              educationData
                ? " border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              seteducationData(false) &
              setskillData(true) &
              setexperienceData(false) &
              setachievementsData(false)
            }
            className={`${
              skillData
                ? " border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>

          <li
            onClick={() =>
              seteducationData(false) &
              setskillData(false) &
              setexperienceData(true) &
              setachievementsData(false)
            }
            className={`${
              experienceData
                ? " border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              seteducationData(false) &
              setskillData(false) &
              setexperienceData(false) &
              setachievementsData(true)
            }
            className={`${
             achievementsData
                ? " border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            {" "}
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementsData && <Achievements />}
    </section>
  );
};

export default Resume;
