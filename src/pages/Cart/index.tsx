import { CurrencyDollar, MapPin } from "phosphor-react";
import { AddressContainer, AddressHeader, CartContainer, CartContent, CartSummary, FormContainer, PaymentContainer, PaymentHeader, SummaryContainer } from "./styles";

export function Cart() {
    return (
        <CartContainer>
            <CartContent>

                <FormContainer>

                    <h2>Complete seu pedido</h2>

                    <AddressContainer>
                         <AddressHeader>
                            <MapPin size={24} />
                            <div>
                                <h3>Endereço de Entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                         </AddressHeader>
                    </AddressContainer>

                    <PaymentContainer>
                        <PaymentHeader>
                            <CurrencyDollar size={24} />
                            <div>
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentHeader>
                    </PaymentContainer>

                </FormContainer>
                
                <CartSummary>
                    <h2>Cafés selecionados</h2>
                    <SummaryContainer>

                    </SummaryContainer>
                </CartSummary>
            </CartContent>
        </CartContainer>
    )
}