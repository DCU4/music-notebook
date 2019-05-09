import React, { Component } from "react";
import  Key  from '../CircleOfFifths/Key.jsx'

export default class CircleOfFifths extends Component {
    constructor(props) {
        super(props);
        // this.handleKeyShowing = this.handleKeyShowing.bind(this);
        this.state = {
            // keyShowing: false
        }
    }

    // handleKeyShowing() {
    //     const keyShowing = this.state.keyShowing;
    //     const handle = keyShowing ? false : true;
    //     this.setState({
    //         keyShowing: handle
    //     });
    // }

    render() {
        const keyShowing = this.state.keyShowing;
        // each component has info like sharps/flats, scales, and relative minor keys
        const keys = [
            {
                key: 'A',
                sharps: '3#',
                flats: null,
                scale: 'image file',
                relativeMinor: 'f#m'
            },
            {
                key: 'B',
                sharps: '5#',
                flats: null,
                scale: 'image file',
                relativeMinor: 'g#m'
            },
            {
                key: 'C',
                sharps: null,
                flats: null,
                scale: 'image file',
                relativeMinor: 'am'
            }
        ]
        
        return (
            <main className="circle-of-fifths">
                {keys.map( (key,i) => 
                <Key
                    key={i}
                    keyOf={key.key}
                    sharps={key.sharps}
                    flats={key.flats}
                    scale={key.scale}
                    relativeMinor={key.relativeMinor}
                    // keyShowing={this.state.handleKeyShowing}
                />
                )}
            </main>
        );
    }
}
