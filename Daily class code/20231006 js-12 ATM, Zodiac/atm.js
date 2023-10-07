// 1. Write an ATM machine program which gives the list in console
//     Change Pin          : 1
//     Cash Withdrawal     : 2
//     Cash Deposit        : 3
//     Check Balance       : 4
//     Mini statement      : 5
//     Invalid option      : < 0 || > 5

function handleATM() {
  console.log(`Welcome Vinay To SBI ATM !! How can i assist you`);

  console.log(`Please select an option.\n 
  -->Enter 1 to Change Pin \n
  -->Enter 2 to Cash Withdrawal \n
  -->Enter 3 to Cash Deposit \n
  -->Enter 4 to Check Balance \n
  -->Enter 5 to Mini Statement \n
  `);

  const selectOption = Number(
    prompt(`Please select an option.\n 
  -->Enter 1 to Change Pin \n
  -->Enter 2 to Check Balance \n
  -->Enter 3 to Cash Deposit \n
  -->Enter 4 to Cash Withdrawal \n
  -->Enter 5 to Mini Statement \n
  `)
  );

  if (selectOption < 1 || selectOption > 5)
    return console.warn("Please select a valid option");

  let pin = 1234;
  let balance = 45000;

  switch (selectOption) {
    case 1:
      console.log(`You have selected ${selectOption} option to Change Pin`);
      const oldPin = Number(prompt("Please Enter old pin"));

      // Check if user is entering wrong pin less 1 or greater than 4
      if (String(oldPin).length != 4) {
        return console.error("Please enter only 4 digit pin");
      }

      // Check if entered pin and existed pin are matching
      if (pin == oldPin) {
        console.log("Pin has been matched");

        const newPin = Number(prompt("Please enter new pin"));

        // Check if user is entering wrong pin less 1 or greater than 4
        if (String(newPin).length !== 4) {
          return console.error("Please enter only 4 digit pin");
        }

        pin = newPin;
        console.log("You changed you pin successfully.");
      }
      break;

    case 2:
      console.log(`You have selected ${selectOption} option to Check balance`);

      const pinToCheck = Number(prompt("Please enter your pin."));

      if (String(pinToCheck).length != 4) {
        return console.log("Please enter valid 4 digit pin");
      }

      if (pinToCheck == pin) {
        console.log(`You have ${balance} in your account`);
      } else {
        console.error("Please enter correct pin");
      }

      break;

    case 3:
      console.log(`You have selected ${selectOption} option to Cash Deposit`);

      const CheckPin = Number(prompt("Please enter your pin."));

      if (String(CheckPin).length != 4) {
        return console.log("Please enter valid 4 digit pin");
      }

      if (CheckPin == pin) {
        console.log(`Your current balance is ${balance}Rs.`);
        const amountToDeposit = Number(
          prompt("Please enter amount to deposit")
        );

        const totalAmount = amountToDeposit + balance;

        console.log(`Amount of ${amountToDeposit}Rs has been deposited in your account \n
        
        Now You have ${totalAmount}Rs. in your account`);
      } else {
        console.error("Please enter correct pin");
      }
      break;

    case 4:
      console.log(
        `You have selected ${selectOption} option to Cash Withdrawal`
      );

      const pinVerify = Number(prompt("Please enter your pin."));

      if (String(pinVerify).length != 4) {
        return console.log("Please enter valid 4 digit pin");
      }

      if (pinVerify == pin) {
        console.log(`Your current balance is ${balance}Rs.`);
        const amountToWithdraw = Number(
          prompt("Please enter amount to Withdrawal")
        );

        if (amountToWithdraw <= balance) {
          const remainingAmount = balance - amountToWithdraw;
          console.log(`Amount of ${amountToWithdraw}Rs has been debited from
           your account \n
          Now You have ${remainingAmount}Rs. in your account`);
        } else {
          console.warn(`You don't have sufficient balance in your account`);
        }
      } else {
        console.error("Please enter correct pin");
      }
      break;

    case 5:
      console.log(
        `You have selected ${selectOption} option to get Mini-Statement`
      );

      console.warn(`Mini-statement facility is out of service \n
       inconvenient cost is deeply regretted`);
      break;

    default:
      console.log(
        `You have selected ${selectOption} option \n which is wrong. \n 
        please select valid option`
      );
      break;
  }
}

// handleATM();
