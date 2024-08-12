"use client"

import Image from "next/image";
import { Product } from "@/models/Product";
import { Button } from "../../../../components/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/cart-context";

interface ProductCardProps {
    product: Product
}

export function ProductCard({
    product
}: ProductCardProps) {

    const [productCount, setProductCount] = useState<number>(0)

    const { addToCart } = useContext(CartContext);

    function handleIncreaseCount() {
        setProductCount(state => state + 1)
    }

    function handleDecreaseCount() {
        if (productCount > 0) {
            setProductCount(state => state - 1)
        }
    }

    function handleAddToCart(product: Product) {
        addToCart({
            product,
            quantity: productCount
        })
        setProductCount(0)
    }

    return (
        <div className="flex flex-col items-center gap-2 p-6 rounded-tr-[32px] rounded-bl-[32px] bg-muted">
            <Image
                src={product.imagePath}
                alt={product.title}
                width={80}
                height={80}
                className="mt-[-56px] mb-2"
            />
            
            <div className="flex gap-2 items-center">
                {product.tags.map((tag) => (
                    <span
                    key={tag}
                    className="flex items-center bg-yellow-light text-yellow-dark px-2 py-0 rounded-full text-sm font-semibold tracking-tight"
                    >
                        {tag.toUpperCase()}
                    </span>
                ))}
            </div>

            <h3 className="text-lg font-bold text-center">{product.title}</h3>

            <p className="text-md text-muted-foreground text-center leading-5">{product.description}</p>

            <footer className="flex items-center justify-between w-full mt-4">
                <span className="text-muted-foreground flex items-end gap-1">
                    R$
                    <b className="text-2xl leading-7">
                        { String(product.price).replace(".", ",").concat("0") }
                    </b>
                </span>
                <div className="flex items-center gap-2">
                    <div className="bg-neutral-200 flex items-center justify-between w-[110px] font-mono rounded-md">
                        <Button
                            className="bg-neutral-200 text-foreground"
                            size="icon"
                            disabled={productCount === 0}
                            onClick={() => handleDecreaseCount()}
                        >
                            <Minus className="w-5 h-5" />
                        </Button>

                        {productCount}

                        <Button
                            className="bg-neutral-200 text-foreground"
                            size="icon"
                            onClick={() => handleIncreaseCount()}
                        >
                            <Plus className="w-5 h-5" />
                        </Button>
                    </div>

                    <Button
                        className="bg-purple-dark text-background"
                        size="icon"
                        onClick={() => handleAddToCart(product)}
                    >
                        <ShoppingCart className="w-5 h-5" />
                    </Button>
                </div>
            </footer>
        </div>
    )
}