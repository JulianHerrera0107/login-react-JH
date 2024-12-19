
export function Login(){


    
    return (
        <>
        <div class="wrapper">
        <div class="container main">
            <div class="row">
                <div class="col-md-6 side-image">
                    {/*<!---Logo Escappy--->*/}
                    <img src="/img/logo.png" alt="Logo Escappy Travel"></img>
                    <div class="text">
                        <p>Viajes sorpresa y personalizados según tus deseos. <i>Escappy Travel</i></p>
                    </div>
                </div>
                <div class="col-md-6 right">
                    <div class="input-box">
                        <header>Iniciar Sesion</header>
                        <div class="input-field">
                            <input type="text" class="input" id="correo" required autocomplete="off"></input>
                            <label for="correo">Correo Electronico</label>
                        </div>
                        <div class="input-field">
                            <input type="password" class="input" id="contraseña" required autocomplete="off"></input>
                            <label for="contraseña">Contraseña</label>
                        </div>
                        <div class="input-field">
                            <input type="submit" class="submit" value="Ingresar"></input>
                        </div>
                        <div class="signin">
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