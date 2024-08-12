"use client"

import { CartContext } from "@/contexts/cart-context"
import { useContext } from "react"
import { ProductEntry } from "./components/product-entry";
import { Button } from "@/components/button";
import { ShoppingCart } from "lucide-react";

interface SummaryProps {
    isSubmitting: boolean
}

export function Summary({
    isSubmitting
}: SummaryProps) {

    const { cart } = useContext(CartContext)

    const itemsTotal = cart.reduce((acc, cartProduct) => {
        return acc + (cartProduct.product.price * cartProduct.quantity)
    }, 0)

    const deliveryPrice = 4.5

    const total = itemsTotal + deliveryPrice

    function formatPrice(price: number) {
        if (price === 0) return "R$ 0,00"

        const formatedPrice = String(price)
            .replace(".", ",")
            .concat("0")

        return `R$ ${formatedPrice}`
    }

    return (
        <section className="flex flex-col items-start w-full lg:max-w-[400px] gap-2">
            <h2 className="text-xl font-semibold">Cafés selecionados</h2>
            <div className="flex flex-col gap-6 p-8 rounded-tr-[32px] rounded-bl-[32px] bg-muted w-full">
                
                {cart.length === 0
                ?
                    <div className="flex items-center justify-center border-b p-4 gap-4 text-muted-foreground">
                        <ShoppingCart className="w-5 h-5"/>
                        Seu carrinho está vazio
                    </div>
                :
                    cart.map((cartProduct) => {
                        return (
                        <ProductEntry key={cartProduct.product.id} cartProduct={cartProduct} />
                        )
                    })
                }

                <div className="flex items-center justify-between w-full text-lg">
                    <span>Total de itens</span>
                    <span>{formatPrice(itemsTotal)}</span>
                </div>
                <div className="flex items-center justify-between w-full text-lg">
                    <span>Entrega</span>
                    <span>{formatPrice(deliveryPrice)}</span>
                </div>
                <div className="flex items-center justify-between w-full text-xl font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                </div>

                <Button
                    type="submit"
                    className="bg-yellow-dark text-background"
                    disabled={isSubmitting}
                >
                    CONFIRMAR PEDIDO
                </Button>
            </div>
        </section>
    )
}