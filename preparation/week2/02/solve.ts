function gradingStudents(grades: number[]): number[] {
    const result = []
    for (let grade of grades) {
        if (grade < 38) {
            result.push(grade)
            continue
        }
        const nextGrade = getNextM5(grade)
        if (nextGrade - grade < 3) {
            result.push(nextGrade)
        } else {
            result.push(grade)
        }
    }
    return result
}

const getNextM5 = (grade: number) => {
    let nextM5 = (grade + 5);
    return nextM5 - (nextM5 % 5)
}
console.log(gradingStudents([84, 29, 57]))
