import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Product, ProductsContext } from "./ProductsContext";

interface CartItem {
    product: Product;
    quantity: number;
}

interface OrderContextType {
    cart: CartItem[];
    cartItems: number;
    addNewItemToCart: (id: number) => void;
    removeItemFromCart: (id: number) => void;
}

interface OrderContextProps {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderProvider({children}: OrderContextProps) {
    const [ cart, setCart ] = useState<CartItem[]>([]);
    const [ cartItems, setCartItems ] = useState(0);

    const { products } = useContext(ProductsContext);

    
    function addNewItemToCart (id: number) {

        const productExistsInCart = cart.find((cartItem) => cartItem.product.id === id)

        if (productExistsInCart) {
            setCart(
                cart.map((cartItem) => {
                    if (cartItem.product.id === id) {
                        const increasedQuantity = cartItem.quantity + 1;
                        return { ...cartItem, quantity: increasedQuantity}
                    } else {
                        return cartItem
                    }
                })
            )
        } else {
            const selectedProduct = products.find((product) => product.id === id)
            if (selectedProduct) {
                const newCartItem = {
                    product: selectedProduct,
                    quantity: 1,
                }
                setCart((state) => [...state, newCartItem])
            }
        }
    }

    function removeItemFromCart (id: number) {

        const productExistsInCart = cart.find((cartItem) => cartItem.product.id === id)

        if (productExistsInCart) {
            if (productExistsInCart.quantity > 1) {
                    setCart(
                        cart.map((cartItem) => {
                            if (cartItem.product.id === id) {
                                const increasedQuantity = cartItem.quantity - 1;
                                return { ...cartItem, quantity: increasedQuantity}
                            } else {
                                return cartItem
                            }
                        })
                    )
            } else {
                setCart((cart) => cart.filter((item) => item.product.id !== id))
            }
        }
    }


    useEffect(() => {
        setCartItems(cart.length);
        console.log(cart);
    }, [cart])

    return (
        <OrderContext.Provider value={{ cart, cartItems, addNewItemToCart, removeItemFromCart }}>
            {children}
        </OrderContext.Provider>
    )
}

