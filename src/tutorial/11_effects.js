import React, { useEffect, useState } from 'react';

/* Dummy data source to simulate an API request. */
import { someDataSource } from './some-data-source';

export function Effects()
{
  /* Create a state that will hold the data. */
  const [ data, setData ] = useState();

  /* Async function that gets the data. */
  const getData = async () =>
  {
    /* Get the data. */
    const fetchedData = await someDataSource()
      .catch(console.error);
    
    /* Make the JSON data into a string. */
    const fetchedDataString = JSON.stringify(fetchedData);

    /* Set the fetched data to the data state. */
    setData(fetchedDataString);
  }

  /* Function that manually changes data. */
  const changeData = () => setData(JSON.stringify({ some: 'new', changed: 'data' }));

  /* This gets called everytime the `data` state gets updated. */
  useEffect(() =>
  {
    console.log('Effect called!');
    getData(); /* Call the data that gets the data. */
  }, [ data ]);

  /* Function components should return the JSX to be rendered. */
  return (
    <div>
      Data fetched from an "API"
      <pre>
        {/* Display the data. */}
        {data}
      </pre>
      <button onClick={changeData}>
        Click to change the data!
      </button>
    </div>
  );
}
