import {Actiontypes} from "../Constants/action-types"
const initialstate ={
     products: [
        { 
            name:"Samanvith",
            id:1,
            category:"student"
    } ]
}
export const productreducer =(state=initialstate,{type,payload})=>{
 switch(type){
    case Actiontypes.SET_PRODUCTS:
        return {...state,products:payload}
        default:
        return state;
 };
}
