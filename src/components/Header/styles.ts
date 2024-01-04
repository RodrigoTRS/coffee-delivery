import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderContent = styled.header`
    width: 70rem;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
    }
`
export const HomeButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    transition: opacity 0.1s ;

    &:hover {
        opacity: 0.7;
    }
`

export const CitySpan = styled.span`
    padding: 0.75rem;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.125rem;
    font-weight: 700;
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};
`

export const CartButton = styled(Link)`
    padding: 0.75rem;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow']};
    transition: opacity 0.1s ;

    &:hover {
        opacity: 0.7;
    }
`

export const CartItems = styled.div`
    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => props.theme['yellow']};
    color: ${props => props.theme.white};
    border-radius: 50%;
    position: relative;
    top: -20px;
    left: -24px;

    font-size: 0.75rem;
`