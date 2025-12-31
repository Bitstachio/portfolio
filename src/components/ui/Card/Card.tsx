import { ReactNode } from "react";

type TCardProps = {
  url: string;
  ariaLabel: string;
  children?: ReactNode;
};

const Card = ({ url, ariaLabel, children }: TCardProps) => (
  <article
    className="
      group relative mx-auto max-w-3xl p-5 rounded-lg transition-all duration-300 hover:bg-white/2
      border-t border-transparent hover:border-slate-500/20
    "
  >
    <a href={url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={ariaLabel} />
    {children}
  </article>
);

export default Card;
