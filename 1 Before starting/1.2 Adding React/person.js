function Person(props){
    return(
        <div class="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<Person name="Jorge" age="28"/>,document.getElementById("p1"));