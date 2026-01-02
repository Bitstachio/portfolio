import { ReactNode } from "react";

type TCardProps = {
  url: string;
  ariaLabel: string;
  children?: ReactNode;
};

const Card = ({ url, ariaLabel, children }: TCardProps) => (
  <article className="group relative mx-auto max-w-3xl rounded-lg border-t border-transparent p-5 transition-all duration-300 hover:border-slate-500/20 hover:bg-white/2">
    <a href={url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={ariaLabel} />
    {children}
  </article>
);

export default Card;
