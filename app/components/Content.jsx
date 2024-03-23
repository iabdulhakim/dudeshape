const Content = () => {
  return (
    <div className="bg-[#154444] md:bg-transparent">
      <div className="container text-white flex flex-col md:flex-row pt-[40px] md:pt-0">
        <img
          src="./content-img-desktop.png"
          alt=""
          className="hidden md:flex mt-[-1px]"
        />
        <div className=" md:w-full md:bg-[#154444] w-full md:pt-[100px] md:pl-[100px] md:leading-12">
          <h1 className="text-[32px] md:text-[56px] max-w-[340px] md:max-w-[675px] font-bold leading-12">
            We Help You Make Modern Furniture
          </h1>
          <p className="text-[12px] md:text-[20px] leading-5 md:leading-7 mt-3 md:mt-5  max-w-[300px] md:max-w-[490px]">
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials{" "}
          </p>
          <button className="bg-white self-start text-[#154444] text-[14px] md:text-[20px] hover:bg-[#154444] hover:text-white font-medium px-8 md:px-9 md:py-4 py-[10px] mt-8 md:mt-9 border-2 border-white">
            Explore More
          </button>
        </div>
        <img
          src="./content-img-phone.png"
          alt=""
          className="w-[310px] md:hidden self-center mt-10"
        />
      </div>
    </div>
  );
};

export default Content;
