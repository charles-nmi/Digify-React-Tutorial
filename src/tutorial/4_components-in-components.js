import React from 'react';

/* This is a component with a prop `childName`.
  It is best to have components in its own file for reusability and organization. */
const Child = ({ childName }) =>
  <div>
    <h1>I'm the {childName}! But I have children too...</h1>
    <ul>
      <li>I'm child 1</li>
      <li>I'm child 2</li>
      <li>I'm child 3</li>
    </ul>
  </div>

/* This is another component (without props). */
const ForgottenChild = () => <h2>Hey don't forget about me! :(</h2>;

/* This is another component containing the two components above. */
export function Parent()
{
  return (
    <div>
      <img src="/logo192.png"/>
      <Child childName="son"/>
      <br/>
      <br/>
      <br/>
      <ForgottenChild/>
    </div>
  );
}
