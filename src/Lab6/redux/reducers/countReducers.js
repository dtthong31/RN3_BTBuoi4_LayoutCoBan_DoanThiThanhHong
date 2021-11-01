import { COUNT_UP,COUNT_DOWN } from "../actions/countActions";
const initState ={
    number:5,
    name: "Hong",
}
const countReducers =(state = initState,action)=>{
    console.log(action.type);
    switch (action.type) {
        case COUNT_UP:
            state.number+=1;
            return {...state}; 
        case COUNT_DOWN:
            state.number-=1;
            return {...state}; 
        default:
            return state;
    }
   
}
export default countReducers;