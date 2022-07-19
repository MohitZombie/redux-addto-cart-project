import { combineReducers } from "redux";
import amountReducer from "./amountReducer"
import {cartreducer} from "./cartreducer"





const reducers = combineReducers({
    amount: amountReducer,
    cartreducer: cartreducer
})

export default reducers