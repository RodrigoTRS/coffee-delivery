import { useContext } from "react";
import { Hero } from "./components/Hero";
import { HomeContainer, ProductsContent, ProductsGrid } from "./styles";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductCard } from "./components/ProductCard";

export function Home() {
    const { products } = useContext(ProductsContext)

    return (
        <HomeContainer>
            <Hero />
            <ProductsContent>
                <h2>Nossos cafés</h2>
                <ProductsGrid>
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                })}
                </ProductsGrid>
            </ProductsContent>
        </HomeContainer>
    )
}