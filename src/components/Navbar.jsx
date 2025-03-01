import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 px-6">
      <div className="flex ">
        <h2 className="text-3xl font-extrabold logo px-">Imaan AI</h2>
      </div>
      <ul className="flex gap-4 px-6 rounded-full py-2 border-2 max-sm:hidden">
        <li className="hover:scale-125 hover:bg-black hover:text-white rounded-full transition-all duration-300 px-2">
          Home
        </li>
        <li className="hover:scale-125 hover:bg-black hover:text-white rounded-full transition-all duration-300 px-2">
          Home
        </li>
        <li className="hover:scale-125 hover:bg-black hover:text-white rounded-full transition-all duration-300 px-2">
          Home
        </li>
        <li className="hover:scale-125 hover:bg-black hover:text-white rounded-full transition-all duration-300 px-2">
          Home
        </li>
      </ul>
      <div className="flex gap-6">
        <Link to={"/"}>
          <button className="hover:scale-125 transition-all duration-300 max-sm:hidden">
            Home
          </button>
        </Link>
        <button className="bg-black text-white py-1 px-4 rounded-full hover:scale-125 transition-all duration-300">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
