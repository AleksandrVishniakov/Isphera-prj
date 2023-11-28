

function App() {
  let cnt = 0

  return (
    <div className="App">
      <h1>{cnt}</h1>
      <button onClick={() => cnt++}>+</button>
      <button onClick={() => cnt--}>-</button>
    </div>
  );
}

export default App;
