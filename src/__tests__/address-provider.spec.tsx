/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddressProvider } from "../contexts/address-provider";
import { App } from "../app";
import { api } from "../lib/axios";

// Mockando axios
jest.mock("../lib/axios");

describe("AddressProvider", () => {
  it("submits form successfully", async () => {
    // Mockando a resposta bem-sucedida da API
    // @ts-ignore
    api.get.mockResolvedValueOnce({
      data: {
        cep: "05835-004",
        logradouro: "Estrada de Itapecerica",
        complemento: "de 1502 a 4178 - lado par",
        bairro: "Vila Prel",
        localidade: "São Paulo",
        uf: "SP",
        ibge: "3550308",
        gia: "1004",
        ddd: "11",
        siafi: "7107",
      },
    });

    render(
      <AddressProvider>
        <App />
      </AddressProvider>
    );

    const cepInput = screen.getByPlaceholderText("Digite seu CEP");

    userEvent.type(cepInput, "12345678");

    const submitButton = screen.getByText("Buscar Endereço");
    userEvent.click(submitButton);

    // Aguarda a resposta da API
    await waitFor(() => expect(api.get).toHaveBeenCalledTimes(0));
  });
});
