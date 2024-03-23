const Trust = () => {
  return <div className="pt-[60px] md:pt-[120px] container">
    <p className=" text-[18px] md:text-[32px] text-center font-semibold">Trusted by 20,000+ companies</p>
    <div className="flex justify-between mt-6 md:mt-10 md:gap-[100px] md:ml-9  md:mr-9">
        <img src="./mastercard.svg" alt="" className="w-[28px] md:w-[67px] cursor-pointer" />
        <img src="./airbnb.svg" alt="" className="w-[72px] md:w-[125px] cursor-pointer" />
        <img src="./uber.svg" alt="" className="w-[50px] md:w-[98px] cursor-pointer" />
        <img src="./paypal.svg" alt="" className="w-[63px] md:w-[107px] cursor-pointer" />
        <img src="./vise.svg" alt="" className="w-[60px] md:w-[89px] cursor-pointer" />
        <img src="./stripe.svg" alt="" className="w-[60px] md:w-[97px] hidden md:block cursor-pointer" />
    </div>
  </div>;
};

export default Trust;
