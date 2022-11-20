import { ADD,DELETE, DONE,FILTER,  } from "./Constante";

export const addtodo =(payload)=>({
    type: ADD,
    payload : payload
})
export const dlttodo =(payload)=>({
    type: DELETE,
    payload :payload
})
export const status =(payload)=>({
    type: DONE,
    payload :payload
})
export const filtertodo =(payload)=>({
    type: FILTER,
    payload :payload
})
