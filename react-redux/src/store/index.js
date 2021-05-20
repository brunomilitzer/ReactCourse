import {configureStore} from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export const counterActions = counterReducer.actions;
export const authActions = authReducer.actions;

export default store;
