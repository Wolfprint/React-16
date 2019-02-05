# Creating your First Component

Components let you split the UI of your page into independent, reusable pieces that can be controlled in isoletion.

Component are like JavaScript functions, they accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

To create your own component, you have to follow this simple steps:

1. Create a folder with the name of your component starting with a capital leter

    ```shell
    mkdir Person
    ```

2. Inside this folder you will create a JS file that will contain your component definition. Here you should also place any image, css or unitary testing file that belongs to your component

    ![react component folder](../Images/component-folder-structure.PNG?raw=true "Component Folder Structure")

3. Inside your "Component.js" file you have to have three important things

    * Import React Component library. If you are working with function, you should import it as

        ```javascript
        import React from 'react';
        ```

        or if you are working with objects wou should import it as

        ```javascript
        import React, { Component } from 'react';
        ```

    * Declare your component (as a JS function or as an Object)
    * Export your component as default

    ![your component js](../Images/declaring-your-component.PNG?raw=true "Create your own component")

## Function components

The simplest way to define a React Component is to write a JavaScript function

```javascript
function Wellcome(props){
    return <h1>Hello, {props.name}</h1>;
}
```

In order for a function to be consider a valid React component it should follow this rules:

* Have to be empty or accept a single "props" (which stands for properties) object argument with data.
* Return a React component (HTML / JSX).

```javascript
function Wellcome(){
    return <h1>Hello World</h1>;
}
```

We call such components "function components" because they are literally JavaScript functions.

## Class components

You can also use a ES6 class to define a component, like this:

```javascript
class Person extends React.Component{
    render(props){
        return (
            <p>
                Name: {props.name} <br/>
                Age: {props.age}
            </p>
        );
    }
}
```

# Function vs Class Components

Both classes and function components are equivalen from React´s point of view. Classes have some additional features that will discuss in a future section.

For more detailed information please [click here](https://reactjs.org/docs/components-and-props.html)