import Image from "next/image";
import { IconBullet } from "@/app/(home)/sections/components/icon-bullet";
import { Box, Clock, Coffee, ShoppingCart } from "lucide-react";

export function HeroSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-16">

          <div className="flex flex-col w-full justify-between">
            <div className="flex flex-col gap-2 min-h-[240px]">
              <h1 className="text-4xl font-bold text-left">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-lg text-muted-foreground text-left">
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
              </p> 
            </div>

            <div className="grid grid-cols-2 w-full gap-y-8 gap-x-2">
              <IconBullet
                icon={<ShoppingCart />}
                text="Compra simples e segura"
                color="yellow"
              />
              <IconBullet
                icon={<Box />}
                text="Embalagem mantém o café intacto"
                color="gray"
              />
              <IconBullet
                icon={<Clock />}
                text="Entrega rápida e rastreada"
                color="gray"
              />
              <IconBullet
                icon={<Coffee />}
                text="O café chega fresquinho até você"
                color="purple"
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <Image
              src={"/hero.png"}
              alt="Coffee cup"
              width={476}
              height={360}
              />
          </div>

        </section>
    )
}