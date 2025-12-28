import React, { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Carousel = ({ data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth; // Scroll 1 full view
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
      >
        < FaArrowLeft />
      </button>

      {/* Scrollable Row */}
<div
  ref={scrollRef}
  className="flex overflow-x-auto no-scrollbar space-x-4 scroll-smooth"
>
  {data.map((item) => (
    <div
      key={item.id}
      className="flex-shrink-0 w-[300px] border rounded-lg p-3 bg-white shadow-sm"
    >
      {/* Image Container */}
      <div className="w-full h-[200px] overflow-hidden flex items-center justify-center bg-gray-100 rounded">
        <img
          src={item.images?.[0] || "https://via.placeholder.com/300x200"}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <p className="mt-2 font-semibold truncate">{item.title}</p>
      <p className="text-gray-600">${item.price}</p>
    </div>
  ))}
</div>


      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
