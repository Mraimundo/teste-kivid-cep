import { createContext } from "react";
import { z } from "zod";

export const AddressSchema = z.object({
  cep: z.string().min(8, { message: "CEP deve ter 8 caracteres" }),
  logradouro: z.string(),
  complemento: z.string().nullable(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string(),
});

export interface AddressFormData {
  cep: string;
  logradouro: string;
  complemento: string | null;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface FormData {
  cep: string;
}

type AddressContextData = {
  address: AddressFormData | null;
  isLoading: boolean;
  onSubmit: (data: FormData) => void;
};

export const AddressContext = createContext<AddressContextData>(
  {} as AddressContextData
);
