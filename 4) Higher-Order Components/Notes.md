## Higher-Order Components

A component that returns another component instead of JSX. They are just functions that returns components. HOCs used for sharing complex behaviour between multiple components (similar to Container components). They are also help us with adding extra functionality to existing components.

HOCs (like in the PrintProps) doesn't start with capital letters because we almost never show them in the JSX directly.

```
MyComponent ---> <h1>I'm JSX!</h1>

HOC ---> SomeComponent ---> <h1>I'm JSX!</h1>
```
