import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] flex flex-col gap-8 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne justify-center p-4 lgl:p-8 rounded-lg">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white ">Sagar Thapa</h3>

        <p className=" text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>

        <p className="text-base text-gray-400 tracking-wide">
          I am a full-stack developer (BSc.CSIT, 8th semester) skilled in React,
          Redux Toolkit, TypeScript, Angular, Node.js, Express, Java, Spring
          Boot, MongoDB, and PostgreSQL.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">9812230600</span>
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">Sagarthapa98122@gmail.com</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me on</h2>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100052872153816"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Th-Sagar"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sagar-thapa-6470a0218/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
