import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import {
  AddressFormData,
  FormData,
  AddressSchema,
  AddressContext,
} from "./address-context";
import { api } from "../lib/axios";

type AddressProviderProps = {
  children: React.ReactNode;
};

export function AddressProvider(props: AddressProviderProps) {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState<AddressFormData | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoading(true);
      const response = await api.get(`${data.cep}/json/`);
      const address = AddressSchema.parse(response.data);
      setAddress(address);
    } catch (error) {
      toast.error("Erro ao buscar o endereço!!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AddressContext.Provider value={{ onSubmit, address, isLoading }}>
      {children}
    </AddressContext.Provider>
  );
}
