import { CartButton, CitySpan, HeaderContainer, HeaderContent, HomeButton } from "./styles";
import Logo from '../../assets/coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
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
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}