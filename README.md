# React Hooks Talk for InstaWork Engineering Meet

**May 29, 2019**

## Running this project

1. Clone the repo and `cd` into the project

2. Install dependencies:

```sh
yarn
```

3. Start the dev server:

```sh
yarn start
```

## Introduction

Hooks are functions which lets you reuse stateful logic (without changing your component hierarchy)

Here's a simple React component:

```js
import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

This helps us avoid creating a _wrapper hell_ of components and solves problems with using patterns such as **higher order components** and **render props**.

- React hooks were introduced in v16.8
- Added in the recent React Native release v0.59
- Completely opt-in with no breaking changes
- Classes will still work

## Why hooks?

[Read the motivation behind hooks](https://reactjs.org/docs/hooks-intro.html#motivation)

- Reduce complexity of components by creating smaller reusable stateful functions.
- Co-locate the stateful logic together
  - Think setting up an event listener on mount and removing it before unmount
  - Easier to write tests
  - Avoids needs for an external state management library
- Instead of separating out component logic based on lifecycles, think about separating stateful logic in terms of the functionality it provides. [Think](https://github.com/react-native-hooks):
  - use network status?
  - use device orientation?
  - use clip board?
  - [use your imagination...](https://reactjs.org/docs/hooks-custom.html#useyourimagination)
- Use react without classes
  - `class` is just a syntactical sugar
    - `this` doesn't work the same way in javascript as it works in other languages
    - react components are closer to functions (as is javascript)
  - with the advent of frontend frameworks (such as [Svelte](https://svelte.dev/)) we're looking at the next level of optimizations
    - ahead of time compilation
    - classes are harder to optimize
    - don't minify well
    - makes hot reloading flaky

## Demo

1. `useState` hook to refactor `CounterClass` into `CounterWithHooks`
2. Creating a custom hook `useDocumentTitle`

- set the title after updating count
- set a title initially
- set a title initially and let it update as we keep increasing count

## Learning resources

- [React docs](https://reactjs.org/docs/hooks-intro.html)
- [React Native hooks examples](https://github.com/react-native-hooks)

Wanna discuss something? Drop me a message [@divyanshu013](https://twitter.com/divyanshu013) or slack `@divyanshu` 👋
