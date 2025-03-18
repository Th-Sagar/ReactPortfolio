import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import {
  FaAngular,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMongodb, DiPostgresql } from "react-icons/di";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div
          className="py-6
       lgl:py-12 font-titleFont flex flex-col gap-4"
        >
          <p className="text-sm text-designColor tracking-[4px] ">
            {" "}
            2020 - Present
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        </div>
        <div className="flex justify-between gap-60 md:flex-row flex-col">
          <section>
            <div
              className="py-6
         lgl:py-12 font-titleFont"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Frontend</h2>
            </div>
            <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-14">
              <SkillCard title="HTML" logo={<FaHtml5 size={30} />} />
              <SkillCard title="CSS" logo={<FaCss3 size={30} />} />
              <SkillCard title="JAVASCRIPT" logo={<FaJs size={30} />} />
              <SkillCard title="REACT" logo={<FaReact size={30} />} />
              <SkillCard title="NEXT" logo={<SiNextdotjs size={30} />} />
              <SkillCard title="ANGULAR" logo={<FaAngular size={30} />} />
            </div>
          </section>

          <section>
            <div
              className="py-6
         lgl:py-12 font-titleFont"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Backend</h2>
            </div>
            <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-14">
              <SkillCard title="JAVA" logo={<FaJava size={30} />} />
              <SkillCard
                title="SPRING BOOT"
                logo={<BiLogoSpringBoot size={30} />}
              />
              <SkillCard title="NODEJS" logo={<FaNodeJs size={30} />} />
            </div>
          </section>

          <section>
            <div
              className="py-6
         lgl:py-12 font-titleFont"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Database</h2>
            </div>

            <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-14">
              <SkillCard title="MONGODB" logo={<DiMongodb size={30} />} />
              <SkillCard title="POSTGRESQL" logo={<DiPostgresql size={30} />} />
            </div>
          </section>
        </div>
      </div>

      {/* <div>
      <div
        className="py-6
       lgl:py-12 font-titleFont flex flex-col gap-4"
      >
        <p className="text-sm text-designColor tracking-[4px] ">
          {" "}
          2019 - 2023
        </p>

        <h2 className="text-3xl md:text-4xl  font-bold">Job Experience</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Sr. software Engineer"
          subTitle="Google Out Tech (2022-Present)"
          result="USA"
          des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up. We also care about the candidates who interview with us. We want to make sure that you have a positive experience at Google, where we believe in respectful interviews, and where you can expect to hear from us in a timely manner.."
        />
        <ResumeCard
          title="Web Developer & Trainer"
          subTitle="Apple Developer Team - (2021-2022) "
          result="Netherlands"
          des=" A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a job in the Netherlands can be a challenge. However, with persistence and patience, it's possible to find a job within three to six months of arriving in the country."
        />
        <ResumeCard
          title="Front-end Developer "
          subTitle="Microsoft (2019-2021) "
          result="Australia"
          des="Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services."
        />
      </div>
    </div> */}
    </motion.div>
  );
};

export default Skills;
