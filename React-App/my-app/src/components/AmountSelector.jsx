import { useState } from "react";

const AmountSelector = () => {
  const [bet, setBet] = useState(0)

  return (
    <div className="AmountSelector">
      <h1>{bet}</h1>
      <div>
        <button onClick={() => setBet(bet+1)} className="button_add">+</button>
        <button onClick={() => setBet(bet-1)} className="button_add">-</button>
      </div>
    </div>
  );
}

export default AmountSelector;
