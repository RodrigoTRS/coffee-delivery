import { Button } from "@/components/button";
import { PaymentMethodOptions } from "../delivery-data";
import { Banknote, CreditCard, Landmark } from "lucide-react";

interface PaymentMethodSelector {
    paymentMethod: PaymentMethodOptions | null;
    togglePaymentMethod: (method: PaymentMethodOptions) => void;
}

export function PaymentMethodSelector({
    paymentMethod,
    togglePaymentMethod
}: PaymentMethodSelector) {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
                className="bg-neutral-200"
                selected={paymentMethod === "credito"}
                 type="button"
                onClick={() => togglePaymentMethod("credito")}
            >
                <CreditCard className="w-5 h-5 text-purple"/>
                CARTÃO DE CRÉDITO
            </Button>
            <Button
                className="bg-neutral-200"
                selected={paymentMethod === "debito"}
                type="button"
                onClick={() => togglePaymentMethod("debito")}
            >
                <Landmark className="w-5 h-5 text-purple"/>
                CARTÃO DE DÉBITO
            </Button>
            <Button
                className="bg-neutral-200"
                selected={paymentMethod === "dinheiro"}
                type="button"
                onClick={() => togglePaymentMethod("dinheiro")}
            >
                <Banknote className="w-5 h-5 text-purple"/>
                DINHEIRO
            </Button>
        </div>

    )
}