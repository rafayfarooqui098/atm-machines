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
      choices: ["withdraw", "cheak balance","fast cash"],
    },
  ]);

  if ((operationAns.operation = "withdraw")) {
    let amountAns = await inquirer.prompt([
      { name: "amount", message: "enter your amount", type: "number" },
    ]);
    // =, -=, +=
    mybalance -= amountAns.amount;
    console.log("your remaining balance is : " + mybalance);
  } else if ((operationAns.amount = "cheak balance")) {
    console.log("your balance is: " + mybalance);


  } else if (operationAns.amount = "fastcash") {
    console.log("please select one amount: " , "1000","2000","5000","10000")
  }


} else {
  console.log("incoreect pin");
}
