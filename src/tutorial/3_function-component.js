import React from 'react';

import './MyStyle.css';

/* A function component is the same with a class component, but is not a class.
  A function component can have props too. */
export function FunctionComponent({ name, isMorning })
{
  /* There's no need to add `this.` to create variables (properties in classes). */
  const text = <h2>Hello, {name}</h2>;
  const greeting = <h3>{isMorning? 'Good Morning' : 'Magandang Hapon'}</h3>;
  const clickHandler = () =>
  {
    console.log('Hello');
    name = 'new name';
  }

  /* Function components should return the JSX to be rendered. */
  return (
    <div className="container">
      <img src="/logo192.png"/>
      <br/>
      {text}
      {greeting}
      <button onClick={clickHandler}>
        Log Hello
      </button>
    </div>
  );
}
