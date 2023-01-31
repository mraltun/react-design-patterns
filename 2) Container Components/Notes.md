## Container Components

Components that take care of loading and managing data for their child components. Our components shouldn't know where their data coming from.

<ContainerComponent><Child1/><Child2/></ContainerComponent>

```
const Child1 = () => {
    // load data...
    return ( // display data )
}

const Container = () => {
    // load data...
    return ( // pass data to children )
}

const Child1 = ({ data }) => {
    return ( // display data )
}
```
