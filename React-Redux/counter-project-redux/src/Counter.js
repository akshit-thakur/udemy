import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, modalOpen, RESET } from "./actions";
function Counter({ name, count, increase, decrease, reset }) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <h2>{name}</h2>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button type="button" className="btn" onClick={decrease}>
          Decrease
        </button>
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button type="button" className="btn" onClick={increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ countState: { count, name } }) {
  return { count: count, name: name };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => {
      dispatch({ type: RESET });
      dispatch(modalOpen("Susan", "Lorem Ipsum Ipsum Ipsum"));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
