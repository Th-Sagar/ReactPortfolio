const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex relative justify-center items-center">
      <img
        className="w-[300px] h-[400px]  lgl:w-[500px] lgl:h-[680px] z-10"
        src="src\assets\images\Port.png"
        alt="bannerImg"
      />

      <div className="absolute bottom-0 w-[350px] h-[200px] lgl:w-[500px] lgl:h-[350px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
