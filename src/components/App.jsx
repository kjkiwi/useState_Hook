import React from "react";

function App() {
  var count = 0;

  function increase() {
    count++;
    ReactDOM.render(
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>,
      document.getElementById("root")
    );
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
