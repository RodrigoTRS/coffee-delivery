import { styled } from "styled-components";

export const ProductListItemContainer = styled.div`
    display: flex;
    gap: 1.25rem;
    width: 100%;

    img {
        width: 64px;
        height: 64px;
    }
`

export const ProductListItemContent = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProductListItemHeader = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProductListItemFooter = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 72px;
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

export const EraseButton = styled.button`
    height: 32px;
    padding: 0.5rem;
    gap: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    border: 0px;
    cursor: pointer;

    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};

    svg {
        color: ${props => props.theme['purple']};
    }
`

export const Separator = styled.div`
    width: 100%;
    height: 2px;
    margin: 1.5rem 0;
    background: ${props => props.theme['base-button']};
`