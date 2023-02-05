## Functional Programming and React

It's not a design pattern but it leads to some interesting design patterns in React.

It's a method of organizing code in a way that:

1. Minimizes mutation and state change.
2. Keep functions independent of external data (Pure Functions)
3. Treats functions as first-class citizens

# Applications of FP in React

Controlled components.
Function Components.
Higher-Order Components.
Recursive Components (uses recursion to have desired effect).
Partially Applied Components (allow us to take more general components and by passing in only a subset of that components props, create more specific versions of that component ).
Component Composition (Take several different components and are able to combine them into a component to achive desired effect)

```
const useProducts = () => {
  const [products, setProducts] = useState([]);

  // ... load the products
  return products;
};

const products = useProducts()
```
