import React, { useState } from "react";

const CounterHooks = () => {
  const [count, setCount] = useState(0);
  return (
    <section style={{ padding: 16, border: "1px dashed dodgerblue" }}>
      <h2>Counter with Hooks</h2>
      <div>Clicked {count} times</div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </section>
  );
};

export default CounterHooks;
