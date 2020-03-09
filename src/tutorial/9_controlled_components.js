import React, { useState } from 'react';

let renders = 0;

export function ControlledForm()
{
  /* Create states. */
  const [ firstname, setFirstname ] = useState();
  const [ lastname, setLastname ] = useState();
  const [ email, setEmail ] = useState();

  const submit = () =>
  {
    /* Create an object that contains the values of the states. */
    const data =
    {
      firstname: firstname,
      lastname, /* shortcut for lastname: lastname */
      email,
    };

    console.log(data);
  }

  /* Function that can set values to the states. This would pose a problem... */
  const loadDeaults = () =>
  {
    setFirstname('Firstname');
    setLastname('Lastname');
    setEmail('user@email.com');
  };

  console.log(`Renders: ${++renders}`);

  return (
    <>
      {/* Change the corresponding state when user types.
        The `value` attribute of each input is the state it corresponds to.
        This means that they are "controlled". */}
      <div><input value={firstname} onChange={event => setFirstname(event.target.value)}/></div>
      <div><input value={lastname} onChange={({ target }) => setLastname(target.value)}/></div>
      <div><input value={email} onChange={({ target }) => setEmail(target.value)}/></div>
      <div>
        Firstname: {firstname}
        <br/>
        Lastname: {lastname}
        <br/>
        Email: {email}
      </div>
      <button onClick={submit}>Submit</button>
      <button onClick={loadDeaults}>Load Default Values</button>
    </>
  );
}
