import {Actiontypes} from "../Constants/action-types"
export const setproduct =(products)=>{
 return{
    type:Actiontypes.SET_PRODUCTS,
    payload:products,
 }
}
export const selectproduct =(products)=>{
    return{
       type:Actiontypes.SELECTED_PRODUCT,
       payload:products,
    }
   }
   export const removeselectedproduct =(products)=>{
    return{
       type:Actiontypes.REMOVE_SELECTED_PRODUCT,
       payload:products,
    }
   }
