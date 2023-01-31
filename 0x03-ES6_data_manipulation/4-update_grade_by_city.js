export default function updateStudentGradeByCity (list, city, newGrades) {
  return list.filter((x) => x['location'] === city).map((y) => {
    const z = newGrades.find((student) => y['id'] === student['studentId']);
    return { ...y, grade: z ? z.grade : 'N/A' };
  });
}
