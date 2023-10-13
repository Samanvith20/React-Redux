 import {combineReducers} from "redux"
 import { productReducer } from "./ProductsReducers"
 const  reducers =combineReducers({
   allproducts:productReducer
 })
 export default reducers