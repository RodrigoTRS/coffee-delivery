import { styled } from "styled-components"

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;
    padding: 0 1.5rem 1.5rem;

    img {
        width: 120px;
        height: 120px;
        margin: -1.25rem 0 1rem;
    }
`

export const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        margin-top: 0.5rem;
        font-size: 1.25rem;
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['base-title']};
    }

    p {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        color: ${props => props.theme['base-label']};
        text-align: center;
    }
`
export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`

export const ProductTag = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;

    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

`

export const ProductFooter = styled.div`
    margin-top: 2rem;;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CartAndQuantityContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const Price = styled.span`
    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;

    span {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
    }
`

export const CounterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;
`


export const CounterButton = styled.button`
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: 0px;
    cursor: pointer;

    color: ${props => props.theme['purple']};

    &:hover {
        color: ${props => props.theme['purple-dark']};
    }

    &:focus {
        border: 0;
        box-shadow: 0px 0px 0px 0px transparent;
    }
`

export const CartButton = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    border: 0;
    border-radius: 6px;

    background: ${props => props.theme['purple']};
    color: ${props => props.theme.white};

    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
        background: ${props => props.theme['purple-dark']};
    }
`

