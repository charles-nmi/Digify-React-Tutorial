import React from 'react';
import ReactDOM from 'react-dom';

/* JSX is like "HTML in JS" */

const name = 'Digify';
const isMorning = true;

/* JSX can contain values by using {} */
const text = <h2>Hello, {name}</h2>;

/* Values in JSX can only be "expressions" */
const greeting = <h3>{isMorning? 'Good Morning' : 'Magandang Hapon'}</h3>;

/* JSX can have attributes and children */
const container = (
  /* Class attributes in JSX are named `className` and not `class` */
  <div className="container">
    <img src="/logo192.png"/>
    <br/>
    {text}
    {greeting}
    <button onClick={() =>
    {
      // Try assinging this event handler to a function above.
      console.log('Hello');
    }}>
      Log Hello
    </button>
  </div>
);

/* This renders the JSX into the #root element in index.html */
ReactDOM.render(container, document.getElementById('root'));
