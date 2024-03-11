import { ShoppingCartSimple } from "phosphor-react";
import { ProductCard, ProductInfo } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";

interface ProductProps {
    id: number;
    imageLink: string;
    name: string;
    price: number;
}

export function Product({ id, imageLink, name, price }: ProductProps) {
    const { setProducts } = useContext(CartContext)

    const addToCart = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();

        setProducts((prev) => (
					[
						...prev, 
						{
							id: id,
							imageLink: imageLink,
							name: name,
							price: price
					}
				]
				))

    };

    return (
        <ProductCard>
            <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                <img src={imageLink} alt={name} />
            </Link>
            <ProductInfo>
                <div>
                    <strong>{name}</strong>
                    <p>{formatCurrency(price, 'BRL')}</p>
                </div>
                <button onClick={addToCart}>
                    <ShoppingCartSimple size={18} />
                </button>
            </ProductInfo>
        </ProductCard>
    );
}