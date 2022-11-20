import { createStore } from "redux";
import TodoReducer from "../Reducer/Reducer";

const Store = createStore(TodoReducer)


export default Store