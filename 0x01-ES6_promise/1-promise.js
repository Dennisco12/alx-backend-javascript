export default function getFullResponseFromAPI(success) {
	  return new Promise(function (resolve, reject){
		  if (success === true){
			  const object = {
				  status: 200,
				  body: 'Success'
			  }
			  resolve(object);
		  } else {
			  reject(Error('The fake API is not working currently'));
		  };
	  });
}
