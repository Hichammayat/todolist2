
import {ADD,DELETE,DONE, FILTER} from "../Action/Constante";

const initialState={
    items:[],
    
};

const TodoReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD: return{
                items:[...state.items, action.payload],
            
        }
        break
        case DELETE: return{
            items: [...state.items.filter(item => item.id !== action.payload)]
        }
        case DONE: return{
            items:[...state.items.map((item)=>{
                if (item.id ===action.payload) {
                  item.completed = !item.completed
                }
                return item
              })]
        }
        case FILTER:return{
            items:[...state.items.filter((item)=>
                (item.value.includes(action.payload))
                 
               )]
        }
        
        default : return state
    }
}

export default TodoReducer;
