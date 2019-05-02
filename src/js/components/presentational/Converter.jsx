import React, { Component } from 'react';

export class Converter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      isSelected: false,
      isDisabled: true
    }
  }

  handleChange() {
    const isSelected = this.state.isSelected;
    const handle = isSelected ? false : true
    const number = document.getElementById('number');
    number.value = "";

    this.setState({
      isSelected: handle
    })
  }

render() {
  const isSelected = this.state.isSelected;
  const isDisabled = this.state.isDisabled;
  const deg = <span>&#176;</span>; // degree symbol
  const styles = {
    isWhite: 'white',
    isBlack: 'black'
  }


    return (
      <div className="converter">
        <div className="selector">
          <p className={!isSelected ? 'selected' : ''} onClick={!isSelected ? null : this.handleChange} id="FtoC">
            <span>F{deg}</span> to <span>C{deg}</span>
          </p>
          <p className={isSelected ? 'selected' : ''} onClick={isSelected ? null : this.handleChange} id="CtoF">
            <span>C{deg}</span> to <span>F{deg}</span>
          </p>
        </div>
        <div className="input-container">
          <input
            onChange={e => this.setState({ isDisabled: isDisabled || e.target.value !='' ? false : true })}
            id="number"
            type="number"
            placeholder={!isSelected ? '32' : '0'}
          />
          <span>{!isSelected ? 'F' : 'C'}{deg}</span>
        </div>
        <button
          style={(this.props.convert < 32) ? {color: styles.isWhite} : {color: styles.isBlack}}
          disabled={isDisabled}
          onClick={!isSelected ? this.props.handleFtoC : this.props.handleCtoF}
        >Convert</button>
        <p id="converted">Converted: {!isSelected ? this.props.convert+' C' : (this.props.convert == 0 ? 32 : this.props.convert)+' F'}{deg}</p>
      </div>

    );
  }
}