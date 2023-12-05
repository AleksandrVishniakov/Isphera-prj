import './App.css';
import SiteHeader from './components/SiteHeader';

function App(props) {
  return (
    <div className="App">
      <SiteHeader item={{header: props.item.configs.header, description: props.item.configs.description}}/>
    </div>
  );
}

export default App;
