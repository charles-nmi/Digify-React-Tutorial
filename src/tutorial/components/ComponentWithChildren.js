import React from 'react';

/* The special `children` are the child elements of the component. */
export function ComponentWithChildren({ children, name })
{
  return (
    <div id={name}>
      <h1>Hi I'm a component with children. No my name is not {name}...</h1>
      {children}
    </div>
  );
}
