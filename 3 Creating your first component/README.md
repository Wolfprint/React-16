# Creating your First Component

Components let you split the UI of your page into independent, reusable pieces that can be controlled in isoletion.

Component are like JavaScript functions, they accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

#Function vs Class Components

The simplest way to define a React Component is to write a JavaScript function

```javascript
function Wellcome(props){
    return <h1>Hello, {props.name}</h1>;
}
```

For more detailed information please [click here](https://reactjs.org/docs/components-and-props.html)