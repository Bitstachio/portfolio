import type { ReactNode } from "react";

type InitialFadeInProps = {
  children: ReactNode;
};

const InitialFadeIn = ({ children }: InitialFadeInProps) => <div className="initial-fade-in">{children}</div>;

export default InitialFadeIn;
