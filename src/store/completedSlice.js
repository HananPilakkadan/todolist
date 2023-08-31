import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    
];

const CompletedSlice = createSlice({
    name:"completed",
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
             return state.filter(item => item.id !== action.payload)
        }
    }
})
export const {add, remove} = CompletedSlice.actions;
export default CompletedSlice.reducer