import React from 'react';

/* Components can be imported from another script. */
import { ComponentWithChildren } from './components/ComponentWithChildren';

export function Parent()
{
  const name = 'John';
  const quotes =
  [
    'I am a child of',
    'I am another child of',
    'Child I am of',
  ];

  return (
    <div>
      <strong>Who is {name}?</strong>
      {/* Components can have children.
        Components by default cannot have normal HTML attributes. */}
      <ComponentWithChildren name={name}> 
        {
          quotes.map((quote, i) =>
            <h2 key={i}>{quote} {name}</h2>
          )
          /* The above code outputs...
            <h2 key={0}>I am a child of John</h2>
            <h2 key={1}>I am another child of John</h2>
            <h2 key={2}>Child I am of John</h2>
           */
        }
        <div>
          <u>He's actually {name}</u>
        </div>
      </ComponentWithChildren>
    </div>
  );
}
