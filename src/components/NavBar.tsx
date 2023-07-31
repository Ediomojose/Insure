import React from "react";
import Logo from "../assets/images/logo.svg";
import { HiBars3BottomRight } from "react-icons/hi2";
import {HiOutlineXMark} from "react-icons/hi2";
import {useState} from 'react';





const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <>
      <nav className=" p-5  bg-white shadow flex items-center justify-between md:px-14">
        <img src={Logo} alt="Insure logo" />
        <ul className={`w-full h-full left-0 py-4 pl-7 absolute top-[70px]  z-[2] bg-gray-400 flex flex-col  md:flex md:flex-row md:items-center md:z-auto md:static md:bg-inherit md:w-auto md:py-0 md:pl-0 md:opacity-100 transition-all ease-in duration-500 ${navBar?'block':'hidden'}`}>
          <li className="my-6 md:mx-4  md:my-0">
            <a href="#" className="text-sm hover:text-gray-800 duration-500">
              HOW WE WORK
            </a>
          </li>
          <li className="my-6 md:mx-4  md:my-0">
            <a href="#" className="text-sm hover:text-gray-800 duration-500">
              BLOG
            </a>
          </li>
          <li className="my-6 md:mx-4  md:my-0">
            <a href="#" className="text-sm hover:text-gray-800 duration-500">
              ACCOUNT
            </a>
          </li>
          <li className="my-6 md:mx-4  md:my-0">
            <a
              href="#"
              className="text-sm hover:bg-gray-800 hover:text-white duration-500 md:px-4 md:py-2 md:border-solid md:border-2 md:border-gray-800"
            >
              VIEW PLANS
            </a>
          </li>
        </ul>
        <span
          className="block text-4xl cursor-pointer md:hidden"
          onClick={()=>setNavBar(!navBar)}
        >
          {navBar ?(<HiOutlineXMark/>):(<HiBars3BottomRight />) }
          
        </span>
      </nav>
    </>
  );
};

export default NavBar;
