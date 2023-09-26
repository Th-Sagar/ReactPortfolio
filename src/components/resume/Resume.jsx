import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      {" "}
      <div className="flex justify-center items-center text-center">
        <Title
          title="6+ MONTHS OF EXPERIENCE IN WEB DEVELOPMENT"
          des="My Resume"
        />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>

          <li className="resumeLi">Experience</li>

          <li className="resumeLi"> Achievements</li>
        </ul>
      </div>
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px] "> 1998 - 2010</p>

        <h2 className="text-4xl font-bold">Education Quality</h2>
      </div>
      <div className="mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10" >
        <ResumeCard
          title="Bachelor (BSc. CSIT)"
          subTitle="Trinity International College (2020-2025)"
          result="3.45/4.00"
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
    </section>
  );
};

export default Resume;
