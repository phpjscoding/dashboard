import { createContext, useState } from "react"

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(initialState)
  const [currentColor, setCurrentColor] = useState("orange")
  const test = "this is a context provider"
  return (
    <StateContext.Provider
      value={{ test, isClicked, setIsClicked, currentColor, setCurrentColor }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateContext
