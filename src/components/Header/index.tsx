import { CartButton, CartItems, CitySpan, HeaderContainer, HeaderContent, HomeButton } from "./styles";
import Logo from '../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { OrderContext } from "../../contexts/OrderContext";
import { useContext } from "react";

export function Header() {

    const { cartItems } = useContext(OrderContext)

    

    return (
        <HeaderContainer>
            <HeaderContent>
                <HomeButton to="/">
                    <img src={Logo} alt="" />
                </HomeButton>
                <div>
                    <CitySpan>
                        <MapPin size={20} weight="fill"/>
                        Porto Alegre, RS
                    </CitySpan>
                    <CartButton to="/cart">
                        <ShoppingCart size={20} weight="fill"/>
                    </CartButton>
                    {cartItems != 0 &&
                            <CartItems>
                                {cartItems}
                            </CartItems>
                    }

                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}