import { Login } from "./components/login"
import { Home } from "./components/Home"
import { useState } from "react"

export default function App() {
  const [usuario, setUsuario] = useState([])

  return (
    <>
      {
        !usuario.length > 0
          ? <Login setUsuario={setUsuario} />
          : <Home usuario={usuario} setUsuario={setUsuario}/>
      }
    </>
  )
}

