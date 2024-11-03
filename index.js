
const redux = require("redux");
const {configureStore} = require("@reduxjs/toolkit");

//const action type
const CAKE_ORDERED = "CAKE_ORDERED";

//action creatior
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

const initialState = {
  numOfCakes: 10,
};

//(previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = configureStore({reducer});
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
 
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
