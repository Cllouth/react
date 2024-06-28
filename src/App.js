import logo from './logo.svg';
import './App.css';
import Saudacao from './componentes/Saudacao';

function App() {
  let name = "teste";

  return (
    <div className="App">
      <Saudacao content={name}/>
    </div>
  );
}

export default App;
