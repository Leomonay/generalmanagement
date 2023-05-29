"use client";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

interface Props {
  children: React.ReactNode;
}

export default function Provider({ children }: Props) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
