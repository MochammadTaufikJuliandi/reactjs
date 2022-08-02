import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Halo Bro
        </p>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
