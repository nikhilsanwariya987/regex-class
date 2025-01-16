import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoArchive } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
function SideBar() {
  return (
    <div className="h-screen w-24 p-4 flex flex-col border-r-2 ">
      <div className="mb-2">
        <FaHome/>
        <div/>
        <FaCalendar />
      </div>
      <div className="p-3">
        <FaGraduationCap />
        <IoArchive />
      </div>
      <div className="p-3">
        <FaGear />
      </div>
    </div>
  );
}

export default SideBar;
