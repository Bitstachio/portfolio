import { ReactNode } from "react";

type TCardProps = {
  url: string;
  ariaLabel: string;
  children?: ReactNode;
};

const Card = ({ url, ariaLabel, children }: TCardProps) => (
  <article className="group hover:border-accent relative mx-auto max-w-3xl rounded-lg border-t border-slate-500/20 bg-white/2 p-5 transition-all duration-300">
    <a href={url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={ariaLabel} />
    {children}
  </article>
);

export default Card;
