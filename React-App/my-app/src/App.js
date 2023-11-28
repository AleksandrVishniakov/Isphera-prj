import CommentField from "./components/CommentField";
import CartItem from "./components/CartItem";
import "./styles/App.css"
import {useState} from "react"

function App() {
  const [items, setItems] = useState (
    [
      {title: "Product 1", value: 1},
      {title: "Product 2", value: 2},
      {title: "Product 3", value: 3},
    ]
  )

  return (
    <div className="App">
      
      {
        items.map((item) => 
          <CartItem item={item}/>)
      }
      
      <button onClick={ () => {
        console.log(items)
        const rnd = Math.floor(Math.random()*100)
        items.push({title: "Product " + rnd, value: rnd})
        setItems(items)}}>

      Add Cart</button>

      <CommentField/>
    </div>
  );
}

export default App;
