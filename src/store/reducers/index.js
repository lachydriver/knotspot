import { UPDATE_SUM } from '../actions/index';

const initialState = {
    bones: []
};

function rootReducer(state = initialState, action){
    if(action.type === UPDATE_SUM) {
        return Object.assign({}, state, {
        bones: state.bones.push(action.payload)
        })
    }
    return state;
}

export default rootReducer