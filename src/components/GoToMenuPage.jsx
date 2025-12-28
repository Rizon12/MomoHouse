import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function GoToMenuPage() {
    return (
        <div>
            <NavLink to="/menu">
                <button className="flex items-center  px-4 py-2 bg-[#0C6967] text-white mt-10 rounded-full">
                    Explore Our Menu <FaArrowRight size={20} className="mt-1 ml-2.5" />
                </button>
            </NavLink>
        </div>
    )
}

export default GoToMenuPage