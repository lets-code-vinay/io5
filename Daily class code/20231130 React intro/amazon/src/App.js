import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Vinay!! from ReactJS</h1>
        <img
          src="https://rukminim2.flixcart.com/image/224/224/xif0q/shopsy-smartwatch/q/i/f/1-85-android-ios-wise-eon-pro-black-ambrane-yes-original-imagky5tmpfucd4f.jpeg?q=90"
          alt="new img"
        />
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
    </div>
  );
}

export default App;
