import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { decrement, increment, addBy } from "../reduxSlice/Redux_Slice";



const Counter = () =>
{
    const dispatch = useDispatch();
    const value = useSelector( (state) => state.data.value ) 

    return (

        <>

          <h2>{value}</h2>
          <button onClick = { () => dispatch(increment())  }  >Increment</button>
          <button onClick = { () =>  dispatch(decrement()) } >Decrement</button>
          <button onClick = { () => dispatch(addBy()) }  >Add by 10</button>

        </>
    )
}

export default Counter;