import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne,projectTwo,projectThree } from "../../assets";

const Project = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-3 gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA APP"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          src={projectOne}
        />
        <ProjectsCard
          title="E-COMMERCE APP"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          src={projectTwo}
        />
        <ProjectsCard
          title="CHATTING APP"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          src={projectThree}
        />
        <ProjectsCard
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          src={projectThree}
        />
        <ProjectsCard
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          src={projectTwo}
        />
        <ProjectsCard
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea porro laudantium qui reiciendis deleniti? "
          src={projectOne}
        />
      </div>
    </section>
  );
};

export default Project;
