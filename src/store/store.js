import { configureStore } from "@reduxjs/toolkit";
import completedSlice from "./completedSlice";
import allToDoSlice from "./allToDoSlice";

const store = configureStore({
    reducer:{
        completed : completedSlice,
        allToDo:allToDoSlice
    }
});
export default store;