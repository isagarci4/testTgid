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

const initialValue: CartContextType = { 
    isOpen: false,
    setIsOpen: () => {},
    products: [], 
    setProducts: () => {}
}

const getInitialState = () => {
    const products = localStorage.getItem("product")
    return products ? JSON.parse(products) : initialValue.products
}

export const CartContext = createContext<CartContextType>(initialValue)

export const CartContextProvider = ({children}: CartContextProps) => {
    const [isOpen, setIsOpen] = useState(initialValue.isOpen)
    const [products, setProducts] = useState(getInitialState)

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