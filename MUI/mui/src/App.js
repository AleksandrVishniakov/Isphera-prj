import './App.css';
import Box from '@mui/material/Box';
import { SignUpForm } from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <Box alignItems="center" height="100vh" width="100vw" display="flex" justifyContent="center">
        <SignUpForm/>
      </Box>
    </div>
  );
}

export default App;