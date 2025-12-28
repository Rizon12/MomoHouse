import { useLocation } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useContext, useState } from "react";
import { IoMdShare } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { cartContext } from "../store/CartProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ProductsDescription() {
  const [increDecre] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const{dispatch}=useContext(cartContext)

  const { state } = useLocation();
  // console.log(state);
  return (
    <div>
      <Header />
    <div className="parent flex flex-col gap-5">
      <div className="main w-[80%] flex m-auto mt-10  shadow-2xl">
        <div className="product_image w-[25%]">
          <div className="single_image">
            <img src={state.image} alt="image" />
          </div>
          {/* <div className="multiple_image"> multiple image</div> */}
        </div>
        <div className="w-[80%] product_detail flex flex-col justify-between  border  p-5 ">
          <h1 className="text-3xl ">{state?.name}</h1>
          <div className="w-[80%] flex justify-between  border">
            <FaStar size={25} />
            <div className="flex justify-between gap-2.5 border">
              <IoMdShare size={25} />
              <GoHeart size={25} />
            </div>
          </div>
          <h1 className="text-[#D95103] text-2xl font-bold">Rs. {state?.caloriesPerServing}</h1>
          <div className="flex items-center gap-2.5">
            <h1>Quantity </h1>
            <button className="px-4 py-2 border" onClick={() => {
              if (quantity >= 2)
                setQuantity(quantity - 1)
            }}><FaMinus /></button>
            <h1 className="w-32 py-2 text-center border">{quantity}</h1>
            <button className="px-4 py-2 border" onClick={() => { setQuantity(quantity + 1) }}><FaPlus /></button>
          </div>
          <div className="space-x-2.5">
            <button className="px-4 py-2 text-white bg-blue-400 border">Buy Now</button>
            <button className="px-4 py-2 text-white bg-[#D95103] border" onClick={()=>{
              dispatch({type:"AddToCart", payload:state})
            }}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="description w-[80%] h-fit  shadow-2xl p-4 m-auto ">
        <div className="font-bold text-xl"> Product of {state.name} </div>
        <div className="w-full h-fit flex px-8 py-4">

          <div className=" px-5 border-r">
            <h1 className="text-2xl font-bold">Ingredients</h1>
            {
              state.ingredients?.map((items, index) => {
                return <li key={index}>{items}</li>
              })
            }
          </div>
          <div className="px-10 ">
            <h1 className="text-2xl font-bold">Instructions</h1>
            {
              state.instructions?.map((items, index) => {
                  return <li key={index}>{items}</li>
                })
            }
          </div>
        </div>
      </div>
      {/* <div className="feedback">feedback</div> */}
    </div>
    <Footer />
    </div>
  )
}

export default ProductsDescription