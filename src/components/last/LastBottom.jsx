const LastBottom = () => {
  let date = new Date().getFullYear();
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        &copy; {date} . All right reserved by Sagar Thapa
      </p>
    </div>
  );
};

export default LastBottom;
