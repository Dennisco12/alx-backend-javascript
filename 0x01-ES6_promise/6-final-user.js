import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup (firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then(function (allResponse) {
    allResponse.map((stat) => ({
      status: signUpResponse.status,
      value: signUpResponse.status === 'fulfilled' ? stat.value : String(stat.reason),
    }))
  });
}
