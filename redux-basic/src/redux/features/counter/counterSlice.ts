import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}
const counterSlice = createSlice({
    name: "copunter",
    initialState,
    reducers:{
        increment:()=>{
            
        }
    }
})

export default counterSlice.reducer;