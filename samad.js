"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
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
}
else if (answers.operator === "-") {
    console.log(answers.num1 - answers.num2);
}
else if (answers.operator === "*") {
    console.log(answers.num1 * answers.num2);
}
else if (answers.operator === "/") {
    console.log(answers.num1 / answers.num2);
}
else {
    console.log("Invalid Operator");
}
