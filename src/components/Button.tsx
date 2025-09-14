
// Define props
type ButtonProps = {
  label: string | number;
  onClick: (value: string | number) => void;
  color?: "pink" | "lightPink";
};

export default function Button({ label, onClick, color}: ButtonProps) {

    // Styling for different coloured buttons
    let colorClass = '';
    if(color === 'pink') {
        colorClass = "bg-pink-300 hover:bg-pink-400 text-white"
    }
    else if(color === 'lightPink'){
        colorClass = "bg-pink-50 hover:bg-pink-200 text-black"
    }


  return <button onClick={() => onClick(label)} className={`pl-3 pr-3 rounded-full cursor-pointer text-[1rem] ${colorClass}`}>{label}</button>;
}
