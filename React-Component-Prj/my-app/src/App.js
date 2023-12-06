import './App.css';
import SiteHeader from './components/SiteHeader';
import QuestionsContainer from './components/questions/QuestionsContainer';

function App(props) {
  const cfg = props.item.configs
  return (
    <div className="App">
      <SiteHeader item={{header: cfg.header, description: cfg.description}}/>
      <QuestionsContainer item={{questions: cfg.questions}}/>
    </div>
  );
}

export default App;
