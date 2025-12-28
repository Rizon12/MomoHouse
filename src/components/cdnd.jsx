import React, { useContext } from "react";
import { CartContext } from "../store/CartProvider";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <div className="py-10  ">
      {state?.length > 0 ? (
        <div className=" flex px-10 space-x-4">
          <div className=" List_Product  border-red-600 space-y-3  p-5">
            {state?.map((cartItem) => {
              return (
                <div className="cart_item px-3  bg-white flex  p-2 w-[60vw] justify-between  ">
                  <div className="image  w-96    flex  gap-x-4 ">
                    <div>
                      <img className="w-20" src={cartItem.image} alt="" />
                    </div>
                    <div>
                      <h1>{cartItem.name}</h1>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-2xl text-orange-600">
                      {" "}
                      Rs.{cartItem.caloriesPerServing}
                    </h1>
                    <button>
                      <MdDelete size={30} color="red" />
                    </button>
                  </div>
                  <div className="flex   justify-center  gap-1 items-center">
                    <button className="w-7    hover:bg-gray-100   h-7 bg-gray-200">
                      -
                    </button>
                    <p className="w-7   hover:bg-gray-100   text-sm flex  justify-center items-center h-7 bg-gray-200">
                      {cartItem.qty}
                    </p>
                    <button className="w-7    hover:bg-gray-100   h-7 bg-gray-200">
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="Order_Summary   bg-white w-[900px] h-72  p-3 space-y-3 ">
            <div>
              <h1 className="text-2xl">Order Summary</h1>
            </div>
            <div  className=" flex justify-between "  >
              <p>Subtotal (0 items)</p>
              <p className="font-bold">Rs.0 </p>
            </div>
            <div  className=" flex justify-between "  >
              <p>Shipping Fee</p>
              <p className="font-bold">Rs.0</p>
            </div>
            <div className="space-x-2">
              <input className="outline-none border p-2" type="text" placeholder="Enter voucher code" />
              <button  className="bg-[#25a5d8] py-2 w-24 text-white"  >APPLY</button>
            </div>
            <div  className=" flex justify-between font-bold "  >
              <p>Total </p>
              <p className="text-orange-400">Rs.0 </p>
            </div>
            <div>
              <button className="bg-orange-500 w-80 p-2 text-white">Procced To CheckOut (0)</button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-96 m-auto mt-28  flex flex-col gap-5 p-5 items-center">
          <h1 className="text-2xl">There no product to show !</h1>
          <NavLink className="bg-orange-500 p-3 text-white" to="/menu">
            Shop Now
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default CartPage;