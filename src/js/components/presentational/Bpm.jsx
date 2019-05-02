import React, { Component } from 'react';

export class Bpm extends Component {
  constructor(props) {
    super(props);
    this.handleBpm = this.handleBpm.bind(this);
    this.state = {
      bpm: 0,
      time: []
    }
  }

  handleBpm(e) {
    const bpm = this.state.bpm;
    const time = this.state.time;
    // const time = [];
    // console.log(bpm)
    if(e.keyCode == 32) {

      // time.push(e.timeStamp);
      // const handle = time.map((t,i) =>  e.timeStamp - t)
      // console.log(handle);
      // console.log(time);


      //bpm is based off of time. the longer intervals between the time space is pressed, the lower the bpm
      // when you hit space, a 15s timer starts. then count how many times space is pressed in that time. then calculate bpm
      this.setState({
        bpm: (bpm+1)
      })
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.handleBpm, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleBpm, false);
  }

render() {
  const bpm = this.state.bpm;
    return (
      <main>
        <div>Hello</div>
      <p>{bpm*4}</p>
      </main>

    );
  }
}