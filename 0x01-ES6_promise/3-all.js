import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResponse, createResponse]) => {
      console.log(uploadResponse.body, createResponse.firstName, createResponse.lastName);
    }).catch(() => {
      console.log('Signup system offline');
    });
}
