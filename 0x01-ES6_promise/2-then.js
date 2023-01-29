export default function handleResponseFromAPI(promise) {
  promise.then(function() {
    const object = {
      status: 200,
      body: 'success'
    }
    return object
  }).catch(Error()).then(function (){
  console.log("Got a response from the API")
  });
};
