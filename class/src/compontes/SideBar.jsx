import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoArchive } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
function SideBar() {
  return (
    <div className="h-screen w-24  flex flex-col border-r-2 ">
      <div className="p-4 text-2xl">
        <FaHome />
      </div>
     
      <div className="p-4 text-2xl">
        <FaCalendar />
      </div>

      <div className="border  mt-2"></div>
      <div className="p-4  text-2xl">
        <FaGraduationCap />
      </div>
      <div className="border mt-3"></div>
      <div className="p-4 text-2xl">
        <IoArchive />
      </div>
    
      <div className="p-4 text-2xl ">
        <FaGear />
      </div>
    </div>
  );
}

export default SideBar;
