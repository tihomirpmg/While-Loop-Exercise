function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let volume = width * length * height;
    let movedCartons = 0;
    let index = 3;
    while (true) {
        numCartons = Number(input[index]);
        index++;
        if (isNaN(numCartons) || numCartons == "undefined" || numCartons == "Done") {
            break;
        }
        else {
            movedCartons += numCartons;
        }
    }

    if (movedCartons > volume) {
        console.log(`No more free space! You need ${Math.abs(movedCartons - volume)} Cubic meters more.`);
    } else {
        console.log(`${Math.abs(movedCartons - volume)} Cubic meters left.`);
    }
}
solve(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])