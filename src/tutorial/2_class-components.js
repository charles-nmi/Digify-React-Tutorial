import React from 'react';

/* CSS styles can be imported like so. */
import './MyStyle.css';

/* A class component extends the React.Component class. */
export class ClassComponent extends React.Component
{
  /*
    A component may have "props", values you pass to use in the component.
    Using a component follows this syntax:
    <ComponentName propName="value" anotherProp={computedValue}/>
  */
  constructor(props)
  {
    super();

    /* Props can be used in the component. */
    this.text = <h2>Hello, {props.name}</h2>;
    this.greeting = <h3>{props.isMorning? 'Good Morning' : 'Magandang Hapon'}</h3>;
    this.clickHandler = () =>
    {
      console.log('Hello');
    }
  }

  /* Every class component has a "render" function,
    which should return the JSX to be rendered. */
  render()
  {
    return (
      <div className="container">
        <img src="/logo192.png"/>
        <br/>
        {this.text}
        {this.greeting}
        <button onClick={this.clickHandler}>
          Log Hello
        </button>
      </div>
    );
  }
}
