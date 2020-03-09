export function someDataSource()
{
  return new Promise(resolve =>
  {
    setTimeout(() => {
      resolve({ my: 'data' });
    }, 3000);
  })
}