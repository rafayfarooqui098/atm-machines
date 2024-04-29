#! /usr/bin/env node
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
    let operationAns = await inquirer.prompt([
        {
            name: "accountType",
            message: "select account type",
            type: "list",
            choices: ["current account", "saving account",],
        },
        {
            name: "transmethod",
            message: "select transaction method",
            type: "list",
            choices: ["cash withdrawal", "fast cash"]
        }
    ]);
    if (operationAns.transmethod == "cash withdrawal") {
        let cashwithdrawamount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "enter your amount to withdraw",
                type: "number"
            },
        ]);
        // 
        if (mybalance >= cashwithdrawamount.withdrawal) {
            mybalance -= cashwithdrawamount.withdrawal;
            console.log(`your total balance is ,${mybalance}`);
        }
        else
            (console.log("insufficient balance"));
    }
    else {
        let fastcashamount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select amount you want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "2000",
                    "5000",
                ]
            }
        ]);
        if (mybalance >= fastcashamount.fastcash) {
            mybalance -= fastcashamount.fastcash;
            console.log(`your balance is ,${mybalance}`);
        }
        else
            (console.log(`insufficient balance`));
    }
}
