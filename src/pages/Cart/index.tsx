import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { AddressContainer, AddressHeader, AddressInputs, CartContainer, CartContent, CartSummary, FlexInput, FormContainer, FormLine, PaymentContainer, PaymentHeader, PaymentType, PaymentTypeButton, ShortInput, SummaryContainer, UFInput } from "./styles";
import * as z from 'zod'
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { ProductListItem } from "../../components/ProductListItem";
import { Separator } from "../../components/ProductListItem/styles";

const checkoutFormValidationSchema = z.object({
    cep: z.number().min(8).max(8),
    rua: z.string().min(1, "Informe a rua"),
    numero: z.number().min(1, "Informe o numero"),
    complemento: z.string().optional(),
    bairro: z.string().min(1, "Informe o bairro"),
    cidade: z.string().min(1, "Informe a cidade"),
    uf: z.string().min(2).max(2),
    pagamento: z.enum(['cartao_de_credito', 'cartao_de_debito', 'dinheiro'])
})

type checkoutFormData = Zod.infer<typeof checkoutFormValidationSchema>

export function Cart() {

    const { cart } = useContext(OrderContext);

    const checkoutForm = useForm<checkoutFormData>({
        resolver: zodResolver(checkoutFormValidationSchema),
        defaultValues: {
            cep: undefined,
            rua: '',
            numero: undefined,
            complemento: '',
            bairro: '',
            cidade: '',
            uf: '',
            pagamento: undefined
        }
    });

    const { register, handleSubmit, reset, control } = checkoutForm;

    function handleCheckoutFormSubmit(data: checkoutFormData) {
        console.log(data)
        reset();
    }

    return (
        <CartContainer>
            <CartContent onSubmit={handleSubmit(handleCheckoutFormSubmit)}>

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

                        <AddressInputs>

                            <FormLine>
                                <ShortInput
                                    type="text"
                                    placeholder="CEP"
                                    title="CEP"
                                    {...register('cep')}
                                    />
                            </FormLine>

                            <FormLine>
                                <FlexInput
                                    type="text"
                                    placeholder="Rua"
                                    title="Rua"
                                    {...register('rua')}
                                />
                            </FormLine>

                            <FormLine>
                                <ShortInput
                                    type="text"
                                    placeholder="Número"
                                    title="Número"
                                    {...register('numero')}
                                />
                                <FlexInput
                                    type="text"
                                    placeholder="Complemento"
                                    title="Complemento"
                                    {...register('complemento')}
                                />
                            </FormLine>

                            <FormLine>
                                <ShortInput
                                    type="text"
                                    placeholder="Bairro"
                                    title="Bairro"
                                    {...register('bairro')}
                                />
                                <FlexInput
                                    type="text"
                                    placeholder="Cidade"
                                    title="Cidade"
                                    {...register('cidade')}
                                />
                                <UFInput
                                    type="text"
                                    placeholder="UF"
                                    title="Unidade Federativa"
                                    {...register('uf')}
                                />
                            </FormLine>

                        </AddressInputs>

                    </AddressContainer>

                    <PaymentContainer>
                        <PaymentHeader>
                            <CurrencyDollar size={24} />
                            <div>
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentHeader>

                        <Controller
                            control={ control }
                            name="pagamento"
                            render={({field}) => {
                                return (
                                    <PaymentType onValueChange={field.onChange} value={field.value}>
                                        
                                        <PaymentTypeButton value="cartao_de_credito">
                                            <CreditCard size={20} />
                                            Cartão de Crédito
                                        </PaymentTypeButton>
                                        
                                        <PaymentTypeButton value="cartao_de_debito">
                                            <Bank size={20} />
                                            Cartão de Débito
                                        </PaymentTypeButton>
                                        
                                        <PaymentTypeButton value="dinheiro">
                                            <Money size={20} />
                                            Dinheiro
                                        </PaymentTypeButton>

                                    </PaymentType>
                                )
                            }}

                        />

                    </PaymentContainer>

                </FormContainer>
                
                <CartSummary>
                    <h2>Cafés selecionados</h2>
                    <SummaryContainer> 
                        {cart &&
                            cart.map((cartItem) => {
                                return (
                                    <>
                                        <ProductListItem
                                            product={cartItem.product}
                                            quantity={cartItem.quantity}
                                        />
                                        <Separator />
                                    </>
                                )
                            })
                        }
                    </SummaryContainer>
                </CartSummary>

            </CartContent>
        </CartContainer>
    )
}