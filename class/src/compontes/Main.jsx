import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

function Main() {
  const pro = [
    {
      title: " Cpp Intermedite1",
      name: "REGex Software",
      circle: "R",
      icon: "faUser",
      icons: "faFolder",
      image: "https://www.gstatic.com/classroom/themes/img_read.jpg",
    },
    {
      title: " Cpp SESSION",
      name: "Batch R",
      circle: "R",
      icon: "faUser",
      icons: "faFolder",
      image: "https://gstatic.com/classroom/themes/img_learnlanguage.jpg",
    },
    {
      title: "REACT NODE BATCH K",
      name: "REGex Software",
      circle: "R",
      icon: "faUser",
      icons: "faFolder",
      image: "https://www.gstatic.com/classroom/themes/img_bookclub.jpg",
    },
    {
      title: "Cpp Sessions+",
      name: "REGex Software",
      circle: "R",
      icon: "faUser",
      icons: "faFolder",
      image: "https://www.gstatic.com/classroom/themes/Honors.jpg",
    },
    // {
    //   title: "cpp LOGICAL",
    //   name: "REGex Software",
    //   circle: "R",
    //   icon: "faUser",
    //   icons: "faFolder",
    //   image: "https://www.gstatic.com/classroom/themes/img_read.jpg",
    // },
    // {
    //   title: "Big database",
    //   name: "REGex Software",
    //   circle: "R",
    //   icon: "faUser",
    //   icons: "faFolder",
    //   image: "https://www.gstatic.com/classroom/themes/img_read.jpg",
    // },
    {
      title: " C LOGICAL ",
      name: "REGex Software",
      circle: "R",
      icon: "faUser",
      icons: "faFolder",
      image: "https://www.gstatic.com/classroom/themes/SocialStudies.jpg",
    },
    {
      title: "Linux / Git",
      name: "REGex Software",
      circle: "R",
      icon: "faUser",
      icons: "faFolder",
      image: "https://www.gstatic.com/classroom/themes/Honors.jpg",
    },
  ];
  return (
    <>
      <div className="  flex gap-3  flex-wrap p-5 hover:shadow-xl transition duration-300">
        {pro.map((p, i) => (
          <div className="border-2 rounded-xl w-72 m-2 hover:shadow-xl hover:cursor-pointer">
            <div
              className="w-full bg-red-200 p-2  bg-cover bg-center rounded-xl "
              style={{ backgroundImage: `url(${p.image})` }}
            >
              <h4 className="text-xl text-white font-semibold inline-block hover:border-b-2 hover:border-white">
                {p.title}
              </h4>
              <h6 className="text-xs relative top-5 text-white font-semibold">
                {p.name}
              </h6>
              <div className="relative left-52 size-10 rounded-full bg-green-600 top-6  p-7 flex justify-center items-center  ">
                <h4 className="text-4xl text-center text-white ">{p.circle}</h4>
              </div>
            </div>

            <div className=" h-[100px] border-b-2 *:"></div>
            <div className="flex justify-between p-5">
              <div>
                {/* <FontAwesomeIcon icon={faUser} />
                  <FontAwesomeIcon icon={faEnvelope} /> */}
              </div>
              <div className="">
                <FontAwesomeIcon
                  icon={faUser}
                  className='className="text-yellow-500 text-xl'
                />
                <FontAwesomeIcon icon={faFolder} className=" text-xl pl-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
