import React from "react"
import { Header } from "../components"
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy"
import { Table } from "antd"
const Orders = () => {
  return (
    <div>
      <Header category="order" title="Orders" />
      {ordersGrid.map((item, index) => (
        <p key={index}> {console.log(item)} </p>
      ))}
    </div>
  )
}

export default Orders
