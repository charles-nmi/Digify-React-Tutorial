/* `useState` is called a "hook".
  Hooks can only be used in function components.
  Rules of hooks: https://reactjs.org/docs/hooks-rules.html */
import React, { useState } from 'react';

export function ComponentWithState({ isMorning })
{
  /* Here we create states using the "state hook".
    In the first state, `morning` is the actual state,
    while `setMorning` is the "setter" for the state,
    used to update its value. (Similar to this.setState
    in class components.) The parameter of `useState` is the
    initial value for the state.
    Again, everytime states are updated, the element it is
    used in is re-rendered.
  */
  const [ number, setNumber ] = useState(1);
  const [ morning, setMorning ] = useState(isMorning);
  const [ elements, setElements ] = useState([]);

  const addElement = () =>
  {
    const newElements = elements.concat(<div>New element!</div>);
    setElements(newElements);
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      {/* We can use states as values. */}
      {
        morning?
          <h2><u>Good Morning</u></h2> :
          <h3><strong>Magandang Hapon</strong></h3>
      }
      {/* Here, a new value is set to the `morning` state. */}
      <button onClick={() => setMorning(!morning)}>
        Change Time
      </button>
      <br/>
      <button onClick={addElement}>
        Add Element
      </button>
      <br/>
      <br/>
      {elements}
    </div>
  );
}
