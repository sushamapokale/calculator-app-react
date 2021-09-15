import React, { Component } from "react";
import KeypadComponent from "./components/keypadComponent"
import "./index.css"
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  onClick = button => {

    if (button === 'C')
      this.reset();
    else if (button === 'CE')
      this.backspace()
    else if (button === '=')
      this.calculate()
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <KeypadComponent result={this.state.result} onClick={this.onClick} />

      </div>
    )
  }
}