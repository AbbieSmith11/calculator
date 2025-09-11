import Button from "../buttons/Button.tsx";
import { useState } from "react";

export default function Calculator(){

    // variable for calculator display
  const [display, setDisplay] = useState<string>("");

  // Handle button click
  const handleClick = (value: string | number) => {
    if (value === 'C') {
        setDisplay('');
        return;
    }
    if (value === '=') {
        handleEquals();
        return;
    }
    setDisplay(display + value.toString());
  };

  const handleEquals = () => {
    try {
        const result = new Function (`'use strict'; return (${display})`)();
        setDisplay(result.toString());
    }
    catch {
        setDisplay('Error')
    }
  }

  return (
    <section>
      <div>
        <p>{display || '0'}</p>
      </div>
      <div>
        <Button label={1} onClick={handleClick} />
        <Button label={2} onClick={handleClick} />
        <Button label={3} onClick={handleClick} />
        <Button label={4} onClick={handleClick} />
        <Button label={5} onClick={handleClick} />
        <Button label={6} onClick={handleClick} />
        <Button label={7} onClick={handleClick} />
        <Button label={8} onClick={handleClick} />
        <Button label={9} onClick={handleClick} />
      </div>
      <div>
        <Button label={"+"} onClick={handleClick}></Button>
        <Button label={"-"} onClick={handleClick}></Button>
        <Button label={"%"} onClick={handleClick}></Button>
        <Button label={"*"} onClick={handleClick}></Button>
        <Button label={"/"} onClick={handleClick}></Button>
        <Button label={"."} onClick={handleClick}></Button>
        <Button label={"C"} onClick={handleClick}></Button>
        <Button label={"="} onClick={handleClick}></Button>
      </div>
    </section>
  );
}
