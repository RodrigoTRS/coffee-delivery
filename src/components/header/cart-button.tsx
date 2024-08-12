"use client"

import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";
import { useRouter } from "next/navigation";
import { Button } from "../button";

export function CartButton() {

    const router = useRouter()

    const { cart } = useContext(CartContext)

    const productsOnCart = cart.length

    return (
        <Button
            size="icon"
            className="bg-yellow-light text-yellow-dark relative"
            onClick={() => router.push("/cart")}
        >
            <ShoppingCart className="w-5 h-5"/>
            <div className="absolute w-[20px] h-[20px] bg-yellow-dark text-background flex items-center justify-center rounded-full text-sm top-[-8px] right-[-8px]">
                {productsOnCart}
            </div>
        </Button>
    )
}