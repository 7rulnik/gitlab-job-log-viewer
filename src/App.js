import React, { useState } from "react";
import "./App.css";

import Parser from "./Parser";
import { RawTrace}  from "./RawTrace";

const initPreElement = document.querySelector("pre");
const trace = initPreElement.innerText;

initPreElement.remove();

function App() {
  const [showParsed, toggle] = useState(true);

  return (
    <div className="App">
      <div className="settings">
        <button onClick={() => toggle(!showParsed)}>Toogle view</button>
      </div>
      {!showParsed && <RawTrace trace={trace} />}
      {showParsed && <Parser trace={trace} />}
    </div>
  );
}

export default App;
