import { styled } from "styled-components"

export const CartContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CartContent = styled.section`
    width: 70rem;
    padding: 2rem 0 6rem;
    gap: 2rem;

    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 1.125rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 1rem;
    }
`

export const AddressContainer = styled.div`
    width: 100%;
    padding: 3.25rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const AddressHeader = styled.div`
    display: flex;
    gap: 0.25rem;

    svg {
        color: ${props => props.theme['yellow-dark']}
    }
`

export const PaymentContainer = styled.div`
    width: 100%;
    padding: 3.25rem;
    margin-top: 1rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const PaymentHeader = styled.div`
    display: flex;
    gap: 0.25rem;

    svg {
        color: ${props => props.theme['purple-dark']}
    }
`

export const CartSummary = styled.div`
    width: 28rem;

    h2 {
        font-size: 1.125rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 1rem;
    }
`
export const SummaryContainer = styled.div`
    width: 100%;
    padding: 3.25rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;
`