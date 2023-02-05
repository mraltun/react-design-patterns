## Custom Hooks

Special hooks that we define ourselves, and that usually combine the functionality of one or more existing React hooks like "useState" or "useEffect".

They are used for sharing complex behaviour between multiple components (like HOCs and Container components)

```
const useProducts = () => {
  const [products, setProducts] = useState([]);

  // ... load the products
  return products;
};

const products = useProducts()
```
