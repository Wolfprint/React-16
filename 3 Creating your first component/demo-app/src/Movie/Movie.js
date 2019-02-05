import React, { Component } from 'react';

class Movie extends Component{
    render(){
        return(
            <p>
                Name: {this.props.name}
                <br/>
                Year: {this.props.year}
                <br/>
                Studio: {this.props.studio}
            </p>
        );
    }
}

export default Movie;