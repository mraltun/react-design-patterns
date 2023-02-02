## Controller & Uncontrolled Components

We generally prefer controlled components. Main reason is that it makes the component re-useable. Also, it's easier to test since we setup a component with exact state we want, instead of having to create the component, manually make some changes and then trigger some event.

# Uncontrolled Components

Components that keep track of their own states and release data only when some even occurs (the submit event fror HTML forms)

```
const MyComponent = ({onSubmit}) => {
    const [state, setState] = useState()
    return ...
}

<MyComponent onSubmit={data => ...} />
```

Uncontrolled Modal itself is the one that is controling whether or not it shown. It also controls when it's hidden. None other component has control over what it is doing.

# Controlled Components

Components that do not keep track of their own state. All state is passed in as props (when we use the useState with text inputs).

```
const MyComponent = ({data, changeData, onSubmit}) => {
    return ...
}

<MyComponent data={...} changeData={()=>...} onSubmit={() => ...} />
```

Controlled Forms allows us to do form validation while user is typing (we can give feedback before they submit)

Controlled Modal isn't the one that taking care it's state, the parent component doing that.
