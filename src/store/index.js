import { createStore } from "redux";

const initialState = {
    bones: [
      {
        name: "Scalene",
        sum: 0,
        id: 0
      },
      {
        name: "Para-cervilas",
        sum: 0,
        id: 1
      },
      {
        name: "Neck",
        sum: 0,
        id: 2
      }
    ]
};

  

function rootReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_SUM":
        return Object.assign({}, state, {
          bones: state.bones.map(bone => {
            const { id, sum } = action.payload;
            if (bone.id !== id) {
              return bone
            }
            
            return Object.assign({}, bone, {
              sum: bone.sum + sum
            })
          })
        })
      
    default:
      return state;
  }
}

export function updateSum(payload) {
  return { type: "UPDATE_SUM", payload };
}

const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());

export default store;
