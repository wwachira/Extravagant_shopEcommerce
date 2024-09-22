import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice"





const store = configureStore({  //properties you need to pass
    reducer : {
        auth: authReducer, //global reducer/route reducer
    },
});
export default store;