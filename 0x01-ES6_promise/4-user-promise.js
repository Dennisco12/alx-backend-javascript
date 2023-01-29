export default function SignUpUser(firstName, lastName) {
  return new Promise(function(resolve, reject) {
    resolve({
      firstName: firstName,
      lastName: lastName,
    });
  });
};
