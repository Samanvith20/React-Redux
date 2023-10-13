 import {combineReducers} from "redux"
 import { productreducer } from "./ProductsReducers"
 const  reducer =combineReducers({
   allproducts:productreducer
 })
 export default reducer