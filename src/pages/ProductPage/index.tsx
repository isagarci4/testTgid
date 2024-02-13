import { useParams } from "react-router-dom";
import { ImageContainer, ProductContainer, ProductDetails } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

export function Product() {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    const [quantity, setQuantity] = useState(1);
    const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };
    
      const handleIncrement = () => {
        if (quantity < 50) {
          setQuantity(quantity + 1);
        }
      };

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`)

            const data = response.data
            
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return(
        <ProductContainer>
            <ImageContainer>
                <img src={product.imageLink}  />
            </ImageContainer>

            <ProductDetails>
                <strong>{product.name}</strong>
                <p>
                    {product.price} 
                </p>

                <p>{product.description}</p>

                <div >
                    <button id="decrement" onClick={handleDecrement}>-</button>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="50"
                        value={quantity}
                    />
                    <button id="increment" onClick={handleIncrement}>+</button>
                </div>

                <button id="addToCart">Adicionar ao carrinho</button>
            </ProductDetails>
            
        </ProductContainer>
    )
}