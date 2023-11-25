let students = [
    {
        studentName: "Tan",
        score: 7,
        priority: 2
    },
    {
        studentName: "Son",
        score: 5,
        priority: 1
    },
    {
        studentName: "Truong",
        score: 8,
        priority: 2
    },
    {
        studentName: "Luong",
        score: 7,
        priority: 2
    },
    {
        studentName: "Ha",
        score: 6,
        priority: 3
    },
    {
        studentName: "Dung",
        score: 9,
        priority: 2
    },
    {
        studentName: "Minh",
        score: 7,
        priority: 1
    },
    {
        studentName: "Dieu",
        score: 8,
        priority: 3
    }];
let sts = students.sort(function (a, b) {
    return a.score - b.score;
})

console.log(`First prize: ${sts[sts.length-1].studentName} - Score: ${sts[sts.length-1].score}`);
console.log(`Second prize: ${sts[sts.length-2].studentName} - Score: ${sts[sts.length-2].score}`);