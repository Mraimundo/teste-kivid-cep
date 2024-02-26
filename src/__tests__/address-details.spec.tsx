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

    expect(getByText("Logradouro: Rua Teste")).toBeInTheDocument();
    expect(getByText("Complemento: Complemento Teste")).toBeInTheDocument();
    expect(getByText("Bairro: Bairro Teste")).toBeInTheDocument();
    expect(getByText("Localidade: Localidade Teste")).toBeInTheDocument();
    expect(getByText("UF: UF Teste")).toBeInTheDocument();
  });
});
