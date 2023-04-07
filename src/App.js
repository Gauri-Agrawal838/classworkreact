import logo from './logo.svg';
import './App.css';
import Style from './components/Style';
import ExternalCss from './components/ExternalCss';
import Css2 from './components/Css2';

function App() {
  return (
    <div className="App">
      {/* <Style backgroundcolor='green'/> */}
      <ExternalCss/>
      <Css2/>

    </div>
  );
}

export default App;
