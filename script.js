// get elements
const getCounterEl = document.getElementById("counter");
const IncrementEl = document.getElementById("increment");
const DecrementEl = document.getElementById("decrement");

// action identifire

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
};

// reducer

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  getCounterEl.innerText = state.value;
};
render();
store.subscribe(render);

// button click lisener

IncrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

DecrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
