import CommentField from "./components/CommentField";
import CartItem from "./components/CartItem";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <CartItem item={{title: "Product 1"}}/>
      <CommentField/>
    </div>
  );
}

export default App;
