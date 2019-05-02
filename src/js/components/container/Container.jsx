import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Converter } from "../presentational/Converter.jsx";

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleFtoC = this.handleFtoC.bind(this);
        this.handleCtoF = this.handleCtoF.bind(this);
        this.state = {
          convert: Math.floor((32-32)*(5/9))
        }
    }

    handleCtoF() {
      const number = document.getElementById('number');
      const n = number.value;

      this.setState({
        convert:  Math.floor((n * 9/5) + 32)
      }, 
      function() {
        const temp = Math.floor(this.state.convert);
        // console.log(temp)

        if (temp > 80){
          document.body.style.backgroundPosition = '0% 0%'; 

        } else if (temp > 65 && temp <= 80){
          document.body.style.backgroundPosition = '0% 20%';

        } else if (temp > 55 && temp <= 65){
          document.body.style.backgroundPosition = '0% 40%';

        } else if (temp >  45 && temp <= 55) {
          document.body.style.backgroundPosition = '0% 60%'; 

        } else if (temp > 32 && temp <= 45) {
          document.body.style.backgroundPosition = '0% 80%'; 

        } else {
          document.body.style.backgroundPosition = '0% 100%';
          document.body.style.color = 'white'; 
        }
      });

    }
    handleFtoC() {
      const number = document.getElementById('number');
      const n = number.value;

      this.setState({
        convert: Math.floor((n-32)*(5/9))
      }, 
      function() {
        const temp = Math.floor(this.state.convert);
        if (temp > 26){
          document.body.style.backgroundPosition = '0% 0%'; 

        } else if (temp > 18 && temp <= 26){
          document.body.style.backgroundPosition = '0% 20%';

        } else if (temp > 12 && temp <= 18){
          document.body.style.backgroundPosition = '0% 40%';

        } else if (temp >  6 && temp <= 12) {
          document.body.style.backgroundPosition = '0% 60%'; 

        } else if (temp > 0 && temp <= 6) {
          document.body.style.backgroundPosition = '0% 80%'; 

        } else {
          document.body.style.backgroundPosition = '0% 100%';
          document.body.style.color = 'white'; 
        }
      }
      );
    }

    render() {
        return (
          <main>
            <h1>Convert Away!</h1>
            <Converter
              handleFtoC={this.handleFtoC}
              handleCtoF={this.handleCtoF}
              convert={this.state.convert}
            />

          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
