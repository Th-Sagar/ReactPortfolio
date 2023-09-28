import { contactImg } from "../../assets";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] flex flex-col gap-8 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne justify-center p-4 lgl:p-8 rounded-lg">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImage"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white ">Sagar Thapa</h3>

        <p className=" text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>

        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          aliquam nihil veniam commodi deserunt expedita nesciunt voluptatem
          reprehenderit est repellendus modi, quae inventore delectus labore
          reiciendis sed molestias dolorem consequuntur odio harum eaque, ut ab.
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
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>

        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
