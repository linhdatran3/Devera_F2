import logo from './logo.svg';
import './App.css';
import Item from './components/Item/Item'
import Button from './components/Button/Button'
import PreviewItem from './components/PreviewItem/PreviewItem';
import Input from './components/Input/Input';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Item/>
      <Button/>
      <PreviewItem />
      <Input />
    </div>
  );
}

export default App;
