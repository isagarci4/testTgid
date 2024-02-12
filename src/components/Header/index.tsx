import { ShoppingCartSimple } from "phosphor-react";
import { HeaderContainer } from "./styles";

export function Header() {
    return(
        <HeaderContainer>
            <h1>Loja Online</h1>
            <button title="Carrinho">
                <ShoppingCartSimple size={28} />
            </button>
        </HeaderContainer>
    )
}