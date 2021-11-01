const initState ={
    username: ' RN3',
}
const usernameReducers =(state= initState,action)=>{
    switch (action.type) {
        case UPDATE_USERNAME:

            return {...state};
    
        default:
            return state;
    }
}