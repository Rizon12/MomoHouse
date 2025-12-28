import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Group from "../assets/Group8.png";
import { RiVideoFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="w-full h-[763px] flex justify-around items-center ">
        <div className="h-full">
          <div className="w-[552px] space-y-15  mt-40">
            <h1 className="text-[64px] text-[#0C6967] font-allura">About Us</h1>
            <div className="w-[552px] ">
              <p className="text-[#6B788E]">WE PRIDE OURSELF ON</p>
              <h1 className="text-[39px] font-bold">
                <span className="text-[#D95103]">
                  Our authentic momo recipes
                </span>{" "}
                passed down through generations
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[583px] h-[631px] ">
          <img src={Group} alt="image" />
        </div>
      </div>
      <div className="w-full h-[641px] relative bg-black/30 bg-[url(./assets/Image1.png)] bg-cover">
        <div className="w-[762px] h-[97px] absolute top-96 left-28   text-white ">
          <h1 className="text-[49px] font-bold">Process behind the making</h1>
          <p>
            See how we make momos that you like from only the best ingredients
          </p>
          <div>
            <NavLink to="https://www.youtube.com/" target="_blank">
              <button className="flex items-center  px-6 py-3 bg-[#0C6967] text-white mt-10 rounded-full">
                <RiVideoFill size={20} className="mr-2" />
                Watch the Video
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full h-[1920px] flex flex-col items-center justify-around">
        <div className="w-[1128px] h-[448px] relative flex justify-between ">
          <div className="w-[456px] h-[250px] ">
            <div className="w-full h-[94px] text-4xl font-bold ">
              Our momos are{" "}
              <span className="text-[#D95103]">
                made <br />
                with love
              </span>
            </div>
            <p className="text-[#6B788E]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="w-[264px] h-[191px] absolute left-[405px] top-[300px]  bg-[url(./assets/pngwing2.png)]"></div>
          <div className="w-[552px] h-[448px]  bg-[url('./assets/about1.png')] bg-cover"></div>
        </div>
        <div className="w-[1128px] h-[448px] relative flex justify-between ">
          <div className="w-[552px] h-[448px] bg-[url('./assets/about2.png')] bg-cover "></div>
          <div className="w-[263px] h-[170px] absolute top-[300px] left-[405px] bg-[url(./assets/pinwing4.png)]  bg-cover "></div>
          <div className="w-[456px] h-[270px] ">
            <h1 className="w-full h-[94px] text-4xl font-bold ">
              Taste the difference with <br />
              <span className="text-[#D95103]"> our handcrafted momos</span>
            </h1>
            <p className="w-full h-[160px] text-[#6B788E]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
        </div>
        <div className="w-[1128px] h-[448px] relative flex justify-between  ">
          <div className="w-[456px] h-[317px] flex flex-col ">
            <div className="w-full h-[141px] text-4xl font-bold ">
              <h1>
                Our momos are the perfect
                <span className="text-[#D95103]"> blend of tradition </span> and
                <span className="text-[#D95103]"> innovation</span>
              </h1>
            </div>
            <p className="w-[456px] h-[160px] text-[#6B788E] ">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="w-[358px] h-[238px] absolute left-[385px] top-[300px]  bg-[url(./assets/pinwing3.png)] bg-cover "></div>
          <div className="w-[552px] h-[448px]  bg-[url('./assets/about3.png')] bg-cover"></div>
        </div>
      </div>
      <div className="w-full h-[640px]  flex justify-between">
        <div className="w-full h-full flex justify-center items-center bg-[url('./assets/about5.png')] bg-cover">
          <div className="w-[576px] h-[413px] relative flex flex-col justify-between text-white ">
            <div>
              <p className=" text-[20px] ">
                <span className="text-7xl font-bold font-serif">"</span><br />
                Momo is not just about sustenance, it's about bringing people
                together and creating memories. At our restaurant, we strive to
                create a warm and inviting atmosphere where our guests can enjoy
                delicious momo, great company, and unforgettable experiences
              </p>
            </div>
            <div className="w-295px] h-[77px] space-y-1.5 font-bold ">
              <h1 className="text-4xl">Marcus Schleifer</h1>
              <h1 className="text-2xl">CEO</h1>
            </div>
            <div className="w-[112px] h-[48px] absolute left-auto right-0 top-[413px] flex justify-between ">
              <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full border">
                <button><FaArrowLeft size={20}/></button>
              </div>
              <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full border">
                <button><FaArrowRight size={20}/></button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[612px] h-full shrink-0 ">
          <img src={about4} alt="image" />
        </div>
      </div>
      <div className="w-full h-[897px] flex flex-col justify-around items-center py-20 border">
        <div className="w-[704px] h-[97px] text-center space-y-2 border">
          <h1 className="text-3xl font-bold">Meet <span className="text-[#D95103]">The Team</span></h1>
          <p className="font-bold text-[#0C6967]">Our talented team members who delivers only the best results</p>
        </div>
        <div className="w-[1128px] h-[512px] border"></div>
        <div className="w-[1128px] h-[48px] border"></div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
