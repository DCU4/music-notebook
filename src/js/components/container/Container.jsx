import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Bpm } from "../presentational/Bpm.jsx";

class Container extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
          <main>
            <h1>Welcome!</h1>

          <Bpm />
          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
