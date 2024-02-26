/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render } from "@testing-library/react";
import { AddressDetails } from "../components/address-details";

// Mocking the useAddress hook
jest.mock("../hooks", () => ({
  useAddress: () => ({
    address: {
      logradouro: "Rua Teste",
      complemento: "Complemento Teste",
      bairro: "Bairro Teste",
      localidade: "Localidade Teste",
      uf: "UF Teste",
    },
  }),
}));

describe("AddressDetails component", () => {
  it("should renders address details correctly", () => {
    const { getByText } = render(<AddressDetails />);
    // @ts-ignore
    expect(getByText("Logradouro: Rua Teste")).toBeInTheDocument();
    // @ts-ignore
    expect(getByText("Complemento: Complemento Teste")).toBeInTheDocument();
    // @ts-ignore
    expect(getByText("Bairro: Bairro Teste")).toBeInTheDocument();
    // @ts-ignore
    expect(getByText("Localidade: Localidade Teste")).toBeInTheDocument();
    // @ts-ignore
    expect(getByText("UF: UF Teste")).toBeInTheDocument();
  });
});
