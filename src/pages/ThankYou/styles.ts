import { styled } from "styled-components"

export const ThankYouContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ThankYouContent = styled.div`
    width: 70rem;
    padding: 4rem 0 6rem;
    gap: 4rem;

    display: flex;
    align-items: end;
    justify-content: space-between;
`

export const ThankYouText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ThankYouHeader = styled.div`
    div {
        display: flex;
        flex-direction: column;

        h1 {
            font-family: 'Baloo 2', sans-serif;
            color: ${props => props.theme['yellow-dark']};
            font-weight: 700;
        }

        p {
            font-size: 1.125rem;
        }
    }
`