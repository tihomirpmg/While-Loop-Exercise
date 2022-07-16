function solve(input) {
    let myBook = input[0];
    let index = 1;
    let nextBook = input[index];
    index++;
    let foundBook = false;
    while (nextBook !== "No More Books") {

        if (nextBook === myBook) {
            foundBook = true;
            break;
        }
        index++;
        nextBook = input[index];
    }
    if (foundBook === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
solve(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
