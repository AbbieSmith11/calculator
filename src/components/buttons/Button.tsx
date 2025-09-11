type ButtonProps = {
  label: string | number;
  onClick: (value: string | number) => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <button onClick={() => onClick(label)}>{label}</button>;
}
