/* `useContext` is another "hook" for getting context values */
import React, { useState, useContext } from 'react';

/* Create a context. (Should be in another script to be importable across components.)
  A "Context" can be used for accessing values across component trees.
  A Context has a value which can be set in its "Provider" (see below). */
const PageContext = React.createContext();

/* The component that contains the Container component below. */
export function Page()
{
  /* A state that is needed in the Container component. */
  const [ page, setPage ] = useState('Home');

  return (
    /* Context.Provider means that every component inside
      the `Provider` can access the value of the context. */
    <PageContext.Provider value={{ page, setPage }}>
      <div>
        <h1>{page}</h1>
        {/* No more need to pass props because we use context. */}
        <Container/>
      </div>
    </PageContext.Provider>
  );
}

/* `page` and `setPage` props are not needed anymore
  since it can be taken from the context. */
const Container = () =>
{
  /* Get the values from the PageContext. */
  const { setPage } = useContext(PageContext);

  return (
    <div>
      <span>Type a new page: </span>
      <input onChange={event => setPage(event.target.value)}/>
      <Content/>
    </div>
  );
}

/* `page` and `setPage` are also not needed here anymore. */
const Content = () =>
{
  const { page, setPage } = useContext(PageContext);

  return (
    <div>
      <h3>The current page is {page}</h3>
      <button onClick={() => setPage('Home')}>Click here to reset the page.</button>
    </div>
  );
}
