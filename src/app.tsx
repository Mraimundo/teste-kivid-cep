import { AddressForm } from "./components/address-form";

import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <main className="w-full max-w-screen-xl h-screen flex items-center justify-center flex-col mx-auto p-6">
        <div className="pb-10 lg:pb-20 space-y-4">
          <h1 className="font-bold">Endereço completo via CEP</h1>
          <p className="font-medium">
            Consulte o endereço completo da sua região, adicionando o CEP
            abaixo:
          </p>
        </div>
        <div className="flex flex-col p-6 lg:p-10 space-y-8 bg-app_gray_900">
          <div className="flex justify-between items-start">
            <h2>Consulte o endereço da sua região via CEP</h2>
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQFKYGPWvFdxKA/company-logo_200_200/0/1651447530914/kivid_logo?e=1717027200&v=beta&t=FD2AS8YycuKf6BJZrscdSWg4nZ3KJmU5y0WVL-R5xEo"
              alt="Kivid Logo"
              className="size-10"
            />
          </div>
          <AddressForm />
        </div>
      </main>
    </>
  );
}
