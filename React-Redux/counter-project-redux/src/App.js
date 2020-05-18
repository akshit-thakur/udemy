import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import Counter from "./Counter";
import countReducer from "./countReducer";
import Modal from "./Modal";
import modalReducer from "./modalReducer";
import productReducer from "./productReducer";
import Products from "./Products";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const middleware = [thunk];
const store = createStore(
  combineReducers({
    countState: countReducer,
    productState: productReducer,
    modalState: modalReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
console.log(store.getState());
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
