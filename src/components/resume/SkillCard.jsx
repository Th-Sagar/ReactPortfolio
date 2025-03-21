const SkillCard = ({ title, logo, textColor }) => {
  return (
    <div className="w-full group flex ">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col gap-4 lgl:gap-0 lgl:flex-row justify-between lgl:items-center">
          <div>
            <h3
              className={`text-xl ${textColor} md:text-2xl font-semibold group-hover:text-white duration-500`}
            >
              {title}
            </h3>
          </div>
          <div>
            <p
              className={`px-4 py-2 text-designColor ${textColor} bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium`}
            >
              {logo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
