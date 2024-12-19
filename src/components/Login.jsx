
export function Login(){


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
                    <div className="input-box">
                        <header>Iniciar Sesion</header>
                        <div className="input-field">
                            <input type="text" className="input" id="correo" required autoComplete="off"></input>
                            <label htmlFor="correo">Correo Electronico</label>
                        </div>
                        <div className="input-field">
                            <input type="password" className="input" id="contraseña" required autoComplete="off"></input>
                            <label htmlFor="contraseña">Contraseña</label>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="submit" value="Ingresar"></input>
                        </div>
                        <div className="signin">
                            <span>¿No tienes una cuenta? <a href="a">Registrate aquí</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}