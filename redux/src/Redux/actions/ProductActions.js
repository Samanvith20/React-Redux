import {Actiontypes} from "../Constants/action-types"
export const setproducts =(products)=>{
 return{
    type:Actiontypes.SET_PRODUCTS,
    payload:products,
 }
}
export const selectproduct =(product)=>{
    return{
       type:Actiontypes.SELECTED_PRODUCT,
       payload:product,
    }
   }
   