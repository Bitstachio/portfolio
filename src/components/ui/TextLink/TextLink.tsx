import { ReactNode } from "react";

type TTextLinkProps = {
  href: string;
  italicize?: boolean;
  children: ReactNode;
};

// This is a very simple component with the main purpose of reducing boilerplate
// Useful for keeping JSX/TSX components with long pieces of text clean and avoid excessive line breaks
const TextLink = ({ href, italicize, children }: TTextLinkProps) => (
  <a className="app-text-link" href={href}>
    {children}
  </a>
);

export default TextLink;
