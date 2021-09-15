import React, {Component} from "react";

export default class KeypadComponent extends Component{
  
   createDigit=()=>{
     const digits=[];
    for(let i=1;i<10;i++)
      {
        digits.push(
          <button name={i}  data-testid={i} onClick={e => this.props.onClick(e.target.name)}>{i}</button>
        )
      }
      return(digits)
    }
    
  render(){
    
    return(
        <div class="calculator">

        <div class="display">
            <span  data-testid="result">{this.props.result}</span>
        </div>
        <div class="operators">
         <button name="/" data-testid="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
         <button name="*"   data-testid="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
         <button name="+"  data-testid="+"onClick={e => this.props.onClick(e.target.name)}>+</button>
         <button name="-"  data-testid="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
         <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
         <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
        </div>
        <div class="digits">
              {this.createDigit()}
            
            <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
           
            <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button name="="  data-testid="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
        </div>
       </div>
    )
  }
}