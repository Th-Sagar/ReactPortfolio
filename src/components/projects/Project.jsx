import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets";

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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="HOSPITAL MANAGEMENT SYSTEM"
          des="A Hospital Management System (HMS) is a software solution that manages patient records, appointments, billing, and staff operations. It uses Angular for the frontend, Spring Boot for the backend, and MongoDB for storing data, offering a scalable and efficient system for hospital management. "
          src={projectOne}
          github="https://github.com/Th-Sagar/Hospital_Management_System_Backend"
          live="https://angular-spring-hms.netlify.app"
        />
        <ProjectsCard
          title="HOSTEL BOOKING"
          des="A Hostel Booking System is a platform that allows users to browse, book, and manage hostel accommodations. It uses React for the frontend, Node.js for the backend, and MongoDB for storing data, providing a seamless and scalable solution for hostel management."
          src={projectTwo}
          github="https://github.com/Th-Sagar/Hostel_Backend"
          live="https://extraordinary-twilight-89def2.netlify.app/"
        />
        <ProjectsCard
          title="FILE UPLOADING SYSTSEM"
          des="A File Uploading System enables users to upload, manage, and retrieve files. It uses Next.js for the frontend, Node.js for the backend, MongoDB for storing file metadata, and Cloudinary for image storage, providing an efficient and scalable solution for file management. "
          src={projectThree}
          github="https://github.com/Th-Sagar/Elib"
          live="https://e-bookslibrary.netlify.app"
        />

        <ProjectsCard
          title="TODO APP"
          des="A Todo App allows users to create, manage, and track tasks. It uses Vite for the frontend, Spring Boot for the backend, and MongoDB for storing task data, offering a fast, scalable, and efficient solution for task management. "
          src={projectFour}
          github="https://github.com/Th-Sagar/TodoList-Spring-"
          live="https://todo12-list.netlify.app"
        />
      </div>
    </section>
  );
};

export default Project;
