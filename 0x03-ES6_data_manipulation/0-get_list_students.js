/* This returns an array of objects
 * The objects are students of attributes id, firstname and location
 * */

export default function getListStudents() {
  var list = new Array();
  const object1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  list.push(object1)

  const object2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  }
  list.push(object2);

  const object3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  }
  list.push(object3);

  return list;
}
