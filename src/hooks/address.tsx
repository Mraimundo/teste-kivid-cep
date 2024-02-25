import { AddressContext } from "../contexts/address-context";
import { useContext } from "react";

export function useAddress() {
  const context = useContext(AddressContext);
  return context;
}
