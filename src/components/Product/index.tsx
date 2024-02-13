import { ShoppingCartSimple } from "phosphor-react";
import { ProductCard, ProductInfo } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";

interface ProductProps {
    id: number;
    imageLink: string;
    name: string;
    price: number;
}

export function Product({ id, imageLink, name, price }: ProductProps) {
    const addToCart = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();

        try {
            const response = await axios.post("/api/cart", {
                id: id,
                imageLink: imageLink,
                name: name,
                price: price
            });

            const data = response.data;

            console.log("Item adicionado ao carrinho", data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ProductCard>
            <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                <img src={imageLink} alt={name} />
            </Link>
            <ProductInfo>
                <div>
                    <strong>{name}</strong>
                    <p>{price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</p>
                </div>
                <button onClick={addToCart}>
                    <ShoppingCartSimple size={18} />
                </button>
            </ProductInfo>
        </ProductCard>
    );
}