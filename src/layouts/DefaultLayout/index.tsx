import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { Cart } from "../../components/Cart";
import { CartContextProvider } from "../../context/CartContext";

export function DefaultLayout() {
    return(
        <LayoutContainer>
            <CartContextProvider>
                <Header />
                <Outlet/>
                <Cart />
            </CartContextProvider>
        </LayoutContainer>
    )
}