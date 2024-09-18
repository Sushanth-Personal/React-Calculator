import { useReducer,useEffect,useState } from 'react';
import './App.css';

const numberReducer =(state,action) => {
    if(state===0){
        state='';
    }
    if(state.length>=11){
        console.log("Number Limit reacthed");
        return state;
    }
    switch(action.type){
        case 'Digit': return state+action.value;
    
    }

}
const App = () => {

const [number, dispatch] = useReducer(numberReducer,0);
const [isOverSize, setIsOverSize] = useState(false);

const handleDigitClick = (e) => {
    dispatch({type:'Digit', value:e.target.value});
}
useEffect(() => {
    setIsOverSize(number.length >= 9); 
}, [number]);

const displayFont = {
    fontSize:isOverSize?'48px':'64px'
};

  return (
   <div className='calculator'>
    <div className='display' style={displayFont}>
      {number}
    </div>
    <div className='button-container'>
        <div className='row row0'>
        <button id='clear'>AC</button> 
            <button id='sign'>+/-</button> 
            <button id='perc'>%</button>  
            <button className="oper" id='div'>÷</button>   
        </div>
        <div className='row row1'>
        <button id='seven' value={7} onClick={handleDigitClick}>7</button> 
            <button id='eight' value={8} onClick={handleDigitClick}>8</button> 
            <button id='nine' value={9} onClick={handleDigitClick}>9</button>  
            <button className="oper" id='mul'>x</button>   
        </div>
        <div className='row row2'>
            <button id='four' value={4} onClick={handleDigitClick}>4</button> 
            <button id='five' value={5} onClick={handleDigitClick}>5</button> 
            <button id='six' value={6} onClick={handleDigitClick}>6</button>  
            <button className="oper" id='sub'>-</button>          
        </div>
        <div className='row row3'>
        <button id='one' value={1} onClick={handleDigitClick}>1</button> 
            <button id='two' value={2} onClick={handleDigitClick}>2</button> 
            <button id='three' value={3} onClick={handleDigitClick}>3</button>  
            <button className="oper" id='add'>+</button>   
        </div>
        <div className='row row4'>
        
            <button id='zero' value={0} onClick={handleDigitClick}>0</button> 
            <button id='dot'>.</button>  
            <button className="oper" id='result'>=</button>   
        </div>
     
    </div>

   </div>
  )
}

export default App