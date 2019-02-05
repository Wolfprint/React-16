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

#Function vs Class Components

The simplest way to define a React Component is to write a JavaScript function

```javascript
function Wellcome(props){
    return <h1>Hello, {props.name}</h1>;
}
```

For more detailed information please [click here](https://reactjs.org/docs/components-and-props.html)