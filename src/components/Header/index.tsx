import { ShoppingCartSimple } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
    const { isOpen, setIsOpen} = useContext(CartContext)
    const { products } = useContext(CartContext)

    return(
        <HeaderContainer>
            <NavLink to={'/'}>
                <h1>Loja Online</h1>    
            </NavLink>
            <button title="Carrinho" onClick={() => setIsOpen(!isOpen)}>
                <ShoppingCartSimple size={28} />
                <span>{products.length}</span>
            </button>
        </HeaderContainer>
    )
}