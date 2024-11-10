const redux = require("redux");
const { configureStore } = require("@reduxjs/toolkit");
const produce = require('immer').produce


const initialState = {
  name: "Be-Asia",
  address: {
    street: "14121 44th ave S",
    city: "Tukwila",
    state: "WA",
  },
};

//action type
const STREET_UPDATED = "STREET_UPDATED";

//action creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const updateStreetReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };
    return produce(state, (draft)=> {
        draft.address.street = action.payload
    })
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    user: updateStreetReducer,
  },
});

console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(updateStreet("4337 N Denver Ave"));
unsubscribe();

//this keeps the terminal open until you hit enter--it closes too fast!
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Press Enter to exit...", () => {
  rl.close();
});
