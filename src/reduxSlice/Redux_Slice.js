import { createSlice } from "@reduxjs/toolkit";


const initialState = { value : 0 }


const slice = createSlice(
    {
        name : "counter",
        initialState,
        reducers : {
            increment : (state) =>
            {
                state.value += 1;
            },
            decrement : (state) =>
            {
                state.value -= 1;
            },
            addBy : (state,action) => 
            {

                state.value += action.payload;
               
            },
            clear : (state) =>
            {

                state.value = 0;

            }
        }
    }
)


export  const {increment , decrement , addBy , clear}  = slice.actions;

export const reducerFn =  slice.reducer;