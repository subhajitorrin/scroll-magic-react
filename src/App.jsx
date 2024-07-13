import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";

const App = () => {
  const ref = useRef();
  return (
    <div className="main">
      <div className="section"></div>
      <div className="App" id="canvusScroller">
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {(progress) => (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </div>
      <div className="section"></div>
    </div>
  );
};

export default App;
