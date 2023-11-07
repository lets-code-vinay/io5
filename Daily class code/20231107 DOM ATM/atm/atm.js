let amount = 10000;
let pin = 1234;

const withdrawAmount = () => {
  console.log("withdraw clicked");
  const [wdSection] = document.getElementsByClassName("withdraw-section");
  const [actions] = document.getElementsByClassName("btn-container");
  wdSection.classList.remove("display-none");
  actions.classList.add("display-none");
};

const depositAmount = () => {
  console.log("depositAmount clicked");
};

const transferAmount = () => {
  console.log("transferAmount clicked");
};

const balanceEnquiry = () => {
  console.log("balanceEnquiry clicked");
};

const changePin = () => {
  console.log("changePin clicked");
  const [pinSection] = document.getElementsByClassName("pin-section");
  pinSection.classList.remove("display-none");
};

const exit = () => {
  console.log("exit clicked");
};

const changePins = () => {
  const newPinValue = document.getElementById("new-pin");
  const [pinSection] = document.getElementsByClassName("pin-section");
  console.log("clickeing change pin", newPinValue.value.length);

  if (newPinValue.value.length === 4) {
    pin = newPinValue.value;
    pinSection.innerHTML = `<h1 class='success-msg'> you have changed your pin successfully</h1>`;
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

    html.innerHTML = `<h3 style="color:white; border:1px solid white;">Pin has been matched. You can change your Pin now</h3>`;
    newPinEnable.classList.remove("display-none");
    newPinEnable.classList.add("display-block");

    changePinBtn.classList.remove("display-none");
    changePinBtn.classList.add("display-block");

    pinSection.append(html);
  } else {
    html.innerHTML = `<h3 style="color:red; border:1px solid white;">Pin has not been matched. Please try again</h3>`;
    pinSection.append(html);
  }
};

const matchPinsWithdraw = () => {
  const [wDSection] = document.getElementsByClassName("withdraw-section");
  let html = "";
  const oldPin = document.querySelector("#old-pin");

  html = document.createElement("div");

  if (pin == Number(oldPin.value)) {
    const newPinEnable = document.getElementById("new-pin");
    const changePinBtn = document.getElementById("change-pin-btn");

    html.innerHTML = `<h3 style="color:white; border:1px solid white;">Pin has been matched. You can change your Pin now</h3>`;
    newPinEnable.classList.remove("display-none");
    newPinEnable.classList.add("display-block");

    changePinBtn.classList.remove("display-none");
    changePinBtn.classList.add("display-block");

    pinSection.append(html);
  } else {
    html.innerHTML = `<h3 style="color:red; border:1px solid white;">Pin has not been matched. Please try again</h3>`;
    pinSection.append(html);
  }
};
