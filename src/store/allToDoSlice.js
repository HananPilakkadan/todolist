import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id:1,
        item:"buy milk"
    },
    {
        id:2,
        item:"go to shop"
    },
    {
        id:3,
        item:"buy vegitables"
    },
    {
        id:4,
        item:"clean car"
    }
];

const allToDoSlice = createSlice({
    name:"completed",
    initialState,
    reducers:{
        addItem(state, action){
            return [...state, {
                id:state.length+1,
                item:action.payload
            }]
        },
        remove(state, action){
             return state.filter(item => item.id !== action.payload)
        },
        revert(state, action){
            return [...state, action.payload]
        }
    }
})
export const { remove,addItem,revert} = allToDoSlice.actions;
export default allToDoSlice.reducer