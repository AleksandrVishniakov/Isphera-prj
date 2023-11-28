import { useState } from "react";
import AmountSelector from "./components/AmountSelector";

function App() {
  const [comment, setComment] = useState("")

  return (
    <div className="App">
      <AmountSelector/>
      <h1>Comment: {comment}</h1>
      <input type="text" value={comment} onChange={event => setComment(event.target.value)}></input>
    </div>
  );
}

export default App;
