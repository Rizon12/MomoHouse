import { NavLink, Outlet } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import momo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { cartContext } from "../store/CartProvider";

function Header() {
  const { state } = useContext(cartContext);
  const totalItem = state?.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  const nav = useNavigate();

  return (
    <div>
      <div className="w-full h-[10vh] flex justify-between px-14 items-center bg-white  shadow">
        <div className="flex items-center gap-15 text-gray">
          <div className="w-fit flex  items-center emfont-bold">
            <NavLink to="/">
              <img src={momo} width={100} className="hover:p-0.5" />
            </NavLink>
          </div>
        </div>
        <div className=" flex space-x-10 text-[#6B788E]  text-sm">
          <NavLink to="/about" className="hover:underline">
            About Us
          </NavLink>
          <NavLink to="/menu" className="hover:underline">
            Our Menu
          </NavLink>
          <NavLink to="/services" className="hover:underline">
            Our Services
          </NavLink>
          <NavLink to="/advice" className="hover:underline">
            Allergy Advice
          </NavLink>
          <NavLink to="/cartpage" className="hover:underline">
            {totalItem > 0 ? <p  className="bg-orange-500 rounded-lg flex justify-center items-center text-center"  >{totalItem}</p> : null}

            <BsFillCartCheckFill size={25} />
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-6 h-6 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7">
            <NavLink to="https://www.facebook.com/" target="_blank">
              <FaFacebookF size={15} />
            </NavLink>
          </div>
          <div className="w-6 h-6 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7">
            <NavLink to="https://www.instagram.com/" target="_blank">
              <BsInstagram size={13} />
            </NavLink>
          </div>
          <div className="w-6 h-6 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7">
            <NavLink to="https://www.tiktok.com/" target="_blank">
              <FaTiktok size={15} />
            </NavLink>
          </div>

          <button
            className="px-4 py-1 bg-orange-500 rounded-2xl text-white hover:underline"
            onClick={() => {
              nav("/contact");
            }}
          >
            Contact Us
          </button>

          <div className="relative group">
            <div>
              <NavLink to="/profile">
                <img
                  src=" https://freesvg.org/img/abstract-user-flat-4.png"
                  width={30}
                  className="border rounded-full hover:p-0.5"
                />
              </NavLink>
            </div>
            <div className="absolute hidden group-hover:flex flex-col items-center text-white bg-black/50 top-8 -right-2/3 w-32 p-2 rounded shadow-lg space-y-2">
              <NavLink to="/profile">Profile </NavLink>
              <p>About</p>
              <p>Login</p>
              <p>Signin</p> p
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
