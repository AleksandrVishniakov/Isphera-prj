import { useState } from "react";

function App() {
  const [bet, setBet] = useState(0)

  return (
    <div className="App">
      <h1>{bet}</h1>
      <button onClick={() => setBet(bet+1)}>+</button>
      <button onClick={() => setBet(bet-1)}>-</button>
    </div>
  );
}

export default App;
