const EachFurniture = () => {
  return (
    <div className="container pt-[80px]">
      <ul className="flex justify-between">
        <li className="flex flex-col card1 pb-6">
          <img src="./our-furniture1.png" alt="" className="" />
          <div className="flex items-center justify-between pt-7 px-6">
            <p className="text-[20px] font-medium">White Swan Chair </p>
            <div className="flex gap-2 items-center">
              <button className="h-[26px] w-[28px] rounded-[99px] p-2 bg-[#ECF4FF]">
                <img src="./heart.svg" alt="" className="" />
              </button>
              <button className="h-[26px] w-[28px] rounded-[99px] p-2 bg-[#ECF4FF]">
                <img src="./share.svg" alt="" className="" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 mt-5">
            <h3 className="text-[24px] font-medium text-[#154444]">$40</h3>
            <button className="bg-[#244D4D] text-white text-[12px] font-medium py-[6px] px-4 border-2 border-[#244D4D] hover:text-[#244D4D] hover:bg-white bo">Buy Now</button>
          </div>
        </li>
        <li className="flex flex-col card1 pb-6">
          <img src="./our-furniture2.png" alt="" className="" />
          <div className="flex items-center justify-between pt-7 px-6">
            <p className="text-[20px] font-medium">White Swan Chair </p>
            <div className="flex gap-2 items-center">
              <button className="h-[26px] w-[28px] rounded-[99px] p-2 bg-[#ECF4FF]">
                <img src="./heart.svg" alt="" className="" />
              </button>
              <button className="h-[26px] w-[28px] rounded-[99px] p-2 bg-[#ECF4FF]">
                <img src="./share.svg" alt="" className="" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 mt-5">
            <h3 className="text-[24px] font-medium text-[#154444]">$40</h3>
            <button className="bg-[#244D4D] text-white text-[12px] font-medium py-[6px] px-4 border-2 border-[#244D4D] hover:text-[#244D4D] hover:bg-white bo">Buy Now</button>
          </div>
        </li>
        <li className="flex flex-col card1 pb-6">
          <img src="./our-furniture3.png" alt="" className="" />
          <div className="flex items-center justify-between pt-7 px-6">
            <p className="text-[20px] font-medium">White Swan Chair </p>
            <div className="flex gap-2 items-center">
              <button className="h-[26px] w-[28px] rounded-[99px] p-2 bg-[#ECF4FF]">
                <img src="./heart.svg" alt="" className="" />
              </button>
              <button className="h-[26px] w-[28px] rounded-[99px] p-2 bg-[#ECF4FF]">
                <img src="./share.svg" alt="" className="" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-6 mt-5">
            <h3 className="text-[24px] font-medium text-[#154444]">$40</h3>
            <button className="bg-[#244D4D] text-white text-[12px] font-medium py-[6px] px-4 border-2 border-[#244D4D] hover:text-[#244D4D] hover:bg-white bo">Buy Now</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EachFurniture;
