import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import { logo } from "../../assets";


const Last = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid  grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-20">
      <div className="w-full h-full  flex flex-col gap-8 ">
        <img className="w-32" src={logo} alt="logo" />
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
      <div className="w-full h-full  ">
        <h3 className="text-3xl uppercase text-designColor tracking-wide">
          Quick Link
        </h3>

        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              About{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Portfolio{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Services{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Blog{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Contact{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
        </ul>
      </div>
      <div className="w-full h-full  ">
        <h3 className="text-3xl uppercase text-designColor tracking-wide">
          Resources
        </h3>

        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Authentication{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              System Status{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Terms of service{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Pricing{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Over Right{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
        </ul>
      </div>
      <div className="w-full h-full  ">
        <h3 className="text-3xl uppercase text-designColor tracking-wide">
          Developers
        </h3>

        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Documentation{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Authentication{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              API Reference{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Support{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
          <li>
            {" "}
            <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
              {" "}
              Open Source{" "}
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Last;
