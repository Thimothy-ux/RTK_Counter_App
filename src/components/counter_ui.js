import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { decrement, increment, addBy, clear } from "../reduxSlice/Redux_Slice";



const Counter = () =>
{

    const dispatch = useDispatch();
    const value = useSelector( (state) => state.data.value ) 
    const [val, setVal] = useState(0)
    const num = Number(val) || 0;


    const Input = (e) => 
    {

      const c = e.target.value;
      setVal(c);

    }
    

    return (

       

        <>

          <h2>{value}</h2>
          <button onClick = { () => dispatch(increment())  }  >Increment</button>
          <button onClick = { () =>  dispatch(decrement()) } >Decrement</button>
          <br />
          <br />
          <input  onChange={ (e) => Input(e) }  />
          <br/>
          <br/>
          <button onClick = { () => dispatch(clear()) }  >Reset</button>
          <button onClick = { () => dispatch(addBy(num)) }  >Add by 10</button>

        </>

    )
}

export default Counter;