import { useState } from "react";
import AmountSelector from "./components/AmountSelector";
import CommentField from "./components/CommentField";

function App() {
  return (
    <div className="App">
      <AmountSelector/>
      <CommentField/>
    </div>
  );
}

export default App;
