import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

export default class Key extends Component {
    constructor(props) {
        super(props);
        this.handleKeyShowing = this.handleKeyShowing.bind(this);
        this.state = {
            keyShowing: this.props.keyShowing
        }
    }

    handleKeyShowing(e) {
        
        const keyShowing = this.state.keyShowing;
        const handle = keyShowing ? false : true;
        // console.log(e.currentTarget);
        this.setState({
            keyShowing: handle
        });
    }

    render() {
        const keyShowing = this.state.keyShowing;
        return (
        //     <CSSTransition 
        //     in={keyShowing} 
        //     timeout={200} 
        //     classNames="my-node"
        //     // onEnter={() => this.setState({keyShowing:false})}
        //     // onExited={() => this.setState({keyShowing:true})}
        //   >
              
              <div id={this.props.id} className={`key-grid-item ${this.props.className} ${this.props.keyOf}`} onClick={this.props.handleKeyShowing}>
              {/* <div className="key-container" >
                <div className="key-single"> */}
                    <h1>{this.props.keyOf}</h1>
                        <div className={keyShowing ? 'showing key-info' : 'key-info'}>
                            <p>{this.props.sharps }</p>
                            <p>{this.props.flats }</p>
                            <p>{this.props.scale }</p>
                            <p>{this.props.relativeMinor }</p>
                        </div>
                {/* </div>
              </div> */}
            </div>
            
        //   </CSSTransition>
            

        );
    }
}
