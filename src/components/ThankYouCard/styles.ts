import { styled } from "styled-components";

export const ThankYouCardContainer = styled.div`

    background: linear-gradient(white, white) padding-box,
                linear-gradient(to right,
                    ${props => props.theme['yellow']},
                    ${props => props.theme['purple']}
                    ) border-box;

    border: 2px solid transparent;
    border-radius: 6px 36px 6px 36px;

    padding: 2rem;
    width: 32rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ThankYouCardLine = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

interface ThankYouCardIconsProps {
    variant: 'purple' | 'yellow' | 'orange';
}

export const ThankYouCardIcons = styled.div<ThankYouCardIconsProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;

    color: ${props => props.theme.white};
    background: ${props => props.variant === 'purple' && props.theme['purple']};
    background: ${props => props.variant === 'yellow' && props.theme['yellow']};
    background: ${props => props.variant === 'orange' && props.theme['yellow-dark']};
`

export const ThankYouCardLineText = styled.div`
    display: flex;
    flex-direction: column;

    p, strong {
        font-size: 1rem;
    }
`