const About = () => {
  return (
    <div className="container pt-[100px] flex flex-col md:gap-[100px] md:items-center md:flex-row-reverse pb-[80px]">
      <div className="">
        <h2 className="text-[24px] font-semibold md:text-[32px] md:font-bold">About Us</h2>
        <p className="text-[12px] font-medium mt-3 md:mt-5 md:text-[18px] md:max-w-[430px]">
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials{" "}
        </p>
        <ul className="flex flex-col list-none mt-8 gap-5 md:gap-8">
          <li className="flex gap-4 md:gap-7">
            <img src="./quality-icon.svg" alt="" className="self-start md:w-[50px]" />
            <span className="max-w-[150px] md:max-w-[310px]">
              <h4 className="text-[14px] font-bold md:text-[20px]">Best Quality</h4>
              <p className="text-[10px] md:text-[18px] font-medium mt-1">
                All of our furniture uses the best materials and choices
              </p>
            </span>
          </li>
          <li className="flex gap-4 md:gap-7">
            <img src="./secure-icon.svg" alt="" className="self-start md:w-[50px]" />
            <span className="max-w-[150px] md:max-w-[310px]">
              <h4 className="text-[14px] font-bold md:text-[20px]">100% Secure</h4>
              <p className="text-[10px] md:text-[18px] font-medium mt-1">
                All of our furniture uses the best materials and choices
              </p>
            </span>
          </li>
          <li className="flex gap-4 md:gap-7">
            <img src="./free-icon.svg" alt="" className="self-start md:w-[50px]" />
            <span className="max-w-[150px] md:max-w-[310px]">
              <h4 className="text-[14px] font-bold md:text-[20px]">Free Shpping</h4>
              <p className="text-[10px] md:text-[18px] font-medium mt-1">
                All of our furniture uses the best materials and choices
              </p>
            </span>
          </li>
        </ul>
      </div>
      <img src="./about-img.png" alt="" className="mt-10 self-center md:self-start md:w-[630px] " />
    </div>
  );
};

export default About;
