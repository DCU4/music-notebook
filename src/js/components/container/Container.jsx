import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Converter } from "../presentational/Converter.jsx";
import  CircleOfFifths  from "../presentational/CircleOfFifths/CircleOfFifths.jsx";

class Container extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
          
            <CircleOfFifths />
        

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
