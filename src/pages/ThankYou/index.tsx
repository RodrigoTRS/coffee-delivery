import { ThankYouContainer, ThankYouContent, ThankYouHeader, ThankYouText } from "./styles";
import ThankYouImg from '../../assets/thank-you.svg'
import { ThankYouCard } from "../../components/ThankYouCard";

export function ThankYou() {
    return (
        <ThankYouContainer>
            <ThankYouContent>
                <ThankYouText>
                    <ThankYouHeader>
                        <h1>Uhu! Pedido confirmado</h1>
                        <p>Agora é só aguardar que logo o café chegará até você</p>
                    </ThankYouHeader>
                    <ThankYouCard />
                </ThankYouText>
                <img src={ThankYouImg} alt="" />
            </ThankYouContent>
        </ThankYouContainer>
    )
}