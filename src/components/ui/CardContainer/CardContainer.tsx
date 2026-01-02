import { ReactNode } from "react";

type TCardContainer = {
  id: string;
  children: ReactNode;
};

const CardContainer = ({ id, children }: TCardContainer) => (
  <section id={id} className="flex scroll-mt-16 flex-col gap-3">
    {children}
  </section>
);

export default CardContainer;
