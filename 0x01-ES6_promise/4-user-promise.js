export default function SignUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({ firstName, lastName });
    reject(new Error('An error has occured'));
  });
}
