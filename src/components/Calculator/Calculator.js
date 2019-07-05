import React, {Component} from 'react';

class Calculator extends Component {
  render() {
    return (
        <div className="react_calculator">
          <input type="text"/>
          <select name="" id="">
            <option>+</option>
            <option>-</option>
          </select>
          <input type="text"/>
          <button>Result</button>
          <div></div>
        </div>
    );
  };
}

export default Calculator;