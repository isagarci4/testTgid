import { Trash } from "phosphor-react";
import { CartItemContainer, CartItemContent } from "./styles";
import axios from "axios";

interface ProductProps {
    id: string,
    imageLink: string;
    name: string;
    price: number;
    updateCart: () => void
}

export function CartItem({id, imageLink, name, price, updateCart}: ProductProps) {

    const handleDeleteItem = async () => {
        try {
            await axios.delete(`api/cart/${id}`);
            updateCart();
        } catch (error) {
            console.error('Erro ao excluir o item do carrinho:', error);
        }
    };
    
    return(
        <CartItemContainer>
            <img src={imageLink} alt="imagem do produto" />

            <CartItemContent>
                <h3>{name}</h3>
                <p>{price}</p>

                <button onClick={handleDeleteItem}>
                    <Trash size={20} />
                </button>
            </CartItemContent>
        </CartItemContainer>
    )
}