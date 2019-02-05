//IMPORT REACT BASIC COMPONENT
import React from 'react';

/*
DECLAR YOUR COMPONENT
//ES5 first way
var person = function(){
    return (
        <div>
            <h4>Name: </h4> {props.name}
            <h4>Age: </h4> {props.age}
        </div>
    );
}

//ES5 second way
function Person(props){
    return (
        <div>
            <h4>Name: </h4> {props.name}
            <h4>Age: </h4> {props.age}
        </div>
    );
}
*/
//ES6
const person = (props) => {
    return (
        <p>
            Name: {props.name} <br/>
            Age: {props.age}
        </p>
    );
};

//EXPORT YOUR COMPONENT
export default person;


