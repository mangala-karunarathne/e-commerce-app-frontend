import { createStore } from "redux";

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "ADD":
      return { value: state.value + 1 + action.someValue };
    default:
      return state;
  }
};

const store = createStore(counterReducer, { value: 0 });

console.log(store.getState());

store.dispatch({
  type: "ADD",
  someValue: 10,
});

export default store;
