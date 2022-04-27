import React from "react";
import "./App.css";

function App() {
  const [text, setText] = React.useState("");
  const [make, setMake] = React.useState("");
  const [version, setVersion] = React.useState("");

  React.useEffect(() => {
    if (version || !window.ipcRenderer) {
      return;
    }

    window.ipcRenderer.send();
    window.ipcRenderer.getVersion((data) => {
      setVersion(data.version);
    });
  }, [version]);

  const handleClickHTTP = () => {
    fetch("http://localhost:8000")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.message);
        setText(data.message);
      });
  };

  const handleClickHTTPS = () => {
    fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick&brand=boosh"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data[0].name);
        setMake(data[0].name);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>{`Teste HTTP -> ${text}`}</span>
        <span>{`Teste HTTPs -> ${make}`}</span>
        <span>{`Version ${version}`}</span>
      </header>
      <button onClick={handleClickHTTP}>HTTP - Clique Aqui!</button>
      <button onClick={handleClickHTTPS}>HTTPS - Clique Aqui!</button>
    </div>
  );
}

export default App;
