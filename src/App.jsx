import React, { useReducer, useState } from "react";
import './App.css';


// const initialState=0;

// const reducer=(state,action)=>{
//   if(action.type==="INCREAMENT"){
//     return state+1;
//   }
//   if(action.type==="DECREAMENT"){
//     return state <= 0 ? 0 : state - 1;
//   }
//   return state;
// }

const App = () => {
 
  const [result, setResult] = useState("");

  const handleClick = (e) =>{
    setResult(result.concat(e.target.name));
  }

  const clear = ()=>{
    setResult("")
  }

  const backspace = () =>{
    setResult(result.slice(0, - 1));
  }

  const calculate = ()=>{
      setResult(eval(result))
  }
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result}/>
        </form>

        <div className="keypad">
            < button onClick={clear} id="clear">Clear</button>
            < button onClick={backspace} id="backspace">C</button>
            < button name="/" onClick={handleClick}>&divide;</button>
            < button name="7" onClick={handleClick}>7</button>
            < button  name="8" onClick={handleClick}>8</button>
            < button name="9" onClick={handleClick}>9</button>
            < button name="*" onClick={handleClick}>&times;</button>
            < button name="4" onClick={handleClick}>4</button>
            < button name="5" onClick={handleClick}>5</button>
            < button name="6" onClick={handleClick}>6</button>
            < button name="-" onClick={handleClick}>&ndash;</button>
            < button name="1" onClick={handleClick}>1</button>
            < button name="2" onClick={handleClick}>2</button>
            < button name="3" onClick={handleClick}>3</button>
            < button name="+" onClick={handleClick}>+</button>
            < button name="0" onClick={handleClick}>0</button>
            < button name="." onClick={handleClick}>.</button>
            < button onClick={calculate} id="result">=</button>
        </div>

      </div>



    
    </>
  )
  // const[state,dispatch] = useReducer(reducer,initialState)
  // return(
  //   <>
  //   <div className="main">
  //     <p>{state}</p>
  //     <div>
  //       <button className="btn " onClick={()=>dispatch({type:"INCREAMENT"})}>Increment</button>
  //       <button className="btn " onClick={()=>dispatch({type:"DECREAMENT"})}>Decrement</button>
  //     </div>
  //   </div>
  //   </>
  // )


}
export default App;