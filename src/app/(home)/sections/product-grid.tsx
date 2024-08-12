"use client"

import { Product } from "@/models/Product"
import { ProductCard } from "./components/product-card"
import { useEffect, useState } from "react"
import { api } from "@/lib/axios"


export function ProductGrid() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await api.get("/products");
                setProducts(response.data);
            } catch (error) {
                throw error
            }
        }
  
        fetchProducts();
    }, []);

    return (
        <section className="flex flex-col w-full gap-4 pb-16">
            <h2 className="text-2xl font-semibold">Nossos cafés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-8 gap-y-16 mt-[56px]">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    )
}