import { createSlice } from "@reduxjs/toolkit";

const BasicSlice = createSlice({
    name: "sakthi",
    initialState: {
        val: 0
    },
    reducers: {
        addFun: (state) => {            
            state.val += 1
        },
        lessFun: (state) => {
            state.val -= 1

        },
        add5Increment: (state,actions) => {            
            state.val += actions.payload

        }
    }
})

export const { add5Increment, addFun, lessFun } = BasicSlice.actions;
export default BasicSlice.reducer