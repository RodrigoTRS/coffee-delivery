import * as RadioGroup from "@radix-ui/react-radio-group"
import { styled } from "styled-components"

export const CartContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CartContent = styled.form`
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
    padding: 2rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const AddressInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1rem;
`

export const AddressHeader = styled.div`
    display: flex;
    gap: 0.25rem;
    margin-bottom: 2rem;

    svg {
        color: ${props => props.theme['yellow-dark']}
    }
`

export const PaymentContainer = styled.div`
    width: 100%;
    padding: 2rem;
    margin-top: 1rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px;
`

export const PaymentHeader = styled.div`
    display: flex;
    gap: 0.25rem;
    margin-bottom: 2rem;

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
    padding: 2rem;

    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;
`

export const FormLine = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

const BaseInput = styled.input`
    padding: 0.75rem;
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 4px;

    &::placeholder {
        color: ${props => props.theme['base-label']};
    }
`

export const ShortInput = styled(BaseInput)`
    width: 200px;
`
export const UFInput = styled(BaseInput)`
    width: 60px;
`

export const FlexInput = styled(BaseInput)`
    flex: 1;
`

export const PaymentType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-top: 2rem;
`

export const PaymentTypeButton = styled(RadioGroup.Item)`
    background: ${props => props.theme['base-button']};
    padding: 1rem;
    display: flex;
    align-items: center;
    // justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    font-size: 0.75rem;
    color: ${props => props.theme['base-text']};
    text-transform: uppercase;
    transition: background-color 0.1s;

    svg {
        color: ${props => props.theme['purple']};
    }

    &[data-state="unchecked"]:hover {
        background: ${props => props.theme['base-hover']};
    }

    &[data-state="checked"] {
        background: ${props => props.theme['purple-light']};
        box-shadow: 0px 0px 0px 2px ${props => props.theme['purple']};
    }
`