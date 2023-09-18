import { useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"


export const ProductosProvider = ({children}) => {

    
    const [productos, setProducto] = useState([])

    const fetchProductos = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        setProducto(data)
    }

    useEffect(() => {
        fetchProductos()

    }, [])


    return (
        <ProductosContext.ProductosProvider value={{productos}}>
            {children}
        </ProductosContext.ProductosProvider>
    )
}
