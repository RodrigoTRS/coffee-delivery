import { styled } from "styled-components"

export const HeroContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../../assets/background-blur.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`

export const HeroContent = styled.div`
    width: 70rem;
    padding: 6rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    img {
        width: 476px;
    }
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['base-title']};
        font-weight: 900;
        font-size: 3rem;
        line-height: 1.3;
    }

    p {
        color: ${props => props.theme['base-subtitle']};
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.3;
    }
`

export const IconsGrid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`

export const GridItem = styled.span`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

interface IconBadgeProps {
    variant: 'orange' | 'gray' | 'yellow' | 'purple';
}

export const IconBadge = styled.div<IconBadgeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    border-radius: 50%;
    color: ${props => props.theme['white']};

    background: ${props => props.variant === 'orange' && props.theme['yellow-dark']};
    background: ${props => props.variant === 'yellow' && props.theme['yellow']};
    background: ${props => props.variant === 'purple' && props.theme['purple']};
    background: ${props => props.variant === 'gray' && props.theme['base-text']};
`