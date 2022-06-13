import React from "react"
import { MdOutlineCancel } from "react-icons/md"

import { chatData } from "../data/dummy"
import { Button } from "antd"
const [showNotifications, setShowNotifications] = useState(false)

const Notification = () => {
  const hideNotification = () => {
    setShowNotifications(false)
  }

  const { currentColor } = "bg-orange-400"

  return (
    <div className="nav-item  bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "
          >
            {" "}
            5 New
          </button>
        </div>
        <Button>
          <MdOutlineCancel />
        </Button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button>See all notifications</Button>
        </div>
      </div>
    </div>
  )
}

export default Notification
