type ButtonProps = {
    number: number;
}

export default function Button ({number}: ButtonProps) {


    return (
        <button>{number}</button>
    )
}