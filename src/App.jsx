import "./App.css"
import "antd/dist/antd.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FiSettings } from "react-icons/fi"
import { Tooltip, Drawer } from "antd"
import { useState } from "react"
import { MdOutlineCancel } from "react-icons/md"

import { NavBar, Footer, SideBar, ThemeSettings } from "./components"
import {
  ECommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages"

const App = () => {
  const [themeSettings, setThemeSettings] = useState(false)

  return (
    <section className="bg-green-400">
      <BrowserRouter>
        <div className="relative">
          <div className="fixed right-4 bottom-4 z-index[1000]">
            <Tooltip title="Settings">
              <button
                onClick={() => setThemeSettings(true)}
                className="text-3xl p-3 hover:drop-shadow-lg hover:bg-light-gray"
                style={{ backgroundColor: "cyan", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>

          <Drawer
            title="Theme Settings"
            placement="right"
            closable={true}
            onClose={() => setThemeSettings(false)}
            visible={themeSettings}
            width="270"
            key="right"
            closeIcon={<MdOutlineCancel />}
          >
            theme settings
          </Drawer>
          <div className=" nav-bar fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <NavBar />
          </div>
          <div className="routes">
            <Routes>
              <Route path="/" element={<ECommerce />} />
              <Route path="/ecommerce" element={<ECommerce />} />
              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/employees" element={<Employees />} />
              {/* apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </section>
  )
}

export default App
