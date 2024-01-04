import { Minus, Plus, Trash } from "phosphor-react";
import { Product } from "../../contexts/ProductsContext";
import { CounterButton, CounterContainer, EraseButton, ProductListItemContainer, ProductListItemContent, ProductListItemFooter, ProductListItemHeader } from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

interface ProductListItemProps {
    product: Product;
    quantity: number;
}

export function ProductListItem(data: ProductListItemProps) {

    const { addNewItemToCart, removeItemFromCart, dropItemFromCart } = useContext(OrderContext);

    const formattedPrice = String(data.product.price.toFixed(2)).replace('.', ',');

    function handleDeleteButton() {
        dropItemFromCart(data.product.id);
    }

    function handlePlusButton() {
        addNewItemToCart(data.product.id);
    }

    function handleMinusButton() {
        removeItemFromCart(data.product.id);
    }

    return (
        <ProductListItemContainer>
            <img src={data.product.img_path} />
            <ProductListItemContent>
                <ProductListItemHeader>
                    <h3>{data.product.title}</h3>
                    <span>R$ {formattedPrice}</span>
                </ProductListItemHeader>

                <ProductListItemFooter>

                    <CounterContainer>
                        <CounterButton onClick={handleMinusButton}>
                            <Minus size={16} />
                        </CounterButton>
                        {data.quantity}
                        <CounterButton onClick={handlePlusButton}>
                            <Plus size={16} />
                        </CounterButton>
                    </CounterContainer>

                    <EraseButton onClick={handleDeleteButton}>
                        <Trash size={16} />
                        Remover
                    </EraseButton>
                    
                </ProductListItemFooter>

            </ProductListItemContent>
        </ProductListItemContainer>
    )
}