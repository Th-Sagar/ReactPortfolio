import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
 
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 gap-10 xl:gap-0 lgl:flex-row flex flex-col items-center border-b-[1px] font-titleFont border-b-black"
    >
        <LeftBanner/>
        <RightBanner/>
     

     
    </section>
  );
};

export default Banner;
