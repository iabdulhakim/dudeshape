const Subscribe = () => {
  return (
    <div className="container">
      <div className="bg-[#F4F6F6] mt-[170px] pt-[68px] pb-[56px]">
        <h3 className="text-[32px] text-[#222222] ml-auto mr-auto font-bold max-w-[605px] text-center">
          Subscribe to get the latest news about us
        </h3>
        <p className="text-[16px] font-medium text-[#22222] max-w-[493px] text-center ml-auto mr-auto mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore at dolore.
        </p>
        <form className="flex items-center bg-white w-[470px] mr-auto ml-auto mt-10 py-2 pr-5 pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <g clip-path="url(#clip0_2308_567)">
              <path
                d="M10.623 8.44841L16.017 11.8584V4.89441L10.623 8.44841Z"
                fill="#7F7F7F"
              />
              <path
                d="M0.0175781 4.89441V11.8584L5.41158 8.44841L0.0175781 4.89441Z"
                fill="#7F7F7F"
              />
              <path
                d="M15.0169 2.86646H1.01688C0.517875 2.86646 0.121875 3.23846 0.046875 3.71746L8.01687 8.96846L15.9869 3.71746C15.9119 3.23846 15.5159 2.86646 15.0169 2.86646Z"
                fill="#7F7F7F"
              />
              <path
                d="M9.70683 9.05251L8.29183 9.98451C8.20783 10.0395 8.11283 10.0665 8.01683 10.0665C7.92083 10.0665 7.82583 10.0395 7.74183 9.98451L6.32683 9.05151L0.0488281 13.0225C0.125828 13.4975 0.519828 13.8665 1.01683 13.8665H15.0168C15.5138 13.8665 15.9078 13.4975 15.9848 13.0225L9.70683 9.05251Z"
                fill="#7F7F7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2308_567">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.0175781 0.366455)"
                />
              </clipPath>
            </defs>
          </svg>
          <input type="text" className="ml-3" placeholder="Enter your email" />
          <button className="bg-[#244D4D] ml-auto text-white text-[16px] font-medium py-4 px-8 border-2 border-[#244D4D] hover:text-[#244D4D] hover:bg-white bo">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
