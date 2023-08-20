const updateRemoteStudents = require("../update-remote-students");

describe("updateRemoteStudents", () => {
  test("returns new array", () => {
    const input = [{ name: "Euler", age: 27 }];
    const output = updateRemoteStudents(input);
    expect(input).not.toBe(output);
  });
  test("an array with 1 object without location property returns correct output", () => {
    const input = [{ name: "Euler", age: 27 }];
    const output = [{ name: "Euler", age: 27, location: "remote" }];
    expect(updateRemoteStudents(input)).toEqual(output);
  });
  test("an array with multiple objects without location property returns correct output", () => {
    const input = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const output = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    expect(updateRemoteStudents(input)).toEqual(output);
  });
  test("does not mutate original array of objects", () => {
    const input = [{ name: "Euler", age: 27 }];
    updateRemoteStudents(input);
    expect(input).toEqual([{ name: "Euler", age: 27 }]);
  });
});
