import "../Button/Button.css";

interface ButtonProps {
  onClick: () => void;
  children: string;
}

export const Button = ({ onClick, children }:ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);

