/* `useRef` is another hook used to create "refs".
  A "ref" is a reference to an element. */
import React, { useRef } from 'react';

export function Refs()
{
  /** @type {{ current: HTMLButtonElement }} */
  const button = useRef();

  const changeColor = () =>
  {
    /* `button.current` refers to the HTML Element in its "current state". */
    const classes = button.current.className;
    console.log(classes);

    /* We can work with the ref like a normal HTMLElement. */
    button.current.innerHTML = 'Now you can\'t :P';
    button.current.style = 'background-color: yellow;';
    button.current.className = 'new-class';
  }

  return (
    <div>
      <button className="my-button" ref={(element) => buttons.current.push(element)} onClick={changeColor}>
        You can change my color!
      </button>
    </div>
  );
}
