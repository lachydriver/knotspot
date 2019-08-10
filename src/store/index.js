import { createStore } from "redux";

const initialState = {
    bones: [
      {
        name: "Anterior Deltoid",
        sum: 0,
        id: 1
      },
      {
        name: "Biceps",
        sum: 0,
        id: 2
      },
      {
        name: "Brachialis",
        sum: 0,
        id: 3
      },
      {
        name: "Brachioradialis",
        sum: 0,
        id: 4
      },
      {
        name: "Bursa",
        sum: 0,
        id: 5
      },
      {
        name: "Cervical Nerve",
        sum: 0,
        id: 6
      },
      {
        name: "Cervical Paraspinals",
        sum: 0,
        id: 7
      },
      {
        name: "Gastrocnemius",
        sum: 0,
        id: 8
      },
      {
        name: "Gluterus Maximus",
        sum: 0,
        id: 9
      },
      {
        name: "Glutes",
        sum: 0,
        id: 10
      },
      {
        name: "Gluterus Medius",
        sum: 0,
        id: 11
      },
      {
        name: "Gluterus Minimus",
        sum: 0,
        id: 12
      },
      {
        name: "Hamstrings",
        sum: 0,
        id: 13
      },
      {
        name: "Infraspinatus",
        sum: 0,
        id: 14
      },
      {
        name: "ITB",
        sum: 0,
        id: 15
      },
      {
        name: "Levator Scapulae",
        sum: 0,
        id: 16
      },
      {
        name: "Ligamentous Strain",
        sum: 0,
        id: 17
      },
      {
        name: "Long Extensors",
        sum: 0,
        id: 18
      },
      {
        name: "Long Flexors",
        sum: 0,
        id: 19
      },
      {
        name: "Lumbar Paraspinals",
        sum: 0,
        id: 20
      },
      {
        name: "Median Nerve",
        sum: 0,
        id: 21
      },
      {
        name: "Median Nerve Entrapment",
        sum: 0,
        id: 22
      },
      {
        name: "Middle Deltoid",
        sum: 0,
        id: 23
      },
      {
        name: "Para-Cervicals",
        sum: 0,
        id: 24
      },
      {
        name: "Patella Tendon",
        sum: 0,
        id: 25
      },
      {
        name: "Piriformis",
        sum: 0,
        id: 26
      },
      {
        name: "Plantar Fascia",
        sum: 0,
        id: 27
      },
      {
        name: "Popliteus",
        sum: 0,
        id: 28
      },
      {
        name: "Possible Disc Injury",
        sum: 0,
        id: 29
      },
      {
        name: "Posterior Deltoid",
        sum: 0,
        id: 30
      },
      {
        name: "Psoas",
        sum: 0,
        id: 31
      },
      {
        name: "Psoas Major",
        sum: 0,
        id: 32
      },
      {
        name: "Quadratus Lumborum",
        sum: 0,
        id: 33
      },
      {
        name: "Quadriceps",
        sum: 0,
        id: 34
      },
      {
        name: "Quads",
        sum: 0,
        id: 35
      },
      {
        name: "Rhomboids",
        sum: 0,
        id: 36
      },
      {
        name: "Sacrum",
        sum: 0,
        id: 37
      },
      {
        name: "Scalene",
        sum: 0,
        id: 38
      },
      {
        name: "Scalene SCM",
        sum: 0,
        id: 39
      },
      {
        name: "SCM",
        sum: 0,
        id: 40
      },
      {
        name: "Serratus Anterior",
        sum: 0,
        id: 41
      },
      {
        name: "Shin Splints",
        sum: 0,
        id: 42
      },
      {
        name: "Soleus",
        sum: 0,
        id: 43
      },
      {
        name: "Sternocleidomastoid SCM",
        sum: 0,
        id: 44
      },
      {
        name: "Subscapularis",
        sum: 0,
        id: 45
      },
      {
        name: "Supraspinatus",
        sum: 0,
        id: 46
      },
      {
        name: "Tensor Fascia Latae TFL",
        sum: 0,
        id: 47
      },
      {
        name: "Tensor Fascialatae",
        sum: 0,
        id: 48
      },
      {
        name: "Teres Major",
        sum: 0,
        id: 49
      },
      {
        name: "Thoracic Paraspinals ILS",
        sum: 0,
        id: 50
      },
      {
        name: "Tibialis Anterior",
        sum: 0,
        id: 51
      },
      {
        name: "Triceps",
        sum: 0,
        id: 52
      },
      {
        name: "Upper Trapezius",
        sum: 0,
        id: 53
      },
      {
        name: "Vastus Lateralis",
        sum: 0,
        id: 54
      },
      {
        name: "Vastus Medialis",
        sum: 0,
        id: 55
      },  
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
