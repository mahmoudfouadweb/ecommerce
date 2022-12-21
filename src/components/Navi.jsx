import React from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

import { NavLink } from "react-router-dom";

const Navi = () => {
  return (
    <nav className="pb-8 border-b-2 flex items-center justify-between  mb-16">
      <div className="flex">
        <img src={logo} className=" mr-16 " />
        <ul className="flex  gap-8">
          {["Collections", " Men ", "Women", "About", "Contact", ""].map(
            (item, idx) => (
              <li className="" key={idx}>
                <NavLink to={item}>{item}</NavLink>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <img src={cart} alt="cart" className="w-[22px]" />
        <img src={avatar} alt="avatar" className="w-[50px]" />
      </div>
    </nav>
  );
};

export default Navi;
