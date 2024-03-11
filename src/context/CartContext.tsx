import { ReactNode, createContext, useState, Dispatch, SetStateAction, useEffect } from "react";

type ProductType = {
    id: number;
    imageLink: string;
    name: string;
    price: number;
}

type CartContextType = {
    isOpen: boolean
    setIsOpen: (newState: boolean) => void
    products: ProductType[]
    setProducts: Dispatch<SetStateAction<ProductType[]>>
}

type CartContextProps = {
    children: ReactNode
}

const getInitialState = () => {
    const products = localStorage.getItem("product")
    return products ? JSON.parse(products) : []
}

const initialValue: CartContextType = { 
    isOpen: false,
    setIsOpen: () => {},
    products: getInitialState(), 
    setProducts: () => {}
}

export const CartContext = createContext<CartContextType>(initialValue)

export const CartContextProvider = ({children}: CartContextProps) => {
    const [isOpen, setIsOpen] = useState(initialValue.isOpen)
    const [products, setProducts] = useState(initialValue.products)

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(products))
    }, [products])

    return(
        <CartContext.Provider 
            value={{
                isOpen, 
                setIsOpen, 
                products, 
                setProducts,
            }}>
            {children}
        </CartContext.Provider>
    )
}