import { Link, NavLink } from "react-router-dom"
import { SiShopware } from "react-icons/si"
import { MdOutlineCancel } from "react-icons/md"
import { links } from "../data/dummy"
import { Tooltip } from "antd"

const SideBar = () => {
  const ActiveLink = "text-orange-500 rounded-lg shadow-lg p-2"
  const NormalLink = "text-gray-800"

  return (
    <div className="flex flex-col">
      <Link
        to="/"
        onClick={() => {}}
        className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
      >
        <SiShopware />
        <span>Shoppy </span>
      </Link>
      <div className="mt-10">
        {links.map((item, index) => (
          <ul key={index}>
            <p className="text-gray-400 uppercase m-3 mt-4">{item.title}</p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                className={({ isActive }) =>
                  " capitalize text-md my-2 flex flex-col " +
                  (isActive ? ActiveLink : NormalLink)
                }
              >
                <span className="flex items-center">
                  {link.icon}
                  <span className="pl-4">{link.name}</span>
                </span>
              </NavLink>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default SideBar
