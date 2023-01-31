export default function getStudentIdsSum (list) {
  const initial = 0;
  return list.reduce(
    (accumulate, current) => accumulate + current['id'],
    initial
  );
}
