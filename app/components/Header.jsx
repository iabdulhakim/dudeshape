const Header = () => {
  return (
    <header className="container pt-10 pb-10 md:pb-6 flex justify-between items-center">
      <a href="" className="text-[24px] font-bold text-[#244D4D]">
        DudeShape
      </a>
      <nav className="hidden md:flex items-center gap-[50px]">
        <a
          href=""
          className="text-black font-medium border-b-2 border-transparent hover:border-b-[#244D4D] text-[16px]"
        >
          Home
        </a>
        <a
          href=""
          className="text-black font-medium border-b-2 border-transparent hover:border-b-[#244D4D] text-[16px]"
        >
          About
        </a>
        <a
          href=""
          className="text-black font-medium border-b-2 border-transparent hover:border-b-[#244D4D] text-[16px]"
        >
          Features
        </a>
        <a
          href=""
          className="text-black font-medium border-b-2 border-transparent hover:border-b-[#244D4D] text-[16px]"
        >
          Contact
        </a>
      </nav>
      <div className="md:flex hidden items-center gap-7 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clip-path="url(#clip0_2084_33)">
            <path
              d="M10.5691 0.538086C4.74145 0.538086 0 5.27635 0 11.1001C0 16.9241 4.74145 21.6621 10.5691 21.6621C16.3971 21.6621 21.1382 16.9241 21.1382 11.1001C21.1382 5.27635 16.3971 0.538086 10.5691 0.538086ZM10.5691 19.7122C5.81723 19.7122 1.95122 15.8488 1.95122 11.1001C1.95122 6.35145 5.81723 2.48799 10.5691 2.48799C15.321 2.48799 19.187 6.35141 19.187 11.1001C19.187 15.8487 15.321 19.7122 10.5691 19.7122Z"
              fill="#244D4D"
            />
            <path
              d="M23.714 22.8576L18.1205 17.2678C17.7393 16.887 17.1221 16.887 16.7409 17.2678C16.3598 17.6484 16.3598 18.2659 16.7409 18.6464L22.3344 24.2362C22.525 24.4266 22.7745 24.5218 23.0242 24.5218C23.2736 24.5218 23.5234 24.4266 23.714 24.2362C24.0951 23.8556 24.0951 23.2381 23.714 22.8576Z"
              fill="#244D4D"
            />
          </g>
          <defs>
            <clipPath id="clip0_2084_33">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.520264)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clip-path="url(#clip0_2084_40)">
            <path
              d="M24.0004 17.8599H9.66016V20.5244H24.0004V17.8599Z"
              fill="#244D4D"
            />
            <path d="M24 11.1978H0V13.8623H24V11.1978Z" fill="#244D4D" />
            <path
              d="M14.3865 4.53491H0V7.19944H14.3865V4.53491Z"
              fill="#244D4D"
            />
          </g>
          <defs>
            <clipPath id="clip0_2084_40">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.520264)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className=" md:hidden dropdown dropdown-end">
        <div tabIndex={0} role="button" className="">
          <img src="./hamburger.svg" alt="" className="" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] menu p-4 pl-6 flex gap-2 shadow bg-base-100 rounded-box w-40"
        >
          <li className="text-[#244D4D] text-[18px] font-medium hover:font-semibold cursor-pointer">
            Home
          </li>
          <li className="text-[#244D4D] text-[18px] font-medium hover:font-semibold cursor-pointer">
            About
          </li>
          <li className="text-[#244D4D] text-[18px] font-medium hover:font-semibold cursor-pointer">
            Features
          </li>
          <li className="text-[#244D4D] text-[18px] font-medium hover:font-semibold cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
