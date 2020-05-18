import { DECREASE, INCREASE, RESET } from "./actions";

const defaultState = {
  count: 99,
  name: "bob",
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
