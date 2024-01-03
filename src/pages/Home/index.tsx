import { Products } from "./Products";
import { Hero } from "./components/Hero";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Hero />
            {Products.map((product) => {
                return (
                    <>
                        <img src={product.img_path} alt="" />
                        <h1>{product.title}</h1>
                    </>
                )
            })}
        </HomeContainer>
    )
}