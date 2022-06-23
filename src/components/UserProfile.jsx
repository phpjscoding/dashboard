import React from "react"
import { MdOutlineCancel } from "react-icons/md"

import { Button } from "antd"
import { userProfileData } from "../data/dummy"
import useStateContext from "../context/ContextProvider"
import avatar from "../data/avatar.jpg"

const UserProfile = () => {
  const { currentColor } = "bg-orange-500"

  return (
    <div className="nav-item  bg-white dark:bg-[#42464D] p-2 rounded-lg w-72">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        {/* <Button className="bg-[rgb(153, 171, 180)]">
          <MdOutlineCancel />
        </Button> */}
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Lee Anderson{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400"> Admin </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            info@shop.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button className={`${currentColor} rounded`}>Logout</Button>
      </div>
    </div>
  )
}

export default UserProfile
