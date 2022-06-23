import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Tooltip, Popover, Drawer, Button } from "antd"
import { Cart, Chat, Notification, UserProfile } from "."
import avatar from "../data/avatar.jpg"
import StateContext from "../context/ContextProvider"
import { useContext } from "react"
import SideBar from "./Drawer"
import { MdOutlineCancel } from "react-icons/md"

const NavBar = () => {
  const currentColor = "orange"
  const { isClicked, setIsClicked } = useContext(StateContext)
  const [cartSlide, setCartSlide] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const hide = () => {
    setShowNotifications(false)
  }

  const handleVisibleChange = (newVisible) => {
    setShowNotifications(newVisible)
  }

  const hideChat = () => {
    setShowChat(false)
  }

  const handleChat = (x) => {
    setShowChat(x)
  }

  return (
    <div className="p-2 md:ml-6 md:mr-6 relative">
      <div className="flex justify-end">
        <Tooltip title="Menu" onClick={() => setShowMenu(true)}>
          <div className="relative text-xl rounded-full p-3 hover:bg-light-gray mr-auto">
            <AiOutlineMenu color={currentColor} />
          </div>
        </Tooltip>

        <Popover
          content={<Notification setShowNotifications={setShowNotifications} />}
          title="Notifications"
          trigger="click"
          visible={showNotifications}
          onVisibleChange={handleVisibleChange}
        >
          <Tooltip title="Notifications">
            <div className="relative text-xl rounded-full p-3 hover:bg-light-gray">
              <RiNotification3Line color={currentColor} />
              <span
                style={{ background: currentColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
              />
            </div>
          </Tooltip>
        </Popover>

        <Drawer
          mask={false}
          title="Menu"
          placement="left"
          closable={true}
          onClose={() => setShowMenu(false)}
          visible={showMenu}
          key="left"
          closeIcon={<MdOutlineCancel />}
        >
          <SideBar />
        </Drawer>
        <Popover
          content={
            <div>
              <a onClick={hideChat}>
                <MdOutlineCancel />
              </a>
              <div>
                <Chat />
              </div>
            </div>
          }
          title="Messages"
          trigger="click"
          visible={showChat}
          onVisibleChange={handleChat}
        >
          <Tooltip title="Chat">
            <div className="relative text-xl rounded-full p-3 hover:bg-light-gray">
              <BsChatLeft />
              <span
                style={{ backgroundColor: currentColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
              />
            </div>
          </Tooltip>
        </Popover>
        <Popover content={<UserProfile />}>
          <Tooltip title="Profile" placement="top">
            <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="user-profile"
              />
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{" "}
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Michael
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </Tooltip>
        </Popover>
        <Tooltip title="Cart" onClick={() => setCartSlide(true)}>
          <div className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <FiShoppingCart color={currentColor} />
          </div>
        </Tooltip>
        <Drawer
          title="Cart"
          placement="right"
          closable={true}
          onClose={() => setCartSlide(false)}
          visible={cartSlide}
          key="right"
        >
          <div>
            <Cart />
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default NavBar
