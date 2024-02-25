import { AddressProvider } from "./address-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return <AddressProvider>{children}</AddressProvider>;
}
