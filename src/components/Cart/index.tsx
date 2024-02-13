import axios from "axios";
import { CartItem } from "../CartItem";
import { CartContainer, CartItens, CartResume } from "./styles";
import { useEffect, useState } from "react";

export function Cart({ isCartOpen }) {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get("/api/cart");
            const data = response.data;
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateCart = () => {
        // Atualize o estado do carrinho
        getProducts();
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <CartContainer isOpen={isCartOpen}>
            <CartItens>
                {products.length === 0 ? (
                    <p>Nenhum item no carrinho</p>
                ) : (
                    products.map((product) => (
                        <CartItem
                            key={product.id} // Adicione a chave única para cada item no carrinho
                            id={product.id}
                            imageLink={product.imageLink}
                            name={product.name}
                            price={product.price}
                            updateCart={updateCart}
                        />
                    ))
                )}
            </CartItens>
            <CartResume>Resumo do carrinho</CartResume>
        </CartContainer>
    );
}