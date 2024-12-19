import { useState } from "react"


export function Login({ setLogin }) {
    //State para capturar información
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    //State para capturar el error
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault() //Previene refrescar la página
        //console.log(e)
        if (user === "" || password === "") {
            setError(true)
            return
        }
        setError(false)

        setLogin([user])

    }

    return (
        <>
            <div className="wrapper">
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">
                            {/*<!---Logo Escappy--->*/}
                            <img src="/img/logo.png" alt="Logo Escappy Travel"></img>
                            <div className="text">
                                <p>Viajes sorpresa y personalizados según tus deseos. <i>Escappy Travel</i></p>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            {/* Cambiamos el div por un form */}
                            <form className="input-box" onSubmit={handleSubmit}>
                                <header>Iniciar Sesión</header>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        className="input"
                                        id="correo"
                                        required
                                        autoComplete="off"
                                        value={user}
                                        onChange={(e) => setUser(e.target.value)}
                                    />
                                    <label htmlFor="correo">Correo Electrónico</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="password"
                                        className="input"
                                        id="contraseña"
                                        required
                                        autoComplete="off"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="contraseña">Contraseña</label>
                                </div>
                                <div className="input-field">
                                    <input type="submit" className="submit" value="Ingresar" />
                                </div>
                                <div className="signin">
                                    <span>
                                        ¿No tienes una cuenta? <a href="a">Regístrate aquí</a>
                                    </span>
                                    {error && <p>Todos los campos son obligatorios</p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}