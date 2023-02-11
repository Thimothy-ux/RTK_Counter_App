import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = { value : 0 }



export const getAPI = createAsyncThunk( "counter/dataFetching" , async (thunkAPI) =>
{
    try{
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=8e94b63eca076cd76f6a4bc17d9b4bc8");
        return data.original_title;
    }
    catch(e)
    {
        return e;
    }
}  )



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
        },
        extraReducers : (builder) => {
             builder.addCase( getAPI.pending, (state, {payload}) =>
            {
                state.loading = true;
            });

             builder.addCase( getAPI.fulfilled, (state, {payload}) =>
            {
                state.loading = false;
                state.data = payload;
            });
           
            builder.addCase( getAPI.rejected, ( state, {payload} ) =>
            {
                state.loading = false;
                state.data = payload;

            });

        }
        
    })


export  const {increment , decrement , addBy , clear}  = slice.actions;

export const reducerFn =  slice.reducer;