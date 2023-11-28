import { useState } from "react";

const AmountSelector = (props) => {
  const [bet, setBet] = useState(props.item.value)

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
