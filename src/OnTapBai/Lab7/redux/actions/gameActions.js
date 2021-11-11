export const USER_SELECT = "USER_SELECT";
export const userSelectAcion = payload => ({ type: USER_SELECT, payload });
export const USER_PLAY = "USER_PLAY";
export const userPlayAction = () => ({
    type: USER_PLAY
});
export const CAL_RESULT ='CAL_RESULT';
export const calResultAction=()=>({type:CAL_RESULT});
export const USER_RESET ='RESET';
export const userResetAction =()=>({type:USER_RESET});