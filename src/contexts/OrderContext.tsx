import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Product, ProductsContext } from "./ProductsContext";
import { checkoutFormData } from "../pages/Cart";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CheckoutFormData {
    cep: number,
    rua: string,
    numero: number,
    complemento?: string,
    bairro: string,
    cidade: string,
    uf: string,
    pagamento: "dinheiro" | "cartao_de_credito" | "cartao_de_debito";
}

interface Address {
    cep: number,
    rua: string,
    numero: number,
    complemento: string | undefined,
    bairro: string,
    cidade: string,
    uf: string,
}

interface PaymentData {
    pagamento: "dinheiro" | "cartao_de_credito" | "cartao_de_debito";
}

interface OrderContextType {
    cart: CartItem[];
    cartItems: number;
    address: Address;
    paymentData: PaymentData;
    addNewItemToCart: (id: number) => void;
    removeItemFromCart: (id: number) => void;
    dropItemFromCart: (id: number) => void;
    handleCheckoutFormData: (data: CheckoutFormData) => void;
}

interface OrderContextProps {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderProvider({children}: OrderContextProps) {
    const [ cart, setCart ] = useState<CartItem[]>([]);
    const [ cartItems, setCartItems ] = useState(0);
    const [ paymentData, setPaymentData ] = useState<PaymentData>({pagamento: 'dinheiro'})
    const [ address, setAddress ] = useState<Address>({
        cep: 0,
        rua: '',
        numero: 0,
        complemento: undefined,
        bairro: '',
        cidade: '',
        uf: '',
    })

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

    function dropItemFromCart (id: number) {
        const productExistsInCart = cart.find((cartItem) => cartItem.product.id === id);

        if (productExistsInCart) {
                setCart((cart) => cart.filter((item) => item.product.id !== id));
            }
    }

    function handleCheckoutFormData(data: checkoutFormData) {

        const newAdress = {
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            complemento: data.complemento,
            bairro: data.bairro,
            cidade: data.cidade,
            uf: data.uf,
        }

        setAddress(newAdress);

        const newPaymentData = {
            pagamento: data.pagamento
        }
        
        setPaymentData(newPaymentData);
    }

    useEffect(() => {
        setCartItems(cart.length);
    }, [cart])

    return (
        <OrderContext.Provider value={{
            cart,
            cartItems,
            address,
            paymentData,
            addNewItemToCart,
            removeItemFromCart,
            dropItemFromCart,
            handleCheckoutFormData,
        }}>
            {children}
        </OrderContext.Provider>
    )
}

