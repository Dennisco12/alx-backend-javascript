export default function SignUpUser(firstName, lastName) {
  return new Promise((resolve, undefined) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
