import { Trash } from "phosphor-react";
import { CartItemContainer, CartItemContent } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";

interface ProductProps {
    id: number,
    imageLink: string;
    name: string;
    price: number;
}

export function CartItem({id, imageLink, name, price}: ProductProps) {

    const { setProducts } = useContext(CartContext)

    const handleDeleteItem = () => {
        setProducts(prevArray => prevArray.filter(product => product.id !== id))
    };
    
    return(
        <CartItemContainer>
            <img src={imageLink} alt="imagem do produto" />

            <CartItemContent>
                <h3>{name}</h3>
                <p>{formatCurrency(price, 'BRL')}</p>

                <button onClick={handleDeleteItem}>
                    <Trash size={20} />
                </button>
            </CartItemContent>
        </CartItemContainer>
    )
}