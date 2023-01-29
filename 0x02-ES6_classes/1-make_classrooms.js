import ClassRoom from './0-classroom';

export default function initializeRooms () {
  let array = []
  array.push(ClassRoom(19));
  array.push(ClassRoom(20));
  array.push(ClassRoom(34));

  return array;
}
