import { Input } from "@/components/input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CartFormData } from "../../page";
import { ErrorMessage } from "@/components/error-message";

interface DeliveryDataFormProps {
    register: UseFormRegister<CartFormData>
    errors: FieldErrors<CartFormData>
}

export function DeliveryDataForm({
    register,
    errors
}: DeliveryDataFormProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <label htmlFor="cep" className="sr-only">CEP</label>
                <Input
                    id="cep"
                    type="number"
                    placeholder="CEP"
                    className="md:w-[180px]"
                    {...register("cep")}
                />
                <ErrorMessage message={errors.cep?.message} />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="rua" className="sr-only">Rua</label>
                <Input
                    id="rua"
                    type="text"
                    placeholder="Rua"
                    {...register("rua")}
                />
                <ErrorMessage message={errors.rua?.message} />
            </div>


                <div className="flex flex-col md:flex-row gap-4">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="num" className="sr-only">Número</label>
                        <Input
                            id="num"
                            type="number"
                            placeholder="Número"
                            className="md:w-[180px]"
                            {...register("numero")}
                        />
                        <ErrorMessage message={errors.numero?.message} />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="complemento" className="sr-only">Complemento</label>
                        <Input
                            id="complemento"
                            type="text"
                            placeholder="Complemento"
                            className="flex-1"
                            {...register("complemento")}
                        />
                        <ErrorMessage message={errors.complemento?.message} />
                    </div>
                </div>

            <div className="flex flex-col md:flex-row gap-4">

                <div className="flex flex-col gap-2">
                    <label htmlFor="bairro" className="sr-only">Bairro</label>
                    <Input
                        id="bairro"
                        type="text"
                        placeholder="Bairro"
                        className="md:w-[180px]"
                        {...register("bairro")}
                    />
                    <ErrorMessage message={errors.bairro?.message}/>
                </div>

                <div className="flex flex-col sm:flex-row w-full gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="cidade" className="sr-only">Cidade</label>
                        <Input
                            id="cidade"
                            type="text"
                            placeholder="Cidade"
                            className="flex-1"
                            {...register("cidade")}
                        />
                        <ErrorMessage message={errors.cidade?.message}/>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="uf" className="sr-only">UF</label>
                        <Input
                            id="uf"
                            type="text"
                            placeholder="UF"
                            className="sm:w-[80px]"
                            {...register("uf")}
                        />
                        <ErrorMessage message={errors.uf?.message}/>
                    </div>
                </div>
            </div>

        </div>
    )
}