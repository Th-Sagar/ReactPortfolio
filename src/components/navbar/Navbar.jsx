import { Portlogo } from "../../assets/index";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { navLinksdata } from "../../constants";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img className="h-20" src={Portlogo} alt="logo" />
      </div>
      <div>
        <ul className="hidden md:inline-flex items-center gap-6 lgl:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}{" "}
              </Link>{" "}
            </li>
          ))}
        </ul>

        <span
          onClick={() => setshowMenu(!showMenu)}
          className="text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>

        {showMenu && (
          <div className="w-[80%] md:hidden h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col  gap-8 py-2 relative">
              <div>
                <img className="w-32" src={Portlogo} alt="logo" />
                <p className="text-sm text-gray-400 mt-5">
                  I am a full-stack developer (BSc.CSIT, 8th semester) skilled
                  in React, Redux Toolkit, TypeScript, Angular, Node.js,
                  Express, Java, Spring Boot, MongoDB, and PostgreSQL.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    key={item._id}
                  >
                    <Link
                      onClick={() => setshowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/Th-Sagar"
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

              <span
                onClick={() => setshowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
