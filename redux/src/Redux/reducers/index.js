 import {combineReducers} from "redux"
 import { productReducer, selectproductsReducer } from "./ProductsReducers"
 const  reducers =combineReducers({
   allproducts:productReducer,
   product:selectproductsReducer,
 })
 export default reducers