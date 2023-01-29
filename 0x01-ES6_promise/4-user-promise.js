export default function SignUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
