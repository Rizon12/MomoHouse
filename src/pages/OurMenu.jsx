import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function OurMenu() {
  const[product, setProducts] = useState([]);
   const navigate = useNavigate();
   const filterProduct = async () => {
        let res = await fetch("https://dummyjson.com/recipes");
        res = await res.json();
        // console.log(res.recipes);
        setProducts(res.recipes);
        
    };

    useEffect(()=>{
      filterProduct();
    },[]);

  return (
    <div>
      <Header />
      <div className='w-full h-fit  bg-gray-300'>
        {
          product.length > 0 ? <div className='flex flex-wrap justify-center  py-10 px-20 gap-5'>
            {
              product?.map((items)=>{
                return <div key={items.id} onClick={()=>{
                  navigate('/productsdescription',{state:items})
                }} className=' bg-white shadow-2xl shadow-gray-300'>
                  <div className='w-52  '>
                    <img src={items.image} alt="image"  />
                  </div>
                  <div className='p-2'>
                    <h1>{items.name}</h1>
                    <h1 className='flex gap-1.5  items-center'><FaRupeeSign /> {items.caloriesPerServing}</h1>
                    <div><FaStar /></div>
                  </div>

                </div>
              })
            }
          </div>:<div><h1>Data doesnot found.</h1></div>
        }

      </div>
      <Footer />
    </div>
  )
}

export default OurMenu