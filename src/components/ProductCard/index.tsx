import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Product } from "../../contexts/ProductsContext";
import { CartAndQuantityContainer, CartButton, CounterButton, CounterContainer, ImgContainer, Price, ProductContainer, ProductFooter, ProductTag, TagsContainer, TextContainer } from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
    product: Product
}

export function ProductCard(data: ProductCardProps) {

    const navigate = useNavigate();

    
    const { cart, addNewItemToCart, removeItemFromCart } = useContext(OrderContext);

    const cartDisabled = cart.length === 0 ? true : false;

    const itemInCart = cart.find((cartItem) => cartItem.product.id === data.product.id)

    const formattedPrice = String(data.product.price.toFixed(2)).replace('.', ',');

    function handlePlusButton() {
        addNewItemToCart(data.product.id);
    }

    function handleMinusButton() {
        removeItemFromCart(data.product.id);
    }

    function handleCartButton() {
        navigate('/cart');
    }

    return (
        <ProductContainer key={data.product.id}>

            <ImgContainer>
                <img src={data.product.img_path}/>
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

                    <CartButton onClick={handleCartButton} disabled={cartDisabled}>
                        <ShoppingCart size={20} weight="fill" />
                    </CartButton>

                </CartAndQuantityContainer>

            </ProductFooter>

        </ProductContainer>
    )
}