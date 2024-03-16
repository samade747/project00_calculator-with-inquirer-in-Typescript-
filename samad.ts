import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        message: "Enter 1st number",
        type: "number",
        name: "num1"
    },

    {
        message: "Enter 2nd number",
        type: "number",
        name: "num2"
    },

    {
        message: "select Operator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"]
    },

]);




// condition Statement logic

if (answers.operator === "+") {
    console.log(answers.num1 + answers.num2);
} else if (answers.operator === "-") {
    console.log(answers.num1 - answers.num2);
} else if (answers.operator === "*") {
    console.log(answers.num1 * answers.num2);
} else if (answers.operator === "/") {
    console.log(answers.num1 / answers.num2);
} else {
    console.log("Invalid Operator");
}   