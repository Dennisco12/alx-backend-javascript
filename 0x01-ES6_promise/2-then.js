export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    const object = ({
      status: 200,
      body: 'success',
    });
    return object;
  })
  .catch(() => new Error())
  .finally(() => console.log('Got a response from the API'));
}
