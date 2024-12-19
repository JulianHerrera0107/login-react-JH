export function Home({ usuario, setUsuario }) {

    const handleLogout = () => {
        setUsuario([])
    }
    return (
        <>
            <div className="inicio">
                <h1>Bienvenido {usuario}</h1>
                {/*<img src="/img/costa-caribe.jpg"></img>*/}
                <button onClick={handleLogout}>Cerrar Sesion</button>
            </div>
        </>
    )
}