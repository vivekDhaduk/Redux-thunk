import { combineReducers } from "redux";
import { productReduser, selectedProductReducer } from "./productReduser";

const reducer = combineReducers({
    allProducts:productReduser,
    product:selectedProductReducer,
})

export default reducer;