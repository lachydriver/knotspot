import { createStore } from "redux";



function rootReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_SUM":
      let stateCopy = state.map((bone) => {
        const { id, name, sum } = action.payload;
        if (bone.id === id) {
          bone.sum = bone.sum + sum;
        }
        return bone;
      });
      return stateCopy;
    default:
      return state;
  }

  /*     if(action.type === updateSum) {
        return Object.assign({}, state, {
        bones: state.bones.push(action.payload)
        })
    } */
}

export function updateSum(payload) {
  return { type: "UPDATE_SUM", payload };
}



export default rootReducer;
