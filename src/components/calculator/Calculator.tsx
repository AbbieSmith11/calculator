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

// calculater
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
    <section className="flex flex-col items-center justify-center bg-pink-100 p-6 rounded-2xl shadow-xl">
  <div className="mb-6 w-[250px] bg-white rounded-xl shadow-inner">
    <h1 className="text-right text-3xl font-mono p-4">{display || '0'}</h1>
  </div>

  <div className="flex flex-row space-x-4">

    {/* Numbers */}
    <div className="grid grid-cols-3 gap-4">
      <Button label={0} onClick={handleClick} color='pink'/>
      <Button label={1} onClick={handleClick} color='pink'/>
      <Button label={2} onClick={handleClick} color='pink'/>
      <Button label={3} onClick={handleClick} color='pink'/>
      <Button label={4} onClick={handleClick} color='pink'/>
      <Button label={5} onClick={handleClick} color='pink'/>
      <Button label={6} onClick={handleClick} color='pink'/>
      <Button label={7} onClick={handleClick} color='pink'/>
      <Button label={8} onClick={handleClick} color='pink'/>
      <Button label={9} onClick={handleClick} color='pink'/>
    </div>

    {/* Operator Buttons */}
    <div className="flex flex-col gap-3">
      <Button label={"+"} onClick={handleClick} color='lightPink'/>
      <Button label={"-"} onClick={handleClick} color='lightPink'/>
      <Button label={"%"} onClick={handleClick} color='lightPink'/>
      <Button label={"*"} onClick={handleClick} color='lightPink'/>
      <Button label={"/"} onClick={handleClick} color='lightPink'/>
      <Button label={"."} onClick={handleClick} color='lightPink'/>
    </div>

    {/* Reset and equals buttons */}
    <div className="flex flex-col gap-3">
        <Button label={"="} onClick={handleClick} color='lightPink'/>
        <Button label={"C"} onClick={handleClick} color='lightPink'/>
    </div>

  </div>
</section>
  );
}
