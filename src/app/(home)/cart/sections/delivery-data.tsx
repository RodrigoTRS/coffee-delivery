import { DollarSign, MapPin } from "lucide-react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CartFormData } from "../page";
import { useState } from "react";
import { PaymentMethodSelector } from "./components/payment-method-selector";
import { DeliveryDataForm } from "./components/delivery-data-form";

interface DeliveryData {
    register: UseFormRegister<CartFormData>
    setValue: UseFormSetValue<CartFormData>
    errors: FieldErrors<CartFormData>
}

export type PaymentMethodOptions = "credito" | "debito" | "dinheiro"

export function DeliveryData({
    register,
    setValue,
    errors
}: DeliveryData) {

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodOptions | null>(null)

    function togglePaymentMethod(method: PaymentMethodOptions) {
        setPaymentMethod(method)
        setValue("metodo_de_pagamento", method)
    }

    return (
        <section className="flex flex-col items-start w-full gap-2">

            <h2 className="text-xl font-semibold">Complete seu pedido</h2>

            <div className="flex flex-col gap-4 p-8 rounded-md bg-muted w-full">

                <header className="flex gap-2">
                    <MapPin className="w-6 h-6 text-yellow-dark"/>
                    <div className="flex flex-col gap-1 flex-1">
                        <h3 className="text-xl font-semibold leading-7">
                            Endereço de entrega
                        </h3>
                        <p>
                            Informe o endereço onde deseja receber seu pedido
                        </p>
                    </div>
                </header>   

                <DeliveryDataForm register={register} errors={errors}/>

            </div>

            <div className="flex flex-col gap-4 p-8 rounded-md bg-muted w-full">

                <header className="flex gap-2">
                    <DollarSign className="w-6 h-6 text-purple-dark"/>
                    <div className="flex flex-col gap-1 flex-1">
                        <h3 className="text-xl font-semibold leading-7">Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </header>

                <PaymentMethodSelector
                    paymentMethod={paymentMethod}
                    togglePaymentMethod={togglePaymentMethod}
                />

            </div>

         </section>
    )
}