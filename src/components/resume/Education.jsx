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

export default Education;
