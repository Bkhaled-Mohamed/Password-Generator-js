const lengthText = document.querySelector("#lengthText");
const passLength = document.querySelector("#myRange");

const IncludeUpper = document.querySelector("#Uppercase");
const IncludeLower = document.querySelector("#Lowercase");
const IncludeNumber = document.querySelector("#Nummbers");
const IncludeSymbole = document.querySelector("#Symbols");

const generateBtn = document.querySelector(".generate");
const pass = document.querySelector(".pass");

const checkBoxes = document.querySelector(".checkBoxes");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$ù^&*()_+=";

let pLength = 8;
let generatedPass = "";

IncludeUpper.addEventListener("click", () => {
  if (!IncludeUpper.checked) {
    IncludeUpper.removeAttribute("checked");
  } else {
    IncludeUpper.setAttribute("checked", "");
  }
  passStrength();
  validate();
});

IncludeLower.addEventListener("click", () => {
  if (!IncludeLower.checked) {
    IncludeLower.removeAttribute("checked");
  } else {
    IncludeLower.setAttribute("checked", "");
  }
  passStrength();
  validate();
});

IncludeNumber.addEventListener("click", () => {
  if (!IncludeNumber.checked) {
    IncludeNumber.removeAttribute("checked");
  } else {
    IncludeNumber.setAttribute("checked", "");
  }
  passStrength();
  validate();
});

IncludeSymbole.addEventListener("click", () => {
  if (!IncludeSymbole.checked) {
    IncludeSymbole.removeAttribute("checked");
  } else {
    IncludeSymbole.setAttribute("checked", "");
  }
  passStrength();
  validate();
});

function validate() {
  let ar = [];

  if (IncludeUpper.checked) {
    ar.push(upperCaseLetters);
  }
  if (IncludeLower.checked) {
    ar.push(lowerCaseLetters);
  }
  if (IncludeNumber.checked) {
    ar.push(numbers);
  }
  if (IncludeSymbole.checked) {
    ar.push(symbols);
  }

  return ar;
}

function passwordLength() {
  passLength.addEventListener("click", () => {
    lengthText.innerHTML = passLength.value;

    if (passLength.value === "6") {
      lengthText.innerHTML = ` Min ${passLength.value} `;
    }
    if (passLength.value === "20") {
      lengthText.innerHTML = ` Max ${passLength.value} `;
    }

    pLength = passLength.value;
    passStrength();
  });
}

function generatePass() {
  let passType = [];
  let passLetter = "";
  let passArray;

  generateBtn.addEventListener("click", () => {
    generatedPass = "";
    validate();
    passArray = validate();
    for (let i = 0; i < pLength; i++) {
      passType = passArray[Math.floor(Math.random() * passArray.length)];
      passLetter = passType[Math.floor(Math.random() * passType.length)];
      generatedPass = generatedPass + passLetter;
    }
    pass.innerHTML = generatedPass;
  });
}

function copy() {
  const copyPass = document.querySelector(".copyPass");
  const copyFeed = document.querySelector(".copyFeed");

  function toogleInvis() {
    copyFeed.classList.toggle("hidden");
  }

  copyPass.addEventListener("click", () => {
    navigator.clipboard.writeText(generatedPass);
    copyFeed.classList.remove("hidden");
    setTimeout(toogleInvis, 2000);
  });
  clearInterval();
}

function passStrength() {
  console.log("called ");
  const sq1 = document.querySelector(".sq1");
  const sq2 = document.querySelector(".sq2");
  const sq3 = document.querySelector(".sq3");
  const sq4 = document.querySelector(".sq4");

  sq1.classList.remove("filled");
  sq2.classList.remove("filled");
  sq3.classList.remove("filled");
  sq4.classList.remove("filled");

  let array = validate().length;

  console.log("arrary is ", array);
  if ((array === 4 && pLength >= 11) || (array === 3 && pLength >= 15)) {
    sq1.classList.add("filled");
    sq2.classList.add("filled");
    sq3.classList.add("filled");
    sq4.classList.add("filled");
  }

  if ((array === 3 && pLength >= 10) || (array === 2 && pLength >= 15)) {
    sq1.classList.add("filled");
    sq2.classList.add("filled");
    sq3.classList.add("filled");
  }

  if ((array === 2 && pLength >= 8) || (array === 1 && pLength >= 15)) {
    sq1.classList.add("filled");
    sq2.classList.add("filled");
  } else {
    sq1.classList.add("filled");
  }
}

copy();
validate();
generatePass();
passwordLength();
