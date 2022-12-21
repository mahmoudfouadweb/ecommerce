import React, { useState } from "react";
import cart from "../images/icon-cart.svg";

const Right = () => {
  const [isClicked, setIsClicked] = useState(0);

  const clickIncreaseHandler = () => setIsClicked((prevState) => prevState + 1);

  const clickDecreaseHandler = () => {
    if (isClicked < 1) return;
    setIsClicked((prevState) => prevState - 1);
  };
  return (
    <div className="w-full">
      {" "}
      <h3 className=" text-[#ff7d1a] font-[700] text-base uppercase text-left mb-4">
        Sneaker Company
      </h3>
      <h1 className=" font-[700] text-5xl text-[#1D2026] text-left leading-[1.1] mb-10">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[#69707D] text-base text-left leading-8 mb-6 pr-4">
        These low-profile sneakers a re your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className=" relative flex gap-2 flex-wrap w-48 mb-4  ">
        <span className=" font-[700] text-[#1D2026] text-3xl">$125.00 </span>
        <span className="ml-6 p-[8px] bg-[#FFEEE2] rounded-xl text-[#FF7E1B] font-bold">
          50%
        </span>
        <span className="text-[#B6BCC8] font-bold line-through">$250.00</span>
      </div>
      <div className="flex p-4 pl-0  gap-6 ">
        <div className="flex bg-[#F6F8FD] w-44 rounded-xl justify-around items-center text-2xl font-bold cursor-pointer">
          <p className="text-[#FF7E1B]" onClick={clickDecreaseHandler}>
            -
          </p>
          <p>{isClicked && isClicked}</p>
          <p className="text-[#FF7E1B]" onClick={clickIncreaseHandler}>
            +
          </p>
        </div>
        <button
          type="button "
          className="flex gap-4 px-10 py-4 
         bg-[#FF7E1B] hover:bg-[#ffede0] hover:text-gray-800 text-white font-bold py-4 px-4  rounded-xl"
        >
          <img src={cart} alt="cart" className=" text-white " />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Right;
