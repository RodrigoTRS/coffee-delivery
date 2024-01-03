import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Product } from "../../../../contexts/ProductsContext";
import { CartAndQuantityContainer, CartButton, CounterButton, CounterContainer, ImgContainer, Price, ProductContainer, ProductFooter, ProductTag, TagsContainer, TextContainer } from "./styles";
import { useState } from "react";

interface ProductCardProps {
    product: Product
}

export function ProductCard(data: ProductCardProps) {

    const [ quantity, setQuantity ] = useState(0)

    function incrementQuantity() {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    }

    function decrementQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const formattedPrice = String(data.product.price.toFixed(2)).replace('.', ',');

    return (
        <ProductContainer key={data.product.id}>

            <ImgContainer>
                <img src={data.product.img_path} alt="" />
            </ImgContainer>

            <TextContainer>
                
                <TagsContainer>
                    {data.product.tags.map((tag) => {
                        return (
                            <ProductTag>
                                {tag}
                            </ProductTag>
                        )
                    })}
                </TagsContainer>

                <h3>{data.product.title}</h3>
                <p>{data.product.description}</p>
            </TextContainer>

            <ProductFooter>

                <Price>
                    R$ <span>{formattedPrice}</span>
                </Price>

                <CartAndQuantityContainer>
                    <CounterContainer>
                        <CounterButton onClick={decrementQuantity}>
                            <Minus size={16} />
                        </CounterButton>
                        {quantity}
                        <CounterButton onClick={incrementQuantity}>
                            <Plus size={16} />
                        </CounterButton>
                    </CounterContainer>

                    <CartButton>
                        <ShoppingCart size={20} weight="fill" />
                    </CartButton>

                </CartAndQuantityContainer>

            </ProductFooter>

        </ProductContainer>
    )
}