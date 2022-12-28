import React, { memo, useReducer } from 'react';
const Comp = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Hello {data}</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default memo(Comp);
