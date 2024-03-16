import inquirer from "inquirer";

async function main() { 
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
        choices: ["Addition", "Subtraction", "Multiplication", "Division", ]
    },

]);




// condition Statement logic

if (answers.operator === "Addition") {
    console.log(answers.num1 + answers.num2);
} else if (answers.operator === "Subtraction") {
    console.log(answers.num1 - answers.num2);
} else if (answers.operator === "Multiplication") {
    console.log(answers.num1 * answers.num2);
} else if (answers.operator === "Division") {
    console.log(answers.num1 / answers.num2);
} else {
    console.log("Invalid Operator");
}   


}

main().catch(error => console.error(error));
