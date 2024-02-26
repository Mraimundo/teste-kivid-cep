import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useAddress } from "../hooks";

import { Loading } from "./loading";
import { AddressDetails } from "./address-details";
import { IconClose } from "./icon-close";
import { cn } from "../lib/utils";

const addressSchema = z.object({
  cep: z
    .string()
    .length(9, { message: "CEP deve ter 9 dígitos" })
    .regex(/^\d{5}-\d{3}$/, {
      message: "CEP inválido, por favor digite o CEP no formato (XXXXX-XXX)",
    }),
});

type AddressFormData = z.infer<typeof addressSchema>;

export function AddressForm() {
  const { onSubmit, isLoading } = useAddress();

  const { register, handleSubmit, reset, formState } = useForm<AddressFormData>(
    {
      resolver: zodResolver(addressSchema),
    }
  );

  const handleFormSubmit = async (data: AddressFormData) => {
    if (!data.cep || formState.errors?.cep?.message) {
      return;
    }
    await onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full flex items-center lg:items-end flex-col gap-6 lg:flex-row justify-center lg:space-x-6"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="cep">
          CEP
        </label>
        <input
          type="text"
          placeholder="Digite seu CEP"
          {...register("cep")}
          className={cn(
            "border-2 border-zinc-800 focus:border-app_green_300 focus:ring-app_green_300 focus:outline-none rounded-lg px-12 py-3 bg-zinc-800/50 w-full text-sm",
            formState.errors?.cep &&
              "focus:border-red-400 focus:ring-red-400 border-2 focus:outline-none"
          )}
        />
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            disabled={isLoading || formState.isSubmitting || !formState.isValid}
            className="w-full lg:flex-1 flex items-center gap-2 px-10 lg:px-3 py-2.5 border-2 hover:border-app_green_500  border-app_green_300 hover:text-app_green_500 transition-colors text-app_green_300 font-bold cursor-pointer rounded-md  bg-transparent"
            type="submit"
          >
            {isLoading && (
              <Loader2
                className="size-3 animate-spin"
                data-testid="loading-spinner"
              />
            )}
            Buscar Endereço
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black/70" />
          <Dialog.Content className="lg:min-w-[42.5rem] min-w-[20rem]  fixed -translate-x-2/4 -translate-y-2/4 px-6 lg:px-12 py-10 rounded-md left-2/4 top-2/4 bg-white">
            <Dialog.Close className="absolute leading-[0] cursor-pointer text-gray-800 border-0 right-6 top-6 bg-transparen">
              <IconClose />
            </Dialog.Close>
            <Dialog.Title className="text-gray-800 mb-10 text-xl font-bold">
              Detalhes do Cep
            </Dialog.Title>
            {!isLoading && <AddressDetails />}
            {isLoading && <Loading />}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </form>
  );
}
