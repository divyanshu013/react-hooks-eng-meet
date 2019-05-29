import React from "react";
import "./App.css";

import CounterClass from "./components/CounterClass";
import CounterWithHooks from "./components/CounterWithHooks";

function App() {
  return (
    <section>
      <CounterClass />
      <CounterWithHooks />
    </section>
  );
}

export default App;
