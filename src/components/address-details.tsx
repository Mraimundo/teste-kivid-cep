import { useAddress } from "../hooks";

export function AddressDetails() {
  const { address } = useAddress();

  return (
    <>
      {address && (
        <div className="flex items-center gap-2">
          <p className="text-gray-800">Logradouro: {address.logradouro}</p>
          <p className="text-gray-800">
            Complemento: {address.complemento || "N/A"}
          </p>
          <p className="text-gray-800">Bairro: {address.bairro}</p>
          <p className="text-gray-800">Localidade: {address.localidade}</p>
          <p className="text-gray-800">UF: {address.uf}</p>
        </div>
      )}
    </>
  );
}
