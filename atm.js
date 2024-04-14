import inquirer from "inquirer";
let mybalance = 70000; //dollars
let mypin = 7861;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinanswer.pin === mypin) {
    console.log("corret PIn");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "what do you have to do?",
            type: "list",
            choices: ["withdraw", "cheak balance",],
        },
    ]);
    if ((operationAns.operation = "withdraw")) {
        let amountAns = await inquirer.prompt([
            { name: "amount", message: "enter your amount", type: "number" },
        ]);
        // =, -=, +=
        mybalance -= amountAns.amount;
        console.log("your remaining balance is : " + mybalance);
    }
    else if ((operationAns.operation = "cheak balance")) {
        let mybalance = await inquirer.prompt([{
                name: "amount", message: "your remaining balance is", type: "number"
            }]);
        console.log("your balance is: " + mybalance);
    }
}
else {
    console.log("incoreect pin");
}
