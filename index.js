const students = ["John", "Jane", "Alex"]


//1.
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// 2.
for (let student of students ) {
    console.log(student)
}

//3.
for (let index in students) {
    console.log(students[index])
}

//4.
students.forEach((student) => {
    console.log(student)
})
