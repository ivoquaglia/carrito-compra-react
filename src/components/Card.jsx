import { useState } from "react"

export const Card = ({ imagen, titulo, descripcion, precio, id, handleAgregar, handleQuitar, handleAumentar, handleDisminuir}) => {

    const [adeded, setAdeded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdeded(true)
    }

    const clickQuitar = () => {
        handleQuitar()
        setAdeded(false)
    }


    return (
        <div className="tarjeta" key={id}>
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="trajeta-precio">{precio}</p>
            {adeded
            ? <button type="button" className="boton-quitar" onClick={clickQuitar}>Quitar del carrito</button>
            : <button type="button" className="boton-agregar" onClick={clickAgregar}>Agregar del carrito</button>
            }
            </div>

        </div>
    )
}
