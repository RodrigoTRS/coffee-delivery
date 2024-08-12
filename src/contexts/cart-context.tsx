import { CartFormData } from "@/app/(home)/cart/page";
import { PaymentMethodOptions } from "@/app/(home)/cart/sections/delivery-data";
import { Product } from "@/models/Product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct {
    product: Product
    quantity: number
}

interface OrderData {
    rua: string
    numero: number
    complemento?: string
    bairro: string
    cidade: string
    uf: string
    cep: string
    metodo_de_pagamento: PaymentMethodOptions
}

interface CartContextType {
    cart: CartProduct[];
    orderData: OrderData;
    updateOrderData: (data: CartFormData) => void;
    addToCart: (cartProduct: CartProduct) => void;
    removeFromCart: (cartProduct: CartProduct) => void;
    increaseFromCard: (cartProduct: CartProduct) => void;
    decreaseFromCart: (cartProduct: CartProduct) => void;
}

interface CartContextProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProps) {

    const [cart, setCart] = useState<CartProduct[]>([])
    const [orderData, setOrderData] = useState<OrderData>({
        rua: "",
        numero: 0,
        complemento: undefined,
        bairro: "",
        cidade: "",
        uf: "",
        cep: "",
        metodo_de_pagamento: "dinheiro"
    })

    function updateOrderData(data: CartFormData) {
        setOrderData(data)
    }

    function addToCart(cartProduct: CartProduct) {
        setCart((state) => {
            const foundProduct = state.find((item) => item.product.id === cartProduct.product.id);

            if (foundProduct) {
                return state.map((item) =>
                    item.product.id === cartProduct.product.id
                        ? { ...item, quantity: item.quantity + cartProduct.quantity }
                        : item
                );
            } else {
                return [...state, cartProduct];
            }
        });
    }

    function removeFromCart(cartProduct: CartProduct) {
        setCart((state) => {
            return state.filter((item) => item.product.id !== cartProduct.product.id);
        });
    }


    function increaseFromCard(cartProduct: CartProduct) {
        setCart((state) => {
            const foundProduct = state.find((item) => item.product.id === cartProduct.product.id);

            if (foundProduct) {
                return state.map((item) =>
                    item.product.id === cartProduct.product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...state, cartProduct];
            }
        });
    }


    function decreaseFromCart(cartProduct: CartProduct) {
        setCart((state) => {
            const foundProduct = state.find((item) => item.product.id === cartProduct.product.id);

            if (foundProduct && foundProduct.quantity > 1) {
                return state.map((item) =>
                    item.product.id === cartProduct.product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return state.filter((item) => item.product.id !== cartProduct.product.id);
            }
        });
    }

    return (
        <CartContext.Provider value={{
            cart,
            orderData,
            updateOrderData,
            addToCart,
            removeFromCart,
            increaseFromCard,
            decreaseFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}