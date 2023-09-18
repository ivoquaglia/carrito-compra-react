import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CompraPage } from "./pages/CompraPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"

export const CarripoApp = () => {

    return (
        <>
            <ProductosProvider >
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<CompraPage></CompraPage>}></Route>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </ProductosProvider>
        </>
    )
}
