import React, { useState } from 'react';

/* The component that contains the Container component below. */
export function Page()
{
  /* A state that is needed in the Container component. */
  const [ page, setPage ] = useState('Home');

  return (
    <div>
      <h1>{page}</h1>
      {/* `page` and `setPage` are passed as props */}
      <Container page={page} setPage={setPage}/>
    </div>
  );
}

/* `page` and `setPage` are needed here so they are passed as props. */
const Container = ({ page, setPage }) =>
  <div>
    Type a new page:
    <input onChange={event => setPage(event.target.value)}/>
    <Content page={page} setPage={setPage}/>
  </div>

/* `page` and `setPage` are also needed here. */
const Content = ({ page, setPage }) =>
  <div>
    <h3>The current page is {page}</h3>
    <button onClick={() => setPage('Home')}>Click here to reset the page.</button>
  </div>

/* This will probably be problematic for more complex component trees.
  It would be better to use a "Context". */
