import { CartButton, CartItems, CitySpan, HeaderContainer, HeaderContent, HomeButton } from "./styles";
import Logo from '../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { OrderContext } from "../../contexts/OrderContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {

    const navigate = useNavigate();

    const { cart, cartItems } = useContext(OrderContext)

    const cartDisabled = cart.length === 0 ? true : false;

    function handleCartButton() {
        navigate('/cart');
    }

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
                    <CartButton onClick={handleCartButton} disabled={cartDisabled}>
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