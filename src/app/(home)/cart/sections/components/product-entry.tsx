import { CartContext, CartProduct } from "@/contexts/cart-context"
import { useContext } from "react"
import Image from "next/image";
import { Button } from "@/components/button";
import { Minus, Plus, Trash } from "lucide-react";


interface ProductEntryProps {
    cartProduct: CartProduct
}
  
export function ProductEntry({ cartProduct }: ProductEntryProps) {
  
    const { product, quantity } = cartProduct
  
    const { increaseFromCard, decreaseFromCart, removeFromCart } = useContext(CartContext)
  
    return (
        <div className="flex items-center justify-between w-full border-b pb-4">
            <div className="flex items-center justify-between w-full gap-4">

                <div className="flex items-center gap-4">
                    <div className="w-[64px] h-[64px]">
                        <Image alt={product.title} src={product.imagePath} width={64} height={64} />
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold leading-5">{product.title}</h3>
                        <p className="flex items-end gap-1 leading-6">R$
                            <b className="text-muted-foreground text-lg">
                            {String(product.price)}
                            </b>
                        </p>
                    </div>
                </div>
    
                <div className="flex items-center gap-2">
                    <div className="bg-neutral-200 flex items-center justify-between w-[110px] font-mono rounded-md">
                        <Button
                            className="bg-neutral-200 text-foreground"
                            size="icon"
                            disabled={quantity <= 1}
                            onClick={() => decreaseFromCart(cartProduct)}
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
        
                        {quantity}
        
                        <Button
                            className="bg-neutral-200 text-foreground"
                            size="icon"
                            onClick={() => increaseFromCard(cartProduct)}
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
        
                    <Button
                        className="bg-purple-light text-purple-dark"
                        size="icon"
                        onClick={() => removeFromCart(cartProduct)}
                    >
                        <Trash className="w-5 h-5 text-purple" />
                    </Button>
                </div>
            </div>
        </div>
    )
}