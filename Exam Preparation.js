function solve(input) {
    let index = 0;
    let inputOfbadGrades = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let countForBadGrades = 0;
    let sumGrades = 0;
    let countProblems = 0;
    let lastName = "";
    let isNeedBreak = false;
    while (command !== 'Enough') {
        lastName = command;
        let tempGrade = Number(input[index]);
        index++;
        countProblems++;
        sumGrades += tempGrade;
        if (tempGrade <= 4.00) {
            countForBadGrades++;
            if (countForBadGrades === inputOfbadGrades) {
                isNeedBreak = true;
                break;
            }
        }
        command = input[index];
        index++;
    }
    let avg = sumGrades / countProblems;
    if (isNeedBreak) {
        console.log(`You need a break, ${inputOfbadGrades} poor grades.`);
    } else {
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${lastName}`);
    }
}

solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
