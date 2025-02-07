const Customers = () => {
  return (
    <div className="container pt-[120px] flex gap-[100px] items-center">
      <img src="./customers-img.png" alt="" className="" />
      <div className="">
        <h3 className="text-[32px] font-bold max-w-[535px] text-[#242424]">
          Our customers are verry importan to us
        </h3>
        <p className="text-[#383738] text-[20px] leading-7 mt-5">
          All of our furniture uses the best materials and choices for our
          customers.All of our furniture uses the best materials and choices for
          our customers.
        </p>
        <div className="mt-10 flex items-center gap-[10px]">
          <img src="./avatar.png" alt="" className="" />
          <span className="text-[16px] font-medium text-black">
            Mh Jibon
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <g clip-path="url(#clip0_2296_425)">
                  <path
                    d="M16.8919 6.73098C16.7871 6.407 16.4998 6.17689 16.1598 6.14625L11.5418 5.72693L9.71568 1.45277C9.58103 1.13953 9.27438 0.936768 8.93368 0.936768C8.59297 0.936768 8.28632 1.13953 8.15167 1.4535L6.32558 5.72693L1.7068 6.14625C1.36744 6.17762 1.08081 6.407 0.975463 6.73098C0.870114 7.05497 0.967406 7.41032 1.22413 7.63433L4.71482 10.6957L3.68549 15.2299C3.61017 15.5632 3.73957 15.9079 4.01619 16.1078C4.16488 16.2152 4.33883 16.2699 4.51425 16.2699C4.6655 16.2699 4.81553 16.2292 4.95017 16.1486L8.93368 13.7678L12.9157 16.1486C13.2071 16.3239 13.5744 16.3079 13.8504 16.1078C14.1272 15.9072 14.2564 15.5625 14.1811 15.2299L13.1518 10.6957L16.6425 7.63494C16.8992 7.41032 16.9972 7.05558 16.8919 6.73098Z"
                    fill="#FFB624"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2296_425">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.933594 0.593506)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="">4.8</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Customers;
