import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext } from 'react';
import { cartContext } from '../store/CartProvider';
import { NavLink } from 'react-router-dom';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { state, dispatch } = useContext(cartContext);
  console.log(state);

  const totalItem=state.reduce((acc,item)=>{
    return acc+item.qty
  },0)
  console.log(totalItem)
  const totalPrice=state.reduce((acc,item)=>{
    return acc + item.qty * item.caloriesPerServing
  },0)
  console.log(totalPrice)
  let ShippingFee=100;
  const Navigate=useNavigate();

  return (
    <div>
      <Header />
      <div className='w-full h-[90vh] flex justify-center items-center px-5  bg-gray-100  '>
        {
          state?.length > 0 ?
            <div className='w-[90vw] h-[80vh] flex justify-center gap-5'>
              <div className='py-5  overflow-auto space-y-4 '>
                {
                  state?.map((items) => {
                    return <div className='px-3  flex p-2 w-[60vw] justify-between bg-white'>
                      <div className='w-[450px]  flex gap-10'>
                        <img className='w-40' src={items.image} alt="img not found" />
                        <h1 className='text-xl mt-5'>{items.name}</h1>
                      </div>

                      <div className='mt-5 text-xl text-center space-y-5 text-orange-500'>
                        <h1>Rs {items.caloriesPerServing}</h1>
                        <button  onClick={()=>{
                          dispatch({
                            type:"Delete",
                            payLoad:{id:items.id}
                          })
                        }}><RiDeleteBin7Fill size={20} color='' /></button>
                      </div>
                      <div className=' h-fit flex gap-1.5  mt-5'>
                        <div><button className='px-2 py-1 bg-gray-100' onClick={()=>{
                          dispatch({
                            type:"Decrement",
                            payLoad:{id:items.id}
                          })
                        }}>-</button></div>
                        <div className='px-4 py-1 bg-gray-100'>{items.qty}</div>
                        <div><button onClick={()=>{
                          dispatch({
                            type : "Increment",
                            payLoad : {id:items.id},
                          })
                        }} className='px-2 py-1 bg-gray-100'>+</button></div>

                      </div>
                    </div>
                  })
                }
              </div>
              <div className="Order_Summary mt-5 bg-white w-fit h-80  p-3 space-y-3 text-center ">
                <div>
                  <h1 className="text-2xl">Order Summary</h1>
                </div>
                <div className=" flex justify-between "  >
                  <p>Subtotal ({totalItem} items)</p>
                  <p className="font-bold">{totalPrice} </p>
                </div>
                <div className=" flex justify-between "  >
                  <p>Shipping Fee</p>
                  <p className="font-bold">{ShippingFee}</p>
                </div>
                <div className="space-x-2">
                  <input className="outline-none border p-2" type="text" placeholder="Enter voucher code" />
                  <button className="bg-[#25a5d8] py-2 w-24 text-white"  >APPLY</button>
                </div>
                <div className=" flex justify-between font-bold "  >
                  <p>Total </p>
                  <p className="text-orange-400">{totalPrice+ShippingFee} </p>
                </div>
                <div>
                  <button
                  onClick={()=>{
                    Navigate("/payment");
                  }}
                  className="bg-orange-500 w-80 p-2 text-white uppercase">Procced To CheckOut ({totalItem})</button>
                </div>
                <button className="bg-orange-500 w-80 p-2 text-white uppercase" onClick={()=>{
                  dispatch({
                    type: "ClearCart"
                    
                  })
                }}>Clear All Cart</button>
              </div>

            </div> :
            <div className='w-96  m-auto space-y-10 text-center mt-20'>

              <h1 className='text-2xl'>There is no product found.</h1>
              <NavLink to="/menu" className="bg-orange-500 py-2 px-4 text-white font-bold text-xl rounded-2xl">Go To Shopping</NavLink>

            </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default CartPage

