import { ReactNode, createContext, useState } from "react";

interface Product {
    'img_path': string;
    'tags': [string];
    'title': string;
    'description': string;
    'price': number;
    'quantity': number;
}

interface CartContextType {
    cart: Product[];
}

interface CartContextProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({children}: CartContextProps) {
    const [ cart, setCart ] = useState<Product[]>([])

    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    )
}

