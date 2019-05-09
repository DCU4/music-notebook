import React, { Component } from "react";

export default class Key extends Component {
    constructor(props) {
        super(props);
        this.handleKeyShowing = this.handleKeyShowing.bind(this);
        this.state = {
            keyShowing: false
        }
    }

    handleKeyShowing() {
        const keyShowing = this.state.keyShowing;
        const handle = keyShowing ? false : true;
        this.setState({
            keyShowing: handle
        });
    }

    render() {

        return (
            <div className="key-single">
                <h1 onClick={this.handleKeyShowing}>{this.props.keyOf}</h1>
                {this.state.keyShowing ? 
                    <div>
                        <p>{this.props.sharps }</p>
                        <p>{this.props.flats }</p>
                        <p>{this.props.scale }</p>
                        <p>{this.props.relativeMinor }</p>
                    </div>
                    : null}
            </div>

        );
    }
}