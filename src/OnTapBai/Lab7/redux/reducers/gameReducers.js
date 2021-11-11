import { keo, bua, bao } from "../../images";
import getResultGame from "../../utils/common";
import { CAL_RESULT, USER_PLAY, USER_RESET, USER_SELECT } from "../actions/gameActions"
const initState = {
    playerSelect: { id: 'keo', image: keo },
    computerSelect: { id: 'keo', image: keo },
    listSelect: [
        { id: 'keo', image: keo },
        { id: 'bua', image: bua },
        { id: 'bao', image: bao }],
    times: 9,
    score: 0,
};

const gameReduces = (state = {...initState}, action) => {
    console.log(action.type);
    switch (action.type) {
        case USER_SELECT:
            state.playerSelect = action.payload;
            return { ...state };
        case USER_PLAY:
            state.computerSelect = state.listSelect[Math.floor(Math.random() * 3)];
            return { ...state };
        case CAL_RESULT:
            const { playerSelect, computerSelect } = state;
            const { times, score } = getResultGame(playerSelect.id, computerSelect.id)
            state.times += times;
            state.score += score;
            return { ...state };
        case USER_RESET:
            return {...initState};
        default:
            return state;
    }
}
export default gameReduces;