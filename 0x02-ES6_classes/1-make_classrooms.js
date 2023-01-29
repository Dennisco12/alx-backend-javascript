import ClassRoom from './0-classroom';

export default function initializeRooms () {
  yield ClassRoom(19);
  yield ClassRoom(20);
  yield ClassRoom(34);
}
