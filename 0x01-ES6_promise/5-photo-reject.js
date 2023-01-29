export default function uploadPhoto(fileName) {
  return new Promise(function (resolve, reject) {
    reject(Error(fileName + " cannot be processed"));
  });
}
