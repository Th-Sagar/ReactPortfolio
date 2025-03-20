import { Port } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full md:w-1/2 flex relative justify-center items-center">
      <img
        className="w-[70%] max-w-[300px] h-auto md:max-w-[400px] lg:max-w-[500px] z-10"
        src={Port}
        alt="bannerImg"
      />

      {/* <div className="absolute bottom-0 w-[80%] max-w-[350px] h-[120px] md:max-w-[400px] lg:max-w-[500px] md:h-[150px] lg:h-[200px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
};

export default RightBanner;
