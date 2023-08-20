function updateRemoteStudents(arr) {
  return arr.map((student) => {
    const updatedStudent = { ...student };
    if (!student.hasOwnProperty("location")) {
      updatedStudent.location = "remote";
    }
    return updatedStudent;
  });
}

module.exports = updateRemoteStudents;
