import React, { Component } from "react";
import Key from '../CircleOfFifths/Key.jsx'

export default class CircleOfFifths extends Component {
  constructor(props) {
    super(props);
    this.handleKeyShowing = this.handleKeyShowing.bind(this);
    this.state = {
      keyShowing: false,
      keyType: ''
    }
  }

  handleKeyShowing (e)  {
    const keyShowing = this.state.keyShowing;
    const k = this.state.keyType;
    const handle = keyShowing ? false : true;
    console.log(e.currentTarget.id);

    this.setState({
      keyShowing: handle,
      keyType: e.currentTarget.id
    });
  }

  render() {
    const keyShowing = this.state.keyShowing;
    const k = this.state.keyType;
    console.log(k);
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
      <main className={keyShowing ? 'circle-of-fifths single-key-showing' : 'circle-of-fifths'} onClick={this.handleKeyShowing}>
          {!keyShowing ? (
            keys.map((key, i) =>
              <Key
                key={i}
                id={key.key}
                keyOf={key.key}
                sharps={key.sharps}
                flats={key.flats}
                scale={key.scale}
                relativeMinor={key.relativeMinor}
                keyShowing={keyShowing}
                handleKeyShowing={this.handleKeyShowing}
              />
            )
            ) : (
              <Key
              // key={i}
              id={k}
              // keyOf={key.key}
              // sharps={key.sharps}
              // flats={key.flats}
              // scale={key.scale}
              // relativeMinor={key.relativeMinor}
              keyShowing={keyShowing}
              handleKeyShowing={this.handleKeyShowing}
            />
            )
          }


      </main>
    );
  }
}
