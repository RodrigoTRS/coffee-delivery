import { ReactNode, createContext, useEffect, useState } from "react";
import { Products } from "../Products";

export interface Product {
    'id': number
    'img_path': string;
    'tags': string[];
    'title': string;
    'description': string;
    'price': number;
}

interface ProductsContextType {
    products: Product[];
}

interface ProductsContextProps {
    children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextType)

export function ProductsProvider({children}: ProductsContextProps) {
    const [ products, setProducts ] = useState<Product[]>([])

    useEffect(() => {
        setProducts(Products)
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

