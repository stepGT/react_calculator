import React, {Component} from 'react';
import './Calculator.scss';

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
  }

  handleOperationChange(e) {
    let {number1, number2} = this.state;
    let operation = e.currentTarget.value;
    this.setState({operation: operation});
    this.showResult(operation, number1, number2);
  }

  handleNumber1Change(e) {
    let {number2, operation} = this.state;
    let number1 = Number(e.currentTarget.value);
    this.setState({number1: number1});
    this.showResult(operation, number1, number2);
  }

  handleNumber2Change(e) {
    let {number1, operation} = this.state;
    let number2 = Number(e.currentTarget.value);
    this.setState({number2: number2});
    this.showResult(operation, number1, number2);
  }

  showResult(operation, number1, number2) {
    let result = 0;
    switch (operation) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
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
            <input onChange={this.handleNumber1Change.bind(this)}
                   value={this.state.number1}
                   type="text"/>
          </div>
          <div>
            <select onChange={this.handleOperationChange.bind(this)} name=""
                    id="">
              <option value='+'>+</option>
              <option value='-'>-</option>
            </select>
          </div>
          <div>
            <input onChange={this.handleNumber2Change.bind(this)}
                   value={this.state.number2}
                   type="text"/>
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