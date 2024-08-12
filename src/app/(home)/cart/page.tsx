"use client"

import { useForm } from "react-hook-form";
import { DeliveryData } from "./sections/delivery-data";
import { Summary } from "./sections/summary";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

const cartFormSchema = z.object({
  cep: z.string().min(7, { message: "CEP inválido."}),
  rua: z.string(),
  numero: z.string().transform(e => parseInt(e)),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().min(2, { message: "UF Inválido" }).max(2, { message: "UF Inválido" }),
  metodo_de_pagamento: z.enum(["credito", "debito", "dinheiro"]),
})

export type CartFormData = z.infer<typeof cartFormSchema>

export default function Cart() {

  const router = useRouter()

  const { updateOrderData } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<CartFormData>({
    resolver: zodResolver(cartFormSchema)
  })

  function handleSubmitOrder(data: CartFormData) {
    updateOrderData(data)
    reset()
    router.push("/thank-you")
  }


  return (
    <form
      className="flex flex-col lg:flex-row gap-6 w-full"
      onSubmit={handleSubmit(handleSubmitOrder)}
    >
      
      <DeliveryData
        register={register}
        setValue={setValue}
        errors={errors}
      />

      <Summary isSubmitting={isSubmitting} />

    </form>
  );
}

