import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"

export const CompraPage = () => {

const { productos } = useContext(ProductosContext)


    return (
        <>
            <h1>Compras:</h1>
            <hr />
            {productos.map(producto => 
                (
                    <Card key={producto.id} imagen={producto.image} titulo={producto.title} descripcion={producto.description} precio={producto.price} id={producto.id}></Card>
                )
            )}
        </>
    )
}
