import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="bg-white-100 flex justify-between p-2 border-2">
      <div className="flex gap-3">
        <div className="p-3 text-x hover:rounded-full">
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="flex gap-3 items-center">
          <img
            className="size-10"
            src="https://www.gstatic.com/classroom/logo_square_rounded.svg"
          ></img>
          <p className="text-[22px] text-gray-800 hover:border-b-2 hover:border-green-600 ">
            Classroom
          </p>
        </div>
      </div>

      <div className="flex gap-6 m-2">
        <div className="text-xl">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div>
          <img src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"></img>
        </div>
        <div className="">
          <img
            className="w-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjlsMCHm7Bs6JrgK7sO3hdjj9_7dHTfbdVw&s"
          ></img>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
