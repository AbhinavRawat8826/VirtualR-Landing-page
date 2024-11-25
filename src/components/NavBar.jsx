import React from "react";
import logo from '../assets/logo.png';
import{Menu,X} from 'lucide-react'
import { navItems } from "../constants";
import{useState} from 'react'




const NavBar = () => {

  const[togglemenu,settogglemenu]=useState(false)

  const togglenav=()=>{
  settogglemenu(!togglemenu)
}
  return (
    <nav className="sticky top-0 w-full z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center  gap-2">
            <img className='w-12 h-12' src={logo} alt="" srcSet="" />
            <span className="text-xl tracking-tight">
              VirtualR
            </span>
          </div>
          <ul className="hidden lg:flex space-x-10">
            {navItems.map((item, index) => (
              <li key={index} className="relative inline-block after:content-[''] after:absolute after:w-0  after:h-[2px]  after:top-[100%]  after:left-[0%] after:bg-white after:transition-all after:ease-in after:duration hover:after:w-full  ">
                <a href={item.link} className="text-white hover:text-white/80 cursor-pointer ">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center space-x-12">
          <button className=" py-2 px-3 border border-white rounded-md hover:bg-white hover:text-black">Sign-in</button>
          <button className=" py-2 px-3  rounded-md bg-gradient-to-tr from-orange-500 to-red-800">Create an account</button>
          </div>

          <div className="lg:hidden flex items-center justify-center">
             
              <button onClick={togglenav}>{togglemenu ?  <X/> : <Menu/>}</button>
            


          </div>

         


        </div>

         {
            togglemenu && <div className="lg:hidden fixed right-0 z-20 flex flex-col items-center justify-center p-12 w-full  bg-neutral-900">


               <ul>
                {navItems.map((item,index)=>(
                  <li key={index} className="py-4">
                    <a href={item.link} className="text-white hover:text-white/80 cursor-pointer ">{item.label}</a>
                  </li>
                ))}
               </ul>

          <div className=" flex-col items-center  space-x-6 my-2 lg:hidden">
          <button className=" py-2 my-2 xs:mx-16 ys:mx-0  px-3 bg-yellow-300 border border-white hover:bg-white hover:text-black">Sign-in</button>
          <button className=" py-2 px-3 bg-gradient-to-tr from-orange-500 to-red-800">Create an account</button>
          </div>

            </div>

            
            
          }
      </div>
    </nav>
  );
};

export default NavBar;
