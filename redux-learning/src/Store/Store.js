import { configureStore } from "@reduxjs/toolkit";
import BasicSlice from "../Feature/BasicSlice"

 const store = configureStore({

    reducer:{
        basic: BasicSlice
    }
})

export default store