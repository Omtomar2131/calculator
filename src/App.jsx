import { useState } from "react"
import "./app.css"
function App() {
  const [input,setInput] = useState("");
  const calculateResult = (input)=>{
    try{
      const operators = ['+','-','*','/'];
      let operator = null;

      for(let i=0; i<input.length;i++){
        if(operators.includes(input[i])){
          operator = input[i];
          break;
      }
    
  }
     if(!operator){
      setInput(parseFloat(input).toString());
      return;
     }
    
    const [operand1,operand2] = input.split(operator);
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = num1 / num2;
        break;
      default:
        throw new Error("Invalid operator");
    }

    setInput(result.toString());
  } catch (error) {
    console.log(error);
    setInput('Error');
  }
};

  const handleButtonClick = (value)=>{
    if(value === "C"){
       setInput('');
  } else if(value === '<'){
    setInput(input.slice(0,-1));
  } else if(value === '%'){
    setInput((parseFloat(input) / 100).toString());
  } else if(value === '='){
    calculateResult(input);
  }
  else{
    setInput(input + value);
    }
}

  return (
   
      <div className="container">
        <div className="calc">
          <h1 className="input">{input}</h1>
  <div>
    <button onClick={()=>{handleButtonClick("C")}}>C</button>
    <button onClick={()=>{handleButtonClick('<')}}>&lt;</button>
    <button onClick={()=>{handleButtonClick('%')}}>%</button>
    <button onClick={()=>{handleButtonClick('/')}}>/</button>
  </div>
  <div>
    <button onClick={()=>{handleButtonClick('7')}}>7</button>
    <button onClick={()=>{handleButtonClick('8')}}>8</button>
    <button onClick={()=>{handleButtonClick('9')}}>9</button>
    <button onClick={()=>{handleButtonClick('*')}}>*</button>
  </div>
  <div>
    <button onClick={()=>{handleButtonClick('4')}}>4</button>
    <button onClick={()=>{handleButtonClick('5')}}>5</button>
    <button onClick={()=>{handleButtonClick('6')}}>6</button>
    <button onClick={()=>{handleButtonClick('-')}}>-</button>
  </div>
  <div>
    <button onClick={()=>{handleButtonClick('1')}}>1</button>
    <button onClick={()=>{handleButtonClick('2')}}>2</button>
    <button onClick={()=>{handleButtonClick('3')}}>3</button>
    <button onClick={()=>{handleButtonClick('+')}}>+</button>
  </div>
  <div>
    <button onClick={()=>{handleButtonClick('0')}}>0</button>
    <button onClick={()=>{handleButtonClick('00')}}>00</button>
    <button onClick={()=>{handleButtonClick('.')}}>.</button>
    <button onClick={()=>{handleButtonClick('=')}}>=</button>
  </div>
</div>
 </div>
      
  )
}

export default App
