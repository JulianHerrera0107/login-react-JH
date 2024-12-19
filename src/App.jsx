import { Login } from "./components/login"
import { Home } from "./components/Home"
import { useState } from "react"

export default function App() {
  const [login, setLogin] = useState([])

  return (
    <>
      <Login setLogin={setLogin} />
      <Home />
    </>
  )
}

