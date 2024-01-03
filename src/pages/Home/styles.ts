import { styled } from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProductsContent = styled.section`
    width: 70rem;
    padding: 2rem 0 6rem;
    display: flex;
    flex-direction: column;

    h2 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 4rem;
    }
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`