import { render, fireEvent, waitFor } from "@testing-library/react";
import { AddressForm } from "../components/address-form";

// Mocking the useAddress hook
jest.mock("../hooks", () => ({
  useAddress: () => ({
    onSubmit: jest.fn(),
    isLoading: false,
  }),
}));

describe("AddressForm", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText, getByText } = render(<AddressForm />);

    expect(getByPlaceholderText("Digite seu CEP")).toBeInTheDocument();
    expect(getByText("Buscar Endereço")).toBeInTheDocument();
  });

  it("should show error message for invalid CEP format", async () => {
    const { getByPlaceholderText, getByText } = render(<AddressForm />);

    const cepInput = getByPlaceholderText("Digite seu CEP");
    fireEvent.change(cepInput, { target: { value: "123" } });

    const submitButton = getByText("Buscar Endereço");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("CEP deve ter 9 dígitos")).toBeInTheDocument();
    });
  });
});
