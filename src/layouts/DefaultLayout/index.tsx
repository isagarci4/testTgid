import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { Cart } from "../../components/Cart";
import { useState } from "react";

export function DefaultLayout() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };
    return(
        <LayoutContainer>
            <Header onCartToggle={handleCartToggle} />
            <Outlet/>
            <Cart isCartOpen={isCartOpen} />
        </LayoutContainer>
    )
}