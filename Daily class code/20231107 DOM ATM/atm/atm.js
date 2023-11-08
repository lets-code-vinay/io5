let amount = 10000;
let pin = 1234;

/**
 * @description Withdraw btn clicked
 */
const withdrawAmount = () => {
  console.log("withdraw clicked");
  const [wdSection] = document.getElementsByClassName("withdraw-section");
  const [mainSection] = document.getElementsByClassName("main-section");
  wdSection.classList.remove("display-none");
  mainSection.classList.add("display-none");
};

const withdraw = () => {
  const wdAmount = document.getElementById("wd-amount");
  const [wdSection] = document.getElementsByClassName("withdraw-section");
  const [checkPinSec] = wdSection.getElementsByClassName("check-pin");

  const [wdBtn] = wdSection.getElementsByClassName("withdraw-btn");

  let html = document.createElement("div");

  if (wdAmount.value <= amount) {
    amount = amount - wdAmount.value;
    console.log("balance amount", amount);

    html.innerHTML = `<h1 class="balance">Balance:<strong>${amount}</strong></h1>`;
    wdSection.prepend(html);
    checkPinSec.classList.add("display-none");
    wdAmount.classList.add("display-none");
    wdBtn.classList.add("display-none");
  } else {
    html.innerHTML = `<h3 style="color:red; border:1px solid white;">Insufficient Balance</h3>`;
    wdSection.append(html);
  }
};

/**
 * @description deposit btn clicked
 */
const depositAmount = () => {
  const [depSection] = document.getElementsByClassName("deposit-section");
  const [mainSection] = document.getElementsByClassName("main-section");

  depSection.classList.remove("display-none");
  mainSection.classList.add("display-none");
};

const matchPinsDeposit = () => {
  const [depSection] = document.getElementsByClassName("deposit-section");
  const oldPin = depSection.querySelector("#old-pin");

  let div = document.createElement("div");

  if (pin == Number(oldPin.value)) {
    const enterAmtInput = depSection.querySelector("#deposit-amount");
    const enterAmtBtn = depSection.querySelector("#deposit-btn");

    enterAmtInput.classList.remove("display-none");
    enterAmtBtn.classList.remove("display-none");
  } else {
    div.innerHTML = `<h3 style="color:red; border:1px solid white;">Pin has not been matched. Please try again</h3>`;
    depSection.append(div);
  }
};

const deposit = () => {
  const depAmount = document.getElementById("deposit-amount");
  const [depSection] = document.getElementsByClassName("deposit-section");
  const [checkPinSec] = depSection.getElementsByClassName("check-pin");

  const [depBtn] = depSection.getElementsByClassName("deposit-btn");

  amount = amount + Number(depAmount.value);
  console.log("balance amount", amount);

  const div = document.createElement("div");
  div.innerHTML = `<h1 class="balance">Balance:<strong>${amount}</strong></h1>`;

  depSection.prepend(div);

  checkPinSec.classList.add("display-none");
  depAmount.classList.add("display-none");
  depBtn.classList.add("display-none");
};

const transferAmount = () => {
  console.log("transferAmount clicked");
};

const balanceEnquiry = () => {
  const [balSection] = document.getElementsByClassName("balance-section");
  const [mainSection] = document.getElementsByClassName("main-section");

  balSection.classList.remove("display-none");
  mainSection.classList.add("display-none");
};

const matchPinsBalance = () => {
  const [balSection] = document.getElementsByClassName("balance-section");
  const oldPin = balSection.querySelector("#old-pin");
  let div = document.createElement("div");

  if (pin == Number(oldPin.value)) {
    const pinValidationInput = balSection.querySelector(".check-pin");

    pinValidationInput.classList.add("display-none");
    div.innerHTML = `<h1 class="balance">Your current Balance:<strong>${amount}</strong></h1>`;

    balSection.prepend(div);
  } else {
    div.innerHTML = `<h3 style="color:red; border:1px solid white;">Pin has not been matched. Please try again</h3>`;
    balSection.append(div);
  }
};

const changePin = () => {
  console.log("changePin clicked");
  const [pinSection] = document.getElementsByClassName("pin-section");
  const [btnContainer] = document.getElementsByClassName("btn-container");
  pinSection.classList.remove("display-none");
  btnContainer.classList.add("display-none");
};

const exit = () => {
  console.log("exit clicked");
};

const changePins = () => {
  const newPinValue = document.getElementById("new-pin");
  const [pinSection] = document.getElementsByClassName("pin-section");
  const [oldPinSec] = document.getElementsByClassName("check-pin");
  const newPinInput = document.getElementById("new-pin");
  const changePinBtn = document.getElementById("change-pin-btn");

  let html = "";
  html = document.createElement("div");

  if (newPinValue.value.length === 4) {
    pin = newPinValue.value;
    html.innerHTML = `<h1 class='success-msg'> you have changed your pin successfully</h1>`;

    changePinBtn.classList.add("display-none");
    oldPinSec.classList.add("display-none");
    newPinInput.classList.add("display-none");
    pinSection.prepend(html);
  }
};

const matchPins = () => {
  const [pinSection] = document.getElementsByClassName("pin-section");
  let html = "";

  const oldPin = document.querySelector("#old-pin");

  html = document.createElement("div");

  if (pin == Number(oldPin.value)) {
    const newPinEnable = document.getElementById("new-pin");
    const changePinBtn = document.getElementById("change-pin-btn");

    newPinEnable.classList.remove("display-none");

    changePinBtn.classList.remove("display-none");

    html.innerHTML = `<h3 style="color:white; border:1px solid white;">Pin has been matched. Now You can change your Pin</h3>`;
    pinSection.append(html);
  } else {
    html.innerHTML = `<h3 style="color:red; border:1px solid white;">Pin has not been matched. Please try again</h3>`;
    pinSection.append(html);
  }
};

const matchPinsWithdraw = () => {
  const [wDSection] = document.getElementsByClassName("withdraw-section");
  let html = "";
  const oldPin = wDSection.querySelector("#old-pin");

  html = document.createElement("div");

  if (pin == Number(oldPin.value)) {
    const enterAmtInput = wDSection.querySelector("#wd-amount");
    const enterAmtBtn = wDSection.querySelector("#withdraw-btn");

    enterAmtInput.classList.remove("display-none");
    enterAmtBtn.classList.remove("display-none");
  } else {
    html.innerHTML = `<h3 style="color:red; border:1px solid white;">Pin has not been matched. Please try again</h3>`;
    wDSection.append(html);
  }
};

/**
 * @description Go to main screen
 */
const goToMainMenu = () => {
  const pinSection = document.querySelector(".pin-section");
  const mainSection = document.querySelector(".main-section");
  const [wdSection] = document.getElementsByClassName("withdraw-section");
  const [depSection] = document.getElementsByClassName("deposit-section");
  const [balSection] = document.getElementsByClassName("balance-section");

  pinSection.classList.remove("display-block");
  pinSection.classList.add("display-none");
  wdSection.classList.add("display-none");
  depSection.classList.add("display-none");
  balSection.classList.add("display-none");

  mainSection.classList.remove("display-none");
};
