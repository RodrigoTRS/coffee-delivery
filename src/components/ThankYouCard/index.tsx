import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ThankYouCardContainer, ThankYouCardIcons, ThankYouCardLine, ThankYouCardLineText } from "./styles";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

const PaymentDataMapping = {
    "dinheiro": "Dinheiro",
    "cartao_de_credito": "Cartão de Crédito",
    "cartao_de_debito": "Cartão de Débito"
}

export function ThankYouCard() {

    const { address, paymentData } = useContext(OrderContext)

    const paymentMethod = PaymentDataMapping[paymentData.pagamento]

    return (
        <ThankYouCardContainer>

            <ThankYouCardLine>
                <ThankYouCardIcons variant="purple">
                    <MapPin size={20} weight="fill"/>
                </ThankYouCardIcons>
                <ThankYouCardLineText>
                    <p>Entrega em <strong>{address.rua}, {address.numero}</strong></p>
                    <p>{address.bairro} - {address.cidade}, {address.uf}</p>
                </ThankYouCardLineText>
            </ThankYouCardLine>

            <ThankYouCardLine>
                <ThankYouCardIcons variant="yellow">
                    <Timer size={20} weight="fill"/>
                </ThankYouCardIcons>
                <ThankYouCardLineText>
                    <p>Previsão de entrega</p>
                    <p><strong>20 min - 30 min</strong></p>
                </ThankYouCardLineText>
            </ThankYouCardLine>

            <ThankYouCardLine>
                <ThankYouCardIcons variant="orange">
                    <CurrencyDollar size={20} weight="fill"/>
                </ThankYouCardIcons>
                <ThankYouCardLineText>
                    <p>Pagamento na entrega</p>
                    <p><strong>{paymentMethod}</strong></p>
                </ThankYouCardLineText>
            </ThankYouCardLine>

        </ThankYouCardContainer>
    )
}