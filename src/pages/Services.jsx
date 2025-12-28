import Header from '../components/Header'
import Footer from '../components/Footer'
import serv from "../assets/service1.png"
import { RiVideoFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

function Services() {
  return (
    <div>
      <Header />
      <div>
        <div className='w-full h-screen flex justify-around items-center px-32'>
          <div className='w-[551px] h-[373px] space-y-10 '>
            <h1 className='text-5xl text-[#0C6967] font-allura'>Our Services</h1>
            <div className='w-full h-[122px] space-y-2 '>
              <p className='text-[#6B788E]'>KNOWING OUR CUSTOMERS NEEDS</p>
              <h1 className='text-[39px] font-bold'><span className='text-[#D95103]'>We're more than just momos.</span><br /> We're a full-service dining experience.</h1>
            </div>
          </div>
          <div className='w-[417px] h-[499px] '>
            <img src={serv} alt="image" />
          </div>
        </div>
        <div className="w-full h-[608px] relative bg-black/30 bg-[url(./assets/service2.png)] ">
          <div className='w-[837px] absolute top-96 left-28 text-white  '>
            <div className='w-full h-[97px] '>
              <h1 className='text-[49px] font-bold'>Dine With Us</h1>
              <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
            </div>
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
        <div className='w-full h-[1176px] flex flex-col justify-around items-center border'>
          <div className='w-[1128px] h-[448px] flex justify-between border'>
            <div className='w-[456px] h-[420px] border'></div>
            <div className='w-[552px] h-[448px] border'></div>
          </div>
          <div className='w-[1128px] h-[448px] flex justify-between border'>
            <div className='w-[552px] h-[448px] border'></div>
            <div className='w-[456px] h-[420px] border'></div>
          </div>
        </div>
        <div className='w-full h-[385px] border'>
          <div className='w-[1128px] h-[305px] border m-auto'></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services