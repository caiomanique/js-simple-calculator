var firstNumber = prompt("Enter a number: ");
var secondNumber = prompt("Enter a second number: ");
var operation = prompt("Would you like to add, subtract, multiply or divide your numbers: ")
var addition = Number(firstNumber) + Number(secondNumber);
var subtraction = Number(firstNumber) - Number(secondNumber);
var multiplication = Number(firstNumber) * Number(secondNumber);
var division = Number(firstNumber) / Number(secondNumber);
var remainder = Number(firstNumber) % Number(secondNumber);

if ((operation === "add" || operation === "Add" || operation === "+") && !isNaN) {
    alert("The result of your addition is: " + addition);
} else if ((operation === "subtract" || operation === "Subtract" || operation === "-") && !isNaN) {
    alert("The result of your subtraction is: " + subtraction);
} else if ((operation === "multiply" || operation === "Multiply" || operation === "*") && !isNaN) {
    alert("The result of your multiplication is: " + multiplication);
} else if ((operation === "divide" || operation === "Divide" || operation === "/") && !isNaN) {
    alert("The result of your division is: " + ~~division + "\nWith a remainder of: " + remainder);
} else if (isNaN) {
    alert("One of your inputs for a number was not valid.\n\nAvoid using characters such as:\n- Letters (ex: AxByCz)\n- Symbols (ex:!#$%&/)")
} else {
    alert("Your input for operation desired was not valid.\nIf error persists use symbol corresponding to your operation:\n+ for addition\n- for subtraction\n* for multiplication\n/ for division.")
}