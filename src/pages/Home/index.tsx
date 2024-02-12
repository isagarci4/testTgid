import axios from "axios"
import { useEffect, useState } from "react"
import { Product } from "../../components/Product"
import { HomeContainer } from "./styles"

export function Home() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get("api/products")

            const data = response.data
            
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()

        console.log(products)
    }, [])

    return(
        <HomeContainer>
            {products.length === 0 ? (<p>Carregando...</p>) : (
                products.map (product => (
                    <Product 
                        key={product.id} 
                        imageLink={product.imageLink}
                        name={product.name} 
                        price={product.price}
                    /> 
                ))
            )
            }
        </HomeContainer>
    )
}