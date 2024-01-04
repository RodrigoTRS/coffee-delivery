import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Product } from "../../../../contexts/ProductsContext";
import { CartAndQuantityContainer, CartButton, CounterButton, CounterContainer, ImgContainer, Price, ProductContainer, ProductFooter, ProductTag, TagsContainer, TextContainer } from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";

interface ProductCardProps {
    product: Product
}

export function ProductCard(data: ProductCardProps) {

    const { cart, addNewItemToCart, removeItemFromCart } = useContext(OrderContext);

    const itemInCart = cart.find((cartItem) => cartItem.product.id === data.product.id)

    const formattedPrice = String(data.product.price.toFixed(2)).replace('.', ',');

    function handlePlusButton() {
        addNewItemToCart(data.product.id);
    }

    function handleMinusButton() {
        removeItemFromCart(data.product.id);
    }

    return (
        <ProductContainer key={data.product.id}>

            <ImgContainer>
                <img src={data.product.img_path} alt="" />
            </ImgContainer>

            <TextContainer>

                <TagsContainer>
                    { data.product.tags.map((tag, index) => {
                        return (
                            <ProductTag key={index}>
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
                        <CounterButton onClick={handleMinusButton}>
                            <Minus size={16} />
                        </CounterButton>
                        {itemInCart ? itemInCart.quantity : 0}
                        <CounterButton onClick={handlePlusButton}>
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