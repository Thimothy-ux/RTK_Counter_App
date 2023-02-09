import { reducerFn } from "../reduxSlice/Redux_Slice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore( { reducer : { data : reducerFn } });

export default store;

