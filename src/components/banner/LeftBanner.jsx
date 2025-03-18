import { useTypewriter, Cursor } from "react-simple-typewriter";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full  lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>

        <h1 className="text-6xl font-bold text-white">
          Hi, I am{" "}
          <span className="text-designColor capitalize">Sagar Thapa</span>
        </h1>

        <h2 className="text-4xl font-bold text-white ">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a full-stack developer (BSc.CSIT, 8th semester) skilled in React,
          Redux Toolkit, TypeScript, Angular, Node.js, Express, Java, Spring
          Boot, MongoDB, and PostgreSQL.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between ">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me In
          </h2>

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

        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="grid grid-cols-5 gap-4">
            <span className="bannerIcon">
              <FaHtml5 />
            </span>

            <span className="bannerIcon">
              <FaCss3 />
            </span>

            <span className="bannerIcon">
              <FaBootstrap />
            </span>

            <span className="bannerIcon">
              <SiTailwindcss />
            </span>

            <span className="bannerIcon">
              <FaJs />
            </span>

            <span className="bannerIcon">
              <SiGreensock />
            </span>

            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>

            <span className="bannerIcon">
              <FaAngular />
            </span>

            <span className="bannerIcon">
              <FaJava />
            </span>

            <span className="bannerIcon">
              <BiLogoSpringBoot />
            </span>

            <span className="bannerIcon">
              <FaNodeJs />
            </span>

            <span className="bannerIcon">
              <DiPostgresql />
            </span>

            <span className="bannerIcon">
              <DiMongodb />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
