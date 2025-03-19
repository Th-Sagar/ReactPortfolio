import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
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
            2003 - 2025
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className=" mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor (BSc. CSIT)"
            subTitle="Trinity International College (2020-2025)"
            result="Processing"
            des="A bachelor's degree or baccalaureate is an undergraduate academic degree awarded by colleges and universities upon completion of a course of study lasting three to seven years. In some institutions and educational systems, some bachelor's degrees can only be taken as graduate or postgraduate degrees after a first degree has been completed."
          />
          <ResumeCard
            title="+2 Computer Science "
            subTitle="Oxford College Of Engineering & Management (2017 - 2019) "
            result="3.85/4.00"
            des=" Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education, third-level or tertiary education, is an optional final stage of formal learning that occurs after completion of secondary education."
          />
          <ResumeCard
            title="SEE "
            subTitle="Marigold English Boarding School (2012-2017) "
            result="3.95/4.00"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
