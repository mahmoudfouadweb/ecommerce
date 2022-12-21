import React, { useState } from "react";
import product from "../images/image-product-1.jpg";
import cart from "../images/icon-cart.svg";

import product1 from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4-thumbnail.jpg";

const Preview = () => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => setIsActive((prevState) => !prevState);
  console.log(isActive);
  return (
    <div className="w-full gap-4 flex flex-col justify-center items-center">
      <div className="w-full">
        <img src={product} alt="project" className="w-full h-full rounded-xl" />
      </div>
      <ul className="flex gap-4 min-w-fit justify-between">
        <li onClick={clickHandler} className="w-1/5 h-full relative ">
          <img
            src={product1}
            alt="product"
            className="object-cover rounded-xl inset-0 border-[#FF7E1B] border  cursor-pointer"
          />
          {isActive && (
            <div className="absolute inset-0 bg-orange-100 bg-opacity-70" />
          )}
        </li>

        <li onClick={clickHandler} className="w-1/5 h-full relative ">
          <img
            src={product2}
            alt="product"
            className="  h-full rounded-xl  border-[#FF7E1B] border  cursor-pointer"
          />
          {isActive && (
            <div className="absolute inset-0 bg-orange-100 bg-opacity-70" />
          )}
        </li>

        <li onClick={clickHandler} className="w-1/5 h-full relative ">
          <img
            src={product3}
            alt="product"
            className="h-full rounded-xl  border-[#FF7E1B] border  cursor-pointer"
          />
          {isActive && (
            <div className="absolute inset-0 bg-orange-100 bg-opacity-70" />
          )}
        </li>

        <li onClick={clickHandler} className="w-1/5 h-full relative ">
          <img
            src={product4}
            alt="product"
            className=" h-full rounded-xl  border-[#FF7E1B] border  cursor-pointer"
          />
          {isActive && ( 
            <div className="absolute inset-0 bg-orange-100 bg-opacity-70" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Preview;
