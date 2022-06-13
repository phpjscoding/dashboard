import React from "react"
import { MdOutlineCancel } from "react-icons/md"
import { Button } from "antd"
import { chatData } from "../data/dummy"
import StateContext from "../context/ContextProvider"
const Chat = () => {
  const currentColor =
    "bg-orange-500 border-none hover:bg-orange-600 text-white hover:text-white"
  return (
    <div>
      <div className="">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">
                {item.message}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}
        <Button block="true" className={currentColor}>
          All messages
        </Button>
      </div>
    </div>
  )
}

export default Chat
