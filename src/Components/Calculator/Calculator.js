import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      number1: 10,
      number2: 7,
      operation: '+'
    };
    this.showResult = this.showResult.bind(this);
    this.handleNumber1Change = this.handleNumber1Change.bind(this);
    this.handleNumber2Change = this.handleNumber2Change.bind(this);
    this.handleOperationChange = this.handleOperationChange.bind(this);
  }

  handleOperationChange(e) {
    this.setState({
      operation: e.target.value
    });
  }

  handleNumber1Change(e) {
    this.setState({
      number1: +e.target.value
    });
  }

  handleNumber2Change(e) {
    this.setState({
      number2: +e.target.value
    });
  }

  showResult() {
    let result = 0;
    switch (this.state.operation) {
      case '+':
        result = this.state.number1 + this.state.number2;
        break;
      case '-':
        result = this.state.number1 - this.state.number2;
        break;
      default:
        break;
    }
    this.setState({result: result});
  }

  render() {
    return (
        <div className="react_calculator">
          <div>
            <input onChange={this.handleNumber1Change}
                   value={this.state.number1}
                   type="text"/>
          </div>
          <div>
            <select onChange={this.handleOperationChange} name="" id="">
              <option value='+'>+</option>
              <option value='-'>-</option>
            </select>
          </div>
          <div>
            <input onChange={this.handleNumber2Change}
                   value={this.state.number2}
                   type="text"/>
          </div>
          <div>
            <button onClick={this.showResult}>Calculate</button>
          </div>
          <div>
            Result <span>
            {this.state.number1}
            {this.state.operation}
            {this.state.number2} = {this.state.result}
            </span>
          </div>
        </div>
    );
  };
}

export default Calculator;