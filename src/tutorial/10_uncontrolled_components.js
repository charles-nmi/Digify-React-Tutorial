import React, { useRef } from 'react';

let renders = 0;

export function UncontrolledForm()
{
  /* Use refs instead of states for each input. */
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();

  const submit = () =>
  {
    /* Get the values of each input by using their refs. */
    const data =
    {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
    }

    console.log(data);
  }

  const loadDeaults = () =>
  {
    /* Set the values of each input by using their refs. */
    firstname.current.value = 'Firstname';
    lastname.current.value = 'Lastname';
    email.current.value = 'user@email.com';
  };

  console.log(`Renders: ${++renders}`);

  return (
    <>
      {/* Assign the inputs to the refs.
        The `value` attribute of each input is not set with a state.
        This means that they are "uncontrolled". */}
      <div><input ref={firstname}/></div>
      <div><input ref={lastname}/></div>
      <div><input ref={email}/></div>
      <button onClick={submit}>Submit</button>
      <button onClick={loadDeaults}>Load Default Values</button>
    </>
  );
}
