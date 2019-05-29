import React, { Component } from "react";

class CounterClass extends Component {
  // using class properties proposal syntax
  state = {
    count: 0
  };

  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    return (
      <section style={{ padding: 16, border: "1px dashed dodgerblue" }}>
        <h2>Counter with Class (refactor this)</h2>
        <div>Clicked {this.state.count} times</div>
        <button onClick={this.increment}>Increment</button>
      </section>
    );
  }
}

export default CounterClass;
