interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }:InputProps) => (
  <input value={value} onChange={onChange} />
);
