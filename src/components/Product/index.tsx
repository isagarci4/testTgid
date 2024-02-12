import { ProductCard, ProductInfo } from "./styles";

type ProductProps = {
    imageLink: string,
    name: string,
    price: number
}

export function Product({imageLink, name, price} : ProductProps) {
    return(
        <ProductCard>
            <img src={imageLink} />
            <ProductInfo>
                <strong>{name}</strong>
                <p>{price}</p>
            </ProductInfo>            
        </ProductCard>
    )
}