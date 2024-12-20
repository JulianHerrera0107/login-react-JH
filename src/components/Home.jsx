export function Home({ usuario, setUsuario }) {

    const handleLogout = () => {
        setUsuario([])
    }
    return (
        <>
            {/*<div className="inicio">
                <h1>Bienvenido {usuario}</h1>
                <img src="/img/costa-caribe.jpg"></img>
                <button onClick={handleLogout}>Cerrar Sesion</button>
            </div>*/}
            <div class="container-nav">
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos Escappy</a></li>
                        <li><a href="#">Contactanos</a></li>
                        <li><a href="#" onClick={handleLogout}>Cerrar Sesion</a></li>
                    </ul>
                </nav>
            </div>
            <section class="container-body">
                <h1>Bienvenido al Sistema - {usuario}</h1>
            </section>
        </>
    )
}