import React, { Component } from "react";
import Key from '../CircleOfFifths/Key.jsx'

export default class CircleOfFifths extends Component {
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
        key: 'B/Cb',
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
      },
      {
        key: 'D',
        sharps: '2#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'bm'
      },
      {
        key: 'E',
        sharps: '4#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'c#m'
      },
      {
        key: 'F',
        sharps: null,
        flats: '1b',
        scale: 'image file',
        relativeMinor: 'am'
      },
      {
        key: 'G',
        sharps: '1#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'em'
      },
      {
        key: 'Ab',
        sharps: '3#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'f#m'
      },
      {
        key: 'Bb',
        sharps: '5#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'g#m'
      },
      {
        key: 'Db/C#',
        sharps: '2#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'bm'
      },
      {
        key: 'Eb',
        sharps: '4#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'c#m'
      },
      {
        key: 'Gb/F#',
        sharps: '1#',
        flats: null,
        scale: 'image file',
        relativeMinor: 'em'
      }
    ]

    return (
      <main className='circle-of-fifths'>
        {keys.map((key, i) =>
          <div id={key.key} className="key-grid-item" key={i} onClick={this.handleKeyShowing}>
            <Key
              id={key.key}
              keyOf={key.key}
              sharps={key.sharps}
              flats={key.flats}
              scale={key.scale}
              relativeMinor={key.relativeMinor}
            // keyShowing={this.state.handleKeyShowing}
            />
          </div>


        )}
      </main>
    );
  }
}
