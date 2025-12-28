import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import food from "../assets/Frame16.png";
import Group from "../assets/Group.png";
import Footer from "../components/Footer";
import { RiVideoFill } from "react-icons/ri";
import FilterProducts from "../components/FliterProducts";
import chef from "../assets/Chef.png";
import quality from "../assets/Quality.png";
import party from "../assets/party.png";
import GoToMenuPage from "../components/GoToMenuPage";
import rectriangle from '../assets/Rectangle.png';
import { TiArrowRight } from "react-icons/ti";
import { TiArrowLeft } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Home() {

  return (
    <div className="w-full h-screen bg-[url(./assets/Ellipse.png)] bg-contain bg-right bg-no-repeat ">
      <Header />
      <div className="w-full h-[90vh] flex justify-between shadow">
        <div className="w-[50vw] flex  justify-center mt-40 ">
          <div className="w-fit h-fit space-y-4">
            <p className="text-gray-500">RESTAURANT</p>
            <h1 className="flex items-center text-4xl font-bold ">
              The
              <div className="w-32 h-20 flex items-center justify-center bg-[url(./assets/one.png)] bg-contain bg-center bg-no-repeat text-white  ">
                #One
              </div>
            </h1>
            <h1 className="text-4xl font-bold">
              Momo <span className="text-[#D95103]">Restaurant</span>
            </h1>
            <p className=" text-[20px] font-bold">
              More than{" "}
              <span className="text-[#D95103] text-[25px]">
                <NavLink to="/menu">20+ Varities</NavLink>
              </span>{" "}
              of momo available for you
            </p>
            <div className="w-fit">
              <NavLink
                to="/menu"
                className="flex justify-center items-center bg-[#0C6967] text-white px-6 py-2 rounded-full"
              >
                Explore for more{" "}
                <FaArrowRight size={20} className="mt-1 ml-2.5" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="w-[50vw] h-full">
          <div className="w-full h-full flex items-center   ">
            <img src={food} className=" " />
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex items-center  px-40 gap-20 shadow">
        <img src={Group} width="490px" height="598px" />
        <div className="space-y-5">
          <p className="text-3xl font-bold">
            Why Customers <span className="text-[#D95103]">Love Us</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut
            molestias veritatis, numquam eveniet atque, aspernatur fugiat rem a
            nemo, harum dignissimos aliquam tempora porro! Facere, perferendis?
            Odit, dolore mollitia!
          </p>
          <div className="w-fit">
            <NavLink
              to="/menu"
              className="flex justify-center items-center bg-[#0C6967] text-white px-6 py-2 rounded-full"
            >
              Explore Our Story{" "}
              <FaArrowRight size={20} className="mt-1 ml-2.5" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* This is Filter content  */}
      <div className="w-full h-screen  flex flex-col items-center shadow">
        <div>
          <FilterProducts />
        </div>
      </div>

      <div className="shadow">
        <div className="w-full h-[207px] flex items-center justify-center text-[39px] ">
          <p>
            <span className="text-[#D95103]">We Offer People</span> The Service
            They Want
          </p>
        </div>
        <div className="w-full h-[640px] flex flex-col justify-center items-center text-white  bg-[url(./assets/bgboy.jpg)] bg-cover">
          <p className="text-[49px]">Process behind the making</p>
          <p className="text-sm">
            See how only chefs cooks only the best momos
          </p>
          <NavLink to='https://www.youtube.com/' target="_blank">
            <button className="flex items-center  px-6 py-2 bg-[#0C6967] text-white mt-10 rounded-full">
              <RiVideoFill size={20} className="mr-2" />
              Watch the Video
            </button>
          </NavLink>
        </div>
        <div className="w-full h-[512px] flex flex-col justify-center items-center">
          <div className="w-[1128px] h-[289px] flex gap-6  ">
            <div className="w-[360px] h-full flex flex-col justify-center items-center gap-4 ">
              <img src={quality} alt="quality" width={72} height={72} />
              <h1 className="w-[181px] h-[31px]  text-2xl font-bold text-center">Quality Food</h1>
              <p className="w-[280px] h-[52px] text-[16px] text-center ">Only the best food with top quality products and ingredients</p>
            </div>
            <div className="w-[360px] h-full flex flex-col justify-center items-center gap-4 ">
              <img src={party} alt="party" width={72} height={72} />
              <h1 className="w-[181px] h-[31px]  text-2xl font-bold text-center">Private Party</h1>
              <p className="w-[280px] h-[52px] text-[16px] text-center ">Get the best food for your private events and gatherings</p>
            </div>
            <div className="w-[360px] h-full flex flex-col justify-center items-center gap-4 ">
              <img src={chef} alt="chef" width={72} height={72} />
              <h1 className="w-[181px] h-[31px]  text-2xl font-bold text-center">Catering</h1>
              <p className="w-[280px] h-[52px] text-[16px] text-center ">Get the best food for any occasions and gatherings</p>
            </div>
          </div>
          <div >
            <GoToMenuPage />
          </div>

        </div>
      </div>
      <div className="w-full h-screen flex  justify-center gap-40 items-center shadow">
        <div className="w-[576px] h-[350px] flex flex-col justify-between ">
          <div className="w-118px] h-[85px] shrink-0 ">
            <h3 className="text-3xl font-bold">200+ <span className="text-[#D95103]">Happy Customers</span></h3>
            <h5 className="text-[#0C6967]  font-bold">What our customers say about us</h5>
          </div>
          <div className="w-[576px] h-[175px] flex flex-col justify-between text-justify text-2xl space-y-4 shrink-0 ">
            <h5 className="italic">“Only the best momo you can find in the market. Different Varieties of momo to choose from. Will be visiting again soon”</h5>
            <h5 className="font-bold ">Livia Dias</h5>
          </div>
          <div className="w-[112px] h-[48px] flex gap-1.5 shrink-0 ">
            <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full shadow shadow-gray-400"> <TiArrowLeft size={25} /> </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full shadow shadow-gray-400"> <TiArrowRight size={25} /> </div>
          </div>
        </div>
        <div className="w-[456px] h-[576px] ">
          <img src={rectriangle} alt="image" />
        </div>
      </div>

      <div className="w-full h-[1116px] flex flex-col items-center justify-center gap-10 ">
        <div className="w-[528px] h-[85px] text-center space-y-2.5">
          <h1 className="text-3xl font-bold">Get <span className="text-[#D95103]">In Touch</span></h1>
          <p className="text-[#0C6967] text-xl font-bold shrink-0">Our Friendly team would love to hear from you</p>
        </div>
        <div className="w-[1128px] h-[847px] flex items-center justify-center gap-5 shadow-2xl shadow-gray-500 shrink-0">

          <div className="w-[461px] h-[807px] text-white rounded-2xl p-8 space-y-15 bg-[#0C6967]">
            <div className="w-[396px] h-[96px] space-y-2 ">
              <h1 className="flex gap-2 font-semibold text-[20px]"><FaLocationDot size={25} />Our Address</h1>
              <p className="text-[20px] font-thin italic">New Baneshwor, Kathmandu, Bagmati, <br /> Nepal</p>
            </div>
            <div className="w-[396px] h-[144px] space-y-2">
              <div className="flex font-semibold text-[20px] gap-2"><FaPhoneAlt size={25} />Our Contact</div>
              <div className="w-[300px] h-[96px] flex  gap-16  text-[20px] font-thin italic">
                <div>
                  <h1>Mobile</h1>
                  <h1>980 5689789</h1>
                  <h1>9841 275897</h1>
                </div>
                <div>
                  <h1>Landline</h1>
                  <h1>01-4783972</h1>
                </div>
              </div>
            </div>
            <div className="w-[396px] h-[108px] space-y-2">
              <div className="flex font-semibold text-[20px] gap-2"><FaRegClock size={25} />Our Service Time</div>
              <div className="w-[300px] h-[60px] flex  gap-16 text-[20px] font-thin italic">
                <div>
                  <h1>MON_FRI</h1>
                  <h1>10 am - 8 pm </h1>

                </div>
                <div>
                  <h1>SAT - SUN</h1>
                  <h1>Closed</h1>
                </div>
              </div>
            </div>
            <div className="w-[291px] h-[80px] flex flex-col justify-between text-[20px] font-thin italic mt-32 ">
              <div>Get in touch in social networks</div>
              <div className="w-[128px] h-[32px] flex justify-between ">
                <NavLink to='https://www.facebook.com/' target="_blank"><FaFacebookF color="#0C6967" className="w-[32px] h-[32px] p-0.5 bg-white  rounded-full" /></NavLink>
                <NavLink to='https://www.instagram.com/' target="_blank"><BsInstagram className="w-[32px] h-[32px] p-0.5" /></NavLink>
                <NavLink to='https://www.tiktok.com/' target="_blank"><FaTiktok className="w-[32px] h-[32px] p-0.5" /></NavLink>
              </div>
            </div>
          </div>

          <div className="w-[587px] h-[807px]  flex flex-col items-center justify-around ">
            <div className="w-[539px] h-[620px] flex flex-col justify-between  ">
              <div className="w-[539px] h-[83px] flex gap-3 ">
                <div className="flex-1 ">
                  <label htmlFor="">First Name</label>
                  <input type="text" name="name" required className="w-full shadow shadow-gray-500 rounded-md py-4 px-2" />
                </div>
                <div className="flex-1 ">
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="lastname" defaultValue="" required className="w-full shadow shadow-gray-500 rounded-md py-4 px-2" />
                </div>
              </div>
              <div className="w-[539px] h-[83px]  ">
                <label htmlFor="">Email</label>
                <input type="email" name="email" required className="w-full shadow shadow-gray-500 rounded-md py-4 px-2" />
              </div>
              <div className="w-[539px] h-[83px]  ">
                <label htmlFor="">What can we do for you </label>
                <select name="option" id="option" className="w-full shadow shadow-gray-500 rounded-md py-4 px-2">
                  <option>Choose</option>
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='C'>C</option>
                </select>
              </div>
              <div className="w-[539px] h-[83px]  ">
                <label htmlFor="">Phone Number</label>
                <div className="flex">
                  <select name="" id="" className="flex-1 shadow shadow-gray-500 rounded-md px-2 py-4 ">
                    <option value="+977">+977</option>
                    <option value="+1">+1</option>
                    <option value="+2">+44</option>
                  </select>
                  <input type="number" name="number" required className="flex-5 shadow shadow-gray-500 rounded-md px-2 py-4" />
                </div>
              </div>
              <div className="w-[539px] h-[192px]  ">
                <label htmlFor="">Message</label>
                <textarea className="w-full h-full shadow shadow-gray-500 rounded-md px-2 py-4"></textarea>
              </div>
            </div>
            <div className="w-[256px] h-[59px]  ">
              <button className="w-[256px] h-[59px]  bg-[#D95103] rounded-4xl">Send Message</button>
            </div>
          </div>
        </div>

      </div>


      <div className="shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4810592043896!2d85.34317037553929!3d27.671522976203068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sne!2snp!4v1761900223856!5m2!1sne!2snp"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
