import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <Header />
      <div className="w-full h-[585px] flex flex-col items-center justify-center gap-8">
        <div className="text-[56px] text-[#0C6967] font-allura">
          Our Contact
        </div>
        <div className="w[659px]">
          <p className="font-light tetx-[#6B788E] text-center">GET IN TOUCH</p>
          <h1 className="font-bold text-2xl">
            <span className="text-[#D95103] ">Our Friendly Team</span> would
            love to hear from you
          </h1>
        </div>
        <div className="w-[1128px] h-[233px] text-[#101828] text-[16px] flex font-bold justify-between ">
          <div className="w-[360px] h-full flex flex-col gap-8 items-center justify-center   shadow-2xl ">
            <div className="w-[280px] h-[19px] text-[16px]  flex gap-2">
              <FaLocationDot color="#D95103" size={25} />
              LOCATION
            </div>
            <div className="w-[280px] h-[38px]  italic font-semibold">
              New Baneshwor -41201,
              <br /> Kathmandu, Bagmati, Nepal
            </div>
          </div>
          <div className="w-[360px] h-full flex flex-col gap-8 items-center justify-center  shadow-2xl">
            <div className="w-[280px] h-[19px] flex gap-2">
              <FaPhone color="#D95103" size={25} />
              PHONE
            </div>
            <div className="w-[280px] h-[38px] italic font-semibold">
              New Baneshwor -41201,
              <br /> Kathmandu, Bagmati, Nepal
            </div>
          </div>
          <div className="w-[360px] h-full flex flex-col gap-8 items-center justify-center  shadow-2xl ">
            <div className="w-[280px] h-[19px] flex gap-2">
              <FaClock color="#D95103" size={25} />
              SERVICE TIME
            </div>
            <div className="w-[280px] h-[38px] italic font-semibold ">
              New Baneshwor -41201,
              <br /> Kathmandu, Bagmati, Nepal
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1062px] flex gap-25 ">
        <div className="w-[611px] h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.6693798215333!2d85.34317037528358!3d27.671527727070682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1762151817695!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-[828px] h-full flex items-center justify-center ">
          <div className="w-[608px] h-[966px] flex flex-col items-center justify-center gap-10 shadow-xl">
            <div className="w-[528px] h-[111px] space-y-2.5 ">
              <h1 className="text-[31px] font-bold">
                Contact <span className="text-[#D95103]">Us</span>
              </h1>
              <p className="text-[#6B788E]">
                If you have any queries, send us a message. Our Friendly team
                would love to hear from you
              </p>
            </div>
            <div className="w-[528px] h-[620px] space-y-5 ">

              <div className="w-[528px] h-[83px] flex gap-3 ">
                <div className="flex-1 ">
                  <label htmlFor="">First Name</label>
                  <input type="text" name="name" required className="w-full shadow shadow-gray-500 rounded-md py-4 px-2" />
                </div>
                <div className="flex-1 ">
                  <label htmlFor="">Last Name</label>
                  <input type="text" name="lastname" value="" required className="w-full shadow shadow-gray-500 rounded-md py-4 px-2" />
                </div>
              </div>
              <div className="w-[528px] h-[83px]  ">
                <label htmlFor="">Email</label>
                <input type="email" name="email" required className="w-full shadow shadow-gray-500 rounded-md py-4 px-2" />
              </div>
              <div className="w-[528px] h-[83px]  ">
                <label htmlFor="">What can we do for you </label>
                <select name="option" id="option" className="w-full shadow shadow-gray-500 rounded-md py-4 px-2">
                  <option>Choose</option>
                  <option value='A'>A</option>
                  <option value='B'>B</option>
                  <option value='C'>C</option>
                </select>
              </div>
              <div className="w-[528px] h-[83px]  ">
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
              <div className="w-[528px] h-[192px]  ">
                <label htmlFor="">Message</label>
                <textarea className="w-full h-full shadow rounded-md px-2 py-4"></textarea>
              </div>


            </div>
            <div className="w-[528px] h-[59px] ">
              <div className="w-[256px] h-[59px]  text-left">
                <button className="w-[256px] h-[59px] text-white bg-[#D95103] rounded-4xl">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
