import { Increment ,Decrement } from "./ActionType";

export const increment =(value)=>{
return{
type: Increment,
payload: value
}
}
export const decrement =(value)=>{
    return{
    type: Decrement,
    payload: value
    }
    }