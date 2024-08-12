"use client"

import Image from "next/image";
import { Clock, DollarSign, MapPin } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";
import { capitalize } from "@/utils/capitalize";

export function ThankYou() {

  const { orderData } = useContext(CartContext)

  const { rua, numero, cidade, uf, metodo_de_pagamento } = orderData

  const methodString = metodo_de_pagamento === "dinheiro"
    ? capitalize(metodo_de_pagamento)
    : "Cartão de " + capitalize(metodo_de_pagamento!)
    

  return (
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-16">

        <div className="flex flex-col w-full gap-8">

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-left text-yellow-dark">
              Uhu! Pedido confirmado
            </h1>
            <p className="text-lg text-muted-foreground text-left">
              Agora é só aguardar que logo o café chegará até você
          </p> 
          </div>

          <div className="flex flex-col gap-4 w-full border-2 border-purple rounded-md rounded-tr-[32px] rounded-bl-[32px] p-8">
          
            <span className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-purple">
                <MapPin className="w-6 h-6 text-white"/>
              </div>
              <div>
                <h2>Entrega em
                  {" "}
                  <b>{rua}, {numero}</b>
                </h2>
                <p>{cidade}, {uf}</p>
              </div>
            </span>

            <span className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-yellow">
                <Clock className="w-6 h-6 text-white"/>
              </div>
              <div>
                <h2>Previsão de entrega</h2>
                <p><b>20 min - 30 min</b></p>
              </div>
            </span>

            <span className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-yellow-dark">
                <DollarSign className="w-6 h-6 text-white"/>
              </div>
              <div>
                <h2>Pagamento na entrega</h2>
                <p><b>{methodString}</b></p>
              </div>
            </span>

          </div>

        </div>


        <div className="flex items-center justify-center w-full">
          <Image
            src={"/thank-you.png"}
            alt="Coffee cup"
            width={476}
            height={360}
            />
        </div>

    </section>
    )
}