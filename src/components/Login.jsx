import { useState } from "react"


export function Login(){
    //State para capturar información
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    //State para capturar el error
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault() //Previene refrescar la página
        if(user === "" || password === ""){
            setError(true)
            return
        }
    }

    return (
        <>
        <div className="wrapper"
        onSubmit={handleSubmit}>
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
                    <div className="input-box">
                        <header>Iniciar Sesion</header>
                        <div className="input-field">
                            <input type="text" className="input" 
                            id="correo" required autoComplete="off"
                            value={user} onChange={e => setUser(e.target.value)} />
                            <label htmlFor="correo">Correo Electronico</label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input" id="contraseña" required autoComplete="off" 
                            value={password} onChange={e => setPassword(e.target.value)} />
                            <label htmlFor="contraseña">Contraseña</label>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="submit" value="Ingresar" />
                        </div>
                        <div className="signin">
                            <span>¿No tienes una cuenta? <a href="a">Registrate aquí</a></span>
                            {error && <span>Todos los campos son obligatorios</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}