import { CartItem } from "../CartItem";
import { CartContainer, CartItens, CartResume } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";

export function Cart() {
    const { isOpen } = useContext(CartContext)
    const { products } = useContext(CartContext)
    const [cartResume, setCartResume] = useState('R$00,00')

    useEffect(() => {
        const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
        setCartResume(formatCurrency(totalPrice, 'BRL'))
    }, [products])

    return (
        <CartContainer isOpen={isOpen}>
            <CartItens>
                {products.length === 0 ? (
                    <p>Nenhum item no carrinho</p>
                ) : (
                    products.map((product) => (
                        <CartItem
                            key={product.id} 
                            id={product.id}
                            imageLink={product.imageLink}
                            name={product.name}
                            price={product.price}
                        />
                    ))
                )}
            </CartItens>
            <CartResume>{cartResume}</CartResume>
        </CartContainer>
    );
}