import GoToMenuPage from "../components/GoToMenuPage";
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

function FliterProducts() {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    const navigation = useNavigate();

    const filterProduct = async () => {
        let res = await fetch("https://dummyjson.com/recipes");
        res = await res.json();
        // console.log(res.recipes);
        setProducts(res.recipes);
        let filtered = res.recipes.filter((items) => {
            return items.cuisine == "Italian";
        })
        setFilterProducts(filtered);
    }

    const showFilterProduct = (types) => {
        let filtered = products.filter((items) => {
            return items.cuisine == types;
        });
        setFilterProducts(filtered);
    };


    useEffect(() => {
        filterProduct();
    }, []);

    const scrollRef = useRef(null);
    const scrollLeft = ()=>{
        scrollRef.current.scrollBy({
            left : -350,
            behavior : "smooth",

        });
    }
    const scrollRight = ()=>{
        scrollRef.current.scrollBy({
            left : 350,
            behavior : "smooth",

        });
    }
    // useEffect(()=>{
    //     console.log(products);
    // },[products])
    return (
        <div className='w-full h-screen flex flex-col  items-center justify-center'>
            <div className='space-y-5 text-center mb-5'>
                <h1 className='text-3xl font-bold'>Our <span className='  text-[#D95103]'>
                    Most Popular</span> Recipes

                </h1>
                <p className='space-y-5 text-sm text-[#6B788E]'>Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
            </div>
            <div className='w-[514px] h-[88px]  flex items-center justify-around'>
                <button onClick={() => {
                    showFilterProduct("Italian")
                }} className='px-4 py-1 border rounded-full'>Italian</button>
                <button onClick={() => {
                    showFilterProduct("Pakistani")
                }} className='px-4 py-1 shadow  rounded-full'>Pakistani</button>
                <button onClick={() => {
                    showFilterProduct("Mexican")
                }} className='px-4 py-1 shadow rounded-full'>Mexican</button>
            </div>
            
            {/* <div className="w-[1128px] h-[323px] flex items-center justify-center border">
                
                {filterProducts.length > 0?<div className="w-[952px] h-[323px] flex border">
                    {filterProducts?.map((items)=>{
                        return (
                            <div className="w-[288px] h-[323px]  shrink-0 ">
                                <div className="w-[288px] h-[256px] flex  justify-center items-center ">
                                    <img src={items.image} alt="img" height="189px" width="260px"/>
                                </div>
                                <div className="w-full h-[67px] flex flex-col items-center ">
                                    <h1>{items.name}</h1>
                                    <h1 className="flex"><FaIndianRupeeSign />{items.caloriesPerServing}</h1>
                                    <h1>{items.cuisine}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>:<div></div>}
            </div> */}

            {/* <Swiper
                slidesPerView={3}
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper w-[1128px] h-[323px] flex justify-center items-center border-8">


                {
                    filterProducts.map((items) => {
                        return <SwiperSlide>
                            <div className="w-[952px] h-[323px] flex flex-col border-8 border-amber-900">
                            <img src={items.image} alt="image" width={200}/>
                            {items.name}
                            </div>
                        </SwiperSlide>
                        
                    })
                }



            </Swiper> */}

            {/* <div className="w-[894px] h-[323px]  ">
                
                    <Swiper
                        slidesPerView={3}
                        pagination={{
                            type: 'progressbar',
                        }}
                        navigation={True}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            filterProducts.length > 0 ? <div>
                                {
                                    filterProducts?.map((items)=>{
                                        return <SwiperSlide>
                                            <div key={items.id}>
                                                <div className="w-[288px] h-[325px] ">
                                                    <div className="w-[288px] h-[257px] flex items-center justify-center ">
                                                        <img src={items.image } alt="" width={260} height={189} />
                                                    </div>
                                                    <div className="w-[288px] h-[68px] flex flex-col justify-center items-center font-bold ">
                                                        <h1>{items.name}</h1>
                                                        <h1 className="flex justify-center items-center gap-1.5"><FaIndianRupeeSign /><span className="text-[#D95103]">{items.caloriesPerServing}</span></h1>
                                                        <h1>{items.cuisine}</h1>
                                                    </div>
                                                </div>

                                            </div>
                                             </SwiperSlide>
                                    })
                                }
                            </div> : <div>Data Does not found</div>
                        }
                    </Swiper>
                
            </div> */}
            <div className="w-[1128px] h-[323px] flex justify-between ">
                <div className="w-[48px] h-full flex items-center  ">
                   
                        <button onClick={()=>{
                            scrollLeft();
                        }} className="w-[48px] h-[48px] rounded-full flex justify-center items-center shadow shadow-gray-400"><FaArrowLeft /></button>
                    
                </div>
                 <div  ref={scrollRef} className="w-[951px] h-fit overflow-x-auto scrollbar-hide  ">
                    {
                        filterProducts.length > 0 ? <div  className="flex gap-10  ">
                          {
                            filterProducts?.map((items)=>{
                                return <div onClick={()=>{navigation('/productsdescription',{state:items})}} key={items.id} className="w-[288px] h-fit shrink-0 ">
                                    <div className="w-[288px] h-[256px] flex justify-center items-center ">
                                        <img src={items.image} alt="" width={260} height={189} />
                                    </div>
                                    <div className="w-[288px] h-[67px] flex flex-col justify-center items-center font-bold ">
                                        <h1>{items.name}</h1>
                                        <h1 className="flex  items-center gap-1.5"><FaIndianRupeeSign /><span className="text-[#D95103]">{items.caloriesPerServing}</span></h1>
                                    </div>
                                </div>
                            })
                          }
                        </div> : <div> Data doesnot fetch. </div> 
                    }
                 </div>
                 <div className="w-[48px] h-full flex items-center ">
                    <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full shadow shadow-gray-400">
                        <button onClick={()=>{
                            scrollRight()
                        }}><FaArrowRight /></button>
                    </div>
                 </div>
            </div>

            <div>
                <GoToMenuPage />
            </div>
        </div>
    )
}

export default FliterProducts