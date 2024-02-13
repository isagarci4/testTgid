import { ShoppingCartSimple } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header({ onCartToggle }) {

    return(
        <HeaderContainer>
            <NavLink to={'/'}>
                <h1>Loja Online</h1>    
            </NavLink>
            <button title="Carrinho" onClick={onCartToggle}>
                <ShoppingCartSimple size={28} />
                <span>1</span>
            </button>
        </HeaderContainer>
    )
}