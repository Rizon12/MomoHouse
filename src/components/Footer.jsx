import React from "react";
import momo1 from '../assets/momo1.png'
import { NavLink } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


function Footer() {
    return (
        <div className="flex flex-col px-40 py-10  gap-8 shadow-2xl shadow-gray-800">
            <div className="flex   ">
                <div className="w-[1128px] h-[192px] p-4 space-y-2.5 text-justify">
                    <div><NavLink to='/' className="flex gap-1.5"><img src={momo1} width={40} /><h1 className="text-[25px] text-[#0C6967] font-bold">momos</h1></NavLink></div>
                    <p className="text-[#252D43] text-[16px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident voluptatem rerum commodi dolorum laborum nisi nobis, doloribus magnam omnis ducimus molestias optio, expedita assumenda tempora? Sequi beatae veniam natus illo.</p>
                </div>
                <div className="w-full flex justify-around p-4 ">
                    <div className="w-fit space-y-2.5">
                        <h1 className="text-[25px] text-[#0C6967] font-bold">momos</h1>
                        <div className="flex flex-col text-[#252D43] text-[16px]">
                            <NavLink to='/about'>About Us</NavLink>
                            <NavLink to='/menu'>Our Menu</NavLink>
                            <NavLink to='services'>Our Services</NavLink>
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="w-fit space-y-2.5 text-[#252D43] text-[16px]">
                        <h1 className="text-[25px] text-[#0C6967] font-bold">Legals</h1>
                        <div className="flex flex-col">
                            <a href="">Terms & Conditions</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Support</a>
                        </div>

                    </div>
                    <div className="w-fit space-y-2.5">
                        <h1 className="text-[25px] text-[#0C6967] font-bold">Follow Us</h1>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex justify-around items-center">
                                <div className='w-8 h-8 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7'><a href='https://www.instagram.com/'><BsInstagram size={18} /></a></div>
                                <div className='w-8 h-8 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7'><a href='https://www.tiktok.com/'><FaTiktok size={20} /></a></div>
                                <div className='w-8 h-8 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7'><a href='https://www.facebook.com/'><FaFacebookF size={20} /></a></div>

                            </div>
                            <div className="flex justify-around items-center">
                                <div className='w-8 h-8 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7'><a href='https://www.tiktok.com/'><FaLinkedinIn size={20} /></a></div>
                                <div className='w-8 h-8 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7'><a href='https://www.tiktok.com/'><FaTwitter size={20} /></a></div>
                                <div className='w-8 h-8 flex justify-center items-center bg-[#A6AEBB] text-white rounded-full hover:w-7 hover:h-7'><a href='https://www.tiktok.com/'><FaYoutube size={20} /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr></hr>
            </div>
            <div className="text-center ">Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.</div>

        </div>
    );
}

export default Footer;
