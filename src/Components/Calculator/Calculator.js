import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
        <div className="react_calculator">
          <div>
            <input type="text"/>
          </div>
          <div>
            <select name="" id="">
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </div>
          <div>
            <input type="text"/>
          </div>
          <div>
            <button>Calculate</button>
          </div>
          <div>
            Result <span>0</span>
          </div>
        </div>
    );
  };
}

export default Calculator;