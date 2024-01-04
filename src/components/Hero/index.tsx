import { GridItem, HeroContainer, HeroContent, IconBadge, IconsGrid, TextDiv } from "./styles";
import CoffeeImg from '../../assets/coffee-img.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Hero() {
    return (
        <HeroContainer>
            <HeroContent>
                <TextDiv>
                    <h1>Encontre o café perfeiro para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <IconsGrid>
                        <GridItem>
                            <IconBadge variant="orange">
                                <ShoppingCart size={20} weight="fill" />
                            </IconBadge>
                            Compra simples e segura
                        </GridItem>
                        <GridItem>
                            <IconBadge variant="gray">
                                <Package size={20} weight="fill" />
                            </IconBadge>
                            Embalagem mantém o café intacto
                        </GridItem>
                        <GridItem>
                            <IconBadge variant="yellow">
                                <Timer size={20} weight="fill" />
                            </IconBadge>
                            Entrega rápida e rastreada
                        </GridItem>
                        <GridItem>
                            <IconBadge variant="purple">
                                <Coffee size={20} weight="fill" />
                            </IconBadge>
                            O café chega fresquinho até você
                        </GridItem>
                    </IconsGrid>
                </TextDiv>
                <img src={CoffeeImg} alt="" />
            </HeroContent>
        </HeroContainer>
    )
}