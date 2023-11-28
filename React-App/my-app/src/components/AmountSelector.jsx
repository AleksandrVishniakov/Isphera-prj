import { useState } from "react";

const AmountSelector = () => {
  const [bet, setBet] = useState(0)

  return (
    <div>
        
      <h1>{bet}</h1>
      <button onClick={() => setBet(bet+1)}>+</button>
      <button onClick={() => setBet(bet-1)}>-</button>
    </div>
  );
}

export default AmountSelector;
